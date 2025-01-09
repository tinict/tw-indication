import { useState } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Platform
} from "react-native";
import { Searchbar } from "react-native-paper";
import MedicineList from "./components/medicine-list";
import Icon from "@/components/Icon";
import PartialOverlaysModal from "@/components/modals/PartialOverlaysModal";
import TWCheckBox from "@/components/TWCheckBox";
import ActionFooter from "./components/action-footer";

const MOCK_MEDICINES = [
    {
        "maThuoc": "007795",
        "tenThuoc": "Agimol 150-150mg",
        "hoatChat": "Paracetamol (acetaminophen)",
        "giaBHYT": 294.00,
        "tonKho": 5846.00,
        "tonDuTinh": 5846.00,
        "giaTT": 294.00,
        "chenhLech": 0.00,
        "tiLe": 100,
        "maKho": "011",
        "maHoatChat": "40.48",
        "maHoatChatTT": "",
        "dvt": "Gói",
        "bh": true
    },
    {
        "maThuoc": "007722",
        "tenThuoc": "Efferalgan-500mg",
        "hoatChat": "Paracetamol (acetaminophen)",
        "giaBHYT": 2450.00,
        "tonKho": 48603.00,
        "tonDuTinh": 48598.00,
        "giaTT": 2450.00,
        "chenhLech": 0.00,
        "tiLe": 100,
        "maKho": "011",
        "maHoatChat": "40.48",
        "maHoatChatTT": "",
        "dvt": "Viên",
        "bh": true
    },
];

export default function Medicines() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filtered, setFiltered] = useState(MOCK_MEDICINES);
    const [modalVisible, setModalVisible] = useState(false);
    const [isPartialOverlaysModal, setIsPartialOverlaysModal] = useState(false);

    const onSearch = () => {
        const filtered = MOCK_MEDICINES.filter((medicine) =>
            medicine.tenThuoc.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFiltered(filtered);
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => setIsPartialOverlaysModal(true)}
                    >
                        <Icon
                            name="options"
                            library="Ionicons"
                            size={28}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <Searchbar
                        placeholder="Nhập tên thuốc"
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                        style={styles.searchbar}
                        inputStyle={{ fontSize: 14 }}
                        onSubmitEditing={onSearch}
                        returnKeyType="search"
                    />

                    <TouchableOpacity
                        style={[
                            {
                                marginLeft: 10,
                                padding: 5,
                                borderRadius: 8,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }
                        ]}
                        onPress={() => { }}
                    >
                        <Icon
                            name="copy"
                            library="FontAwesome6"
                            size={28}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>

                <PartialOverlaysModal
                    visible={isPartialOverlaysModal}
                    onClose={() => setIsPartialOverlaysModal(false)}
                    content={<View><TWCheckBox /></View>}
                />

                <MedicineList
                    listMedicine={filtered}
                    prescriptions={[
                        {
                            maThuoc: ""
                        },
                        {
                            maThuoc: ""
                        }
                    ]}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                />
            </View>

            {/* <ActionFooter /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 12,
        marginBottom: Platform.select({
            ios: 20,
            android: 40,
        }),
    },
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12
    },
    iconButton: {
        marginRight: 10,
        padding: 5,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: "#555"
    },
    searchbar: {
        flex: 1,
        borderRadius: 12,
        elevation: 2,
        backgroundColor: "#f7f7f7",
        paddingHorizontal: 4
    }
});
