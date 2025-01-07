import { useState } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Searchbar } from "react-native-paper";
import MedicineList from "./components/medicine-list";
import Icon from "@/components/Icon";

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
    const [filteredMedicines, setFilteredMedicines] = useState(MOCK_MEDICINES);
    const [modalVisible, setModalVisible] = useState(false);

    const onSearch = () => {
        const filtered = MOCK_MEDICINES.filter((medicine) =>
            medicine.tenThuoc.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        setFilteredMedicines(filtered);
        setModalVisible(true);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 12 }}>
                <View
                    style={{
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 12,
                    }}
                >
                    <TouchableOpacity>
                        <Icon
                            name="options"
                            library="Ionicons"
                            size={28}
                            style={{
                                marginRight: 10,
                                color: "#555",
                            }}
                        />
                    </TouchableOpacity>
                    <Searchbar
                        placeholder="Nhập tên thuốc"
                        onChangeText={(query) => setSearchQuery(query)}
                        value={searchQuery}
                        style={{
                            flex: 1,
                            borderRadius: 12,
                            elevation: 2,
                            backgroundColor: "#f7f7f7",
                            paddingHorizontal: 5,
                        }}
                        onSubmitEditing={onSearch}
                        returnKeyType="search"
                    />
                </View>

                <MedicineList
                    listMedicine={filteredMedicines}
                    prescriptions={[
                        {
                            "maThuoc": "007723",
                            "tenThuoc": "Efferalgan-80mg",
                            "hoatChat": "Paracetamol (acetaminophen)",
                            "giaBHYT": 1938.00,
                            "tonKho": 2476.00,
                            "tonDuTinh": 2476.00,
                            "giaTT": 1938.00,
                            "chenhLech": 0.00,
                            "tiLe": 100,
                            "maKho": "011",
                            "maHoatChat": "40.48",
                            "maHoatChatTT": "",
                            "dvt": "Gói",
                            "bh": true
                        },
                    ]}
                    modalVisible={modalVisible}
                    setModalVisible={(isVisible: any) => {
                        setModalVisible(isVisible);
                    }}
                />
            </View>
        </View>
    );
};
