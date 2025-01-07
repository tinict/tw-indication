import React from 'react';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ModalSelectorMedecine from '../modal-selector-medicine';
import ListItemAddMedicines from '../list-add-medicines';

interface MedicineListProps {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    listMedicine: any[];
    prescriptions: any[];
};

const MedicineList: React.FC<MedicineListProps> = ({
    modalVisible,
    setModalVisible,
    listMedicine,
    prescriptions,
}) => (
    <KeyboardAwareScrollView
        extraScrollHeight={Platform.OS === 'ios' ? 64 : 0}
        contentContainerStyle={{ paddingBottom: 65 }}
    >
        {modalVisible && (
            <ModalSelectorMedecine
                data={listMedicine}
                setIsModalVisible={setModalVisible}
                isModalVisible={modalVisible}
            />
        )}

        {prescriptions.length > 0 && (
            <ListItemAddMedicines
                label="Danh sách thuốc chỉ định"
                data={prescriptions}
            />
        )}
    </KeyboardAwareScrollView>
);

export default MedicineList;
