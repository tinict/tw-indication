import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import FullscreenModal from '@/components/modals/FullscreenModal';

interface SurgicalServicesItem {
    [key: string]: any;
    maPT: string;
    tenPT: string;
    stt: number;
};

interface FieldConfig {
    label: string;
    key: string;
    formatter?: (value: any) => string;
};

interface ModalSelectorSurgicalServicesProps {
    data: SurgicalServicesItem[];
    isModalVisible: boolean;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    fields: FieldConfig[];
};

const ModalSelectorSurgicalServices: React.FC<ModalSelectorSurgicalServicesProps> = ({
    data,
    isModalVisible,
    setIsModalVisible,
    fields,
}) => {
    return (
        <FullscreenModal
            data={data}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            onSelected={(item: SurgicalServicesItem) => {
                console.log(item);
            }}
            customComponent={(item: SurgicalServicesItem) => (
                <View style={styles.itemContainer}>
                    {fields.map((field, index) => (
                        <Text key={index} style={styles.itemSubText}>
                            {field.label}:{" "}
                            {field.formatter
                                ? field.formatter(item[field.key])
                                : item[field.key] || "N/A"}
                        </Text>
                    ))}
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    itemSubText: {
        fontSize: 14,
        color: '#555',
    },
});

export default ModalSelectorSurgicalServices;
