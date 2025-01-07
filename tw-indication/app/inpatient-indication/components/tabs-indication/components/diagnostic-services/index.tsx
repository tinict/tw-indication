import { SetStateAction, useState } from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import { Searchbar } from "react-native-paper";
import DiagnosticServicesList from "./components/diagnostic-services-list";

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

    return (
        <View
            style={{
                flex: 1,
                padding: 12,
            }}
        >
            <Searchbar
                placeholder="Nhập tên dịch vụ kỹ thuật"
                onChangeText={(query) => setSearchQuery(query)}
                value={searchQuery}
                style={styles.searchbar}
            />
            <DiagnosticServicesList
                modalVisible={false}
                setModalVisible={function (value: SetStateAction<boolean>): void {
                    throw new Error("Function not implemented.");
                }}
                listDiagnosticServices={MOCK_DIAGNOSTIC_SERVICES}
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

const styles = StyleSheet.create({
    searchbar: {
        borderRadius: 12,
        paddingHorizontal: 10,
    },
});
