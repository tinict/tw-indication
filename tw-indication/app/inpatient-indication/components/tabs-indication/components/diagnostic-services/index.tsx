import { useState } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";
import DiagnosticServicesList from "./components/diagnostic-services-list";
import PartialOverlaysModal from "@/components/modals/PartialOverlaysModal";
import TWCheckBox from "@/components/TWCheckBox";
import Icon from "@/components/Icon";

const MOCK_DIAGNOSTIC_SERVICES = [
    {
        "maDVKT": "007795",
        "tenDVKT": "X-Quang",
        "khoaTH": "Radiology",
        "donGiaBH": 150000.00,
        "donGiaTT": 150000.00,
        "chenhLech": 0.00,
        "tiLe": 100.00,
        "soLuong": 1,
        "ghiChu": "",
        "stt": 1
    }
];

export default function DiagnosticServices() {
    const [searchQuery, setSearchQuery] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [filtered, setFiltered] = useState(MOCK_DIAGNOSTIC_SERVICES);
    const [isPartialOverlaysModal, setIsPartialOverlaysModal] = useState(false);

    const onSearch = () => {
        const filtered = MOCK_DIAGNOSTIC_SERVICES.filter((dvkt) =>
            dvkt.tenDVKT.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFiltered(filtered);
        setModalVisible(true);
    };

    return (
        <View
            style={{
                flex: 1,
                padding: 12,
            }}
        >
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 12,
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        setIsPartialOverlaysModal(true);
                    }}
                >
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
                    placeholder="Nhập tên dịch vụ kỹ thuật"
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

            <PartialOverlaysModal
                visible={isPartialOverlaysModal}
                onClose={() => setIsPartialOverlaysModal(false)}
                content={
                    <View>
                        <TWCheckBox />
                    </View>
                }
            />

            <DiagnosticServicesList
                modalVisible={modalVisible}
                setModalVisible={(isVisible: any) => {
                    setModalVisible(isVisible);
                }}
                listDiagnosticServices={filtered}
                diagnosticServices={[
                    {
                        "maDVKT": "007795",
                        "tenDVKT": "X-Quang",
                        "khoaTH": "Radiology",
                        "donGiaBH": 150000.00,
                        "donGiaTT": 150000.00,
                        "chenhLech": 0.00,
                        "tiLe": 100.00,
                        "soLuong": 1,
                        "ghiChu": "",
                        "stt": 1
                    }
                ]}
            />
        </View>
    );
};
