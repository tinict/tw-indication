import { useState } from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import { Searchbar } from "react-native-paper";
import MedicineList from "./components/medicine-list";

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
        "maThuoc": "008347",
        "tenThuoc": "Alcaine 0,5%-5mg/ml - 15ml Thuốc gây tê, thay đổi số visa 540110001624, ngày 18/11/2024",
        "hoatChat": "Proparacain hydroclorid",
        "giaBHYT": 39380.00,
        "tonKho": 37.00,
        "tonDuTinh": 37.00,
        "giaTT": 39380.00,
        "chenhLech": 0.00,
        "tiLe": 100,
        "maKho": "011",
        "maHoatChat": "40.20",
        "maHoatChatTT": "",
        "dvt": "Lọ",
        "bh": true
    },
    {
        "maThuoc": "008214",
        "tenThuoc": "Efferalgan Codeine-500mg + 30mg",
        "hoatChat": "Paracetamol + codein phosphat",
        "giaBHYT": 3758.00,
        "tonKho": 17.00,
        "tonDuTinh": 17.00,
        "giaTT": 3758.00,
        "chenhLech": 0.00,
        "tiLe": 100,
        "maKho": "011",
        "maHoatChat": "40.50",
        "maHoatChatTT": "",
        "dvt": "Viên",
        "bh": true
    },
    {
        "maThuoc": "008211",
        "tenThuoc": "Efferalgan-150mg Viên thuốc đạn",
        "hoatChat": "Paracetamol (acetaminophen)",
        "giaBHYT": 2420.00,
        "tonKho": 730.00,
        "tonDuTinh": 724.00,
        "giaTT": 2420.00,
        "chenhLech": 0.00,
        "tiLe": 100,
        "maKho": "011",
        "maHoatChat": "40.48",
        "maHoatChatTT": "",
        "dvt": "Viên",
        "bh": true
    },
    {
        "maThuoc": "007721",
        "tenThuoc": "Efferalgan-250mg",
        "hoatChat": "Paracetamol (acetaminophen)",
        "giaBHYT": 3280.00,
        "tonKho": 27473.00,
        "tonDuTinh": 27466.00,
        "giaTT": 3280.00,
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
    }
];

export default function Medicines() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    padding: 12,
                }}
            >
                <Searchbar
                    placeholder="Nhập tên thuốc"
                    onChangeText={(query) => setSearchQuery(query)}
                    value={searchQuery}
                    style={styles.searchbar}
                />

                <MedicineList
                    modalVisible={false}
                    setModalVisible={() => { }}
                    listMedicine={MOCK_MEDICINES}
                    prescriptions={[{
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
                    }]}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchbar: {
        borderRadius: 12,
        paddingHorizontal: 10,
    },
});
