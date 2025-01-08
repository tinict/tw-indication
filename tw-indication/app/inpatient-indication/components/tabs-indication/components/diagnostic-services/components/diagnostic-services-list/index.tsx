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
    return (
        <KeyboardAwareScrollView
            extraScrollHeight={Platform.OS === 'ios' ? 64 : 0}
            contentContainerStyle={{ paddingBottom: 65 }}
        >
            {modalVisible && (
                <ModalSelectorDiagnosticServices
                    data={listDiagnosticServices}
                    isModalVisible={modalVisible}
                    setIsModalVisible={setModalVisible}
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
