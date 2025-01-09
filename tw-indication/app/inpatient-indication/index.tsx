import TabsView from '@/components/TabsViews';
import {
    View,
    Text,
} from 'react-native';
import InfoPatient from './components/info-patient';
import TabsIndication from './components/tabs-indication';
import CommitList from '@/components/CommitList';

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
                <CommitList
                    commits={
                        [
                            {
                                id: '2b1ba63',
                                type: 'Diễn biến',
                                title: 'Đau thắc ngực, co thức giai đoạn 3',
                                author: 'Bs. Lê Thành Công',
                                timestamp: 'yesterday',
                                date: 'Jan 8, 2025'
                            },
                            {
                                id: 'bddc5ee',
                                type: 'Diễn biến',
                                title: 'Tai nạn gãy chân',
                                author: 'Bs. Lê Thành Công',
                                timestamp: 'yesterday',
                                date: 'Jan 8, 2025'
                            },
                            {
                                id: '419cf02',
                                type: 'Diễn biến',
                                title: 'Ngộ độc thực phẩm, nôn ra máu',
                                author: 'Bs. Lê Thành Công',
                                timestamp: '2 days ago',
                                date: 'Jan 7, 2025'
                            }
                        ]
                    }
                    onCommitPress={(
                        commit) => console.log('Commit pressed:', commit)
                    }
                />
            ),
        },
    ];

    return (
        <TabsView tabs={tabs} />
    );
};
