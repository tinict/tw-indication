import TabsView from '@/components/TabsViews';
import {
    View,
    Text,
} from 'react-native';
import InfoPatient from './components/info-patient';
import TabsIndication from './components/tabs-indication';

export default function InpatientIndication() {
    const patientData = {
        soVv: "12345",
        maBA: "BA00123",
        hoTen: "Nguyễn Văn A",
        gioiTinh: "Nam",
        ngaySinh: "01/01/1980",
        ngayVaoVien: "01/01/2023",
        bsKhamVaoVien: "Dr. Trần B",
        cDoan: "Viêm phổi",
        khoaVaoVien: "Khoa Hô hấp",
        phongGiuong: "P001/G01",
        icdvv: "J18.9",
        tenBenhVaoVien: "Viêm phổi không xác định nguyên nhân",
        diaChi: "123 Đường ABC, Quận XYZ, TP HCM",
        soDienThoai: "0123456789",
    };

    const tabs = [
        {
            label: 'Thông tin',
            content: (
                <InfoPatient {...patientData} />
            ),
        },
        {
            label: 'Lập chỉ định',
            content: (
                <TabsIndication />
            ),
        },
        {
            label: 'Tờ điều trị',
            content: (
                <View>
                    <Text>Tờ điều trị</Text>
                </View>
            ),
        },
    ];

    return (
        <TabsView tabs={tabs} />
    );

};
