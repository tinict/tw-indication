import React, { useState } from 'react';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ModalSelectorDiagnosticServices from '../modal-selector-surgical-services';
import ListItemAddSurgicalServices from '../list-add-surgical-services';

interface SurgicalServicesListProps {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    listSurgicalServices: any[];
    surgicalServices: any[];
};

const data = [
    {
        maPT: '007795',
        tenPT: 'X-Quang',
        stt: 1,
    },
];

const fields = [
    { label: 'Mã phẫu thuật', key: 'maPT' },
    { label: 'Tên phẫu thuật', key: 'tenPT' },
    { label: 'Số lượng', key: 'soLuong', formatter: (value: any) => `${value} items` },
    {
        label: 'Đơn giá BH',
        key: 'donGiaBH',
        formatter: (value: any) =>
            Number(value).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
    },
];

const SurgicalServicesList: React.FC<SurgicalServicesListProps> = ({
    modalVisible,
    setModalVisible,
    listSurgicalServices,
    surgicalServices,
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

            {listSurgicalServices.length > 0 && (
                <ListItemAddSurgicalServices
                    label="Danh sách dịch vụ kỹ thuật"
                    data={surgicalServices}
                />
            )}
        </KeyboardAwareScrollView>
    );
};

export default SurgicalServicesList;