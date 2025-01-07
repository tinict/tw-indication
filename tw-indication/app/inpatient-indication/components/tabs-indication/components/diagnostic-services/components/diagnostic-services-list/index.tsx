import React, { useState } from 'react';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ModalSelectorDiagnosticServices from '../modal-selector-diagnostic-services';
import ListItemAddDiagnosticServices from '../list-add-diagnostic-services';

interface DiagnosticServicesListProps {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    listDiagnosticServices: any[];
    diagnosticServices: any[];
};

const data = [
    {
        maDVKT: '001',
        tenDVKT: 'X-Ray',
        khoaTH: 'Radiology',
        donGiaBH: 150000,
        soLuong: 10,
        stt: 1,
    },
    {
        maDVKT: '002',
        tenDVKT: 'MRI',
        khoaTH: 'Radiology',
        donGiaBH: 200000,
        soLuong: 5,
        stt: 2,
    },
];

const fields = [
    { label: 'Mã DVKT', key: 'maDVKT' },
    { label: 'Tên DVKT', key: 'tenDVKT' },
    { label: 'Số lượng', key: 'soLuong', formatter: (value: any) => `${value} items` },
    {
        label: 'Đơn giá BH',
        key: 'donGiaBH',
        formatter: (value: any) =>
            Number(value).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
    },
];

const DiagnosticServicesList: React.FC<DiagnosticServicesListProps> = ({
    modalVisible,
    setModalVisible,
    listDiagnosticServices,
    diagnosticServices,
}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <KeyboardAwareScrollView
            extraScrollHeight={Platform.OS === 'ios' ? 64 : 0}
            contentContainerStyle={{ paddingBottom: 65 }}
        >
            {modalVisible && (
                <ModalSelectorDiagnosticServices
                    data={data}
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                    fields={fields}
                />
            )}

            {listDiagnosticServices.length > 0 && (
                <ListItemAddDiagnosticServices
                    label="Danh sách dịch vụ kỹ thuật"
                    data={diagnosticServices}
                />
            )}
        </KeyboardAwareScrollView>
    );
};

export default DiagnosticServicesList;
