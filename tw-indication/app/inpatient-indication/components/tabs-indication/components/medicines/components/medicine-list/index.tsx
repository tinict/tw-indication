import React from 'react';
import { View } from 'react-native';
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
    <View style={{
        flex: 1
    }}>
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
    </View>

);

export default MedicineList;
