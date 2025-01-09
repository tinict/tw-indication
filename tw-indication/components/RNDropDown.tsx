import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
    FlatList,
    SafeAreaView,
    ViewStyle,
    TextStyle,
    ListRenderItem,
} from 'react-native';
import Icon from './Icon';

interface DropdownItem {
    label: string;
    value: string | number;
};

interface RNDropdownProps {
    data: DropdownItem[];
    value?: string | number;
    onSelect: (value: string | number) => void;
    placeholder?: string;
    containerStyle?: ViewStyle;
    buttonStyle?: ViewStyle;
    buttonTextStyle?: TextStyle;
    itemStyle?: ViewStyle;
    itemTextStyle?: TextStyle;
};

const RNDropdown: React.FC<RNDropdownProps> = ({
    data,
    value,
    onSelect,
    placeholder = 'Select an option',
    containerStyle,
    buttonStyle,
    buttonTextStyle,
    itemStyle,
    itemTextStyle,
}) => {
    const [visible, setVisible] = useState<boolean>(false);
    const selectedItem = data.find(item => item.value === value);

    const renderItem: ListRenderItem<DropdownItem> = ({ item }) => (
        <TouchableOpacity
            style={[styles.dropdownItem, itemStyle]}
            onPress={() => {
                onSelect(item.value);
                setVisible(false);
            }}
        >
            <Text style={[styles.dropdownItemText, itemTextStyle]}>
                {item.label}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={containerStyle}>
            <TouchableOpacity
                style={[styles.dropdownButton, buttonStyle]}
                onPress={() => setVisible(true)}
            >
                <Text style={[styles.buttonText, buttonTextStyle]}>
                    {selectedItem ? selectedItem.label : placeholder}
                </Text>
                <Icon
                    name={'chevron-small-down'}
                    library='Entypo'
                    size={14}
                />
            </TouchableOpacity>

            <Modal
                visible={visible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setVisible(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    onPress={() => setVisible(false)}
                >
                    <View style={styles.modalContent}>
                        <SafeAreaView style={styles.dropdownList}>
                            <FlatList<DropdownItem>
                                data={data}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.value.toString()}
                            />
                        </SafeAreaView>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    dropdownButton: {
        padding: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        width: 180,
    },
    buttonText: {
        fontSize: 12,
        color: '#333',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        maxHeight: '50%',
    },
    dropdownList: {
        paddingVertical: 10,
    },
    dropdownItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    dropdownItemText: {
        fontSize: 16,
        color: '#333',
    },
});

export default RNDropdown;