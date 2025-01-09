import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Platform,
} from 'react-native';
import InstructionForm from './components/instruction-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionFooter from './components/action-footer';

const Instructions = React.memo(() => {
    const [inputs, setInputs] = useState({
        dienBien: {
            label: "Diễn biến",
            value: "",
            placeholder: "Nhập diễn biến...",
        },
        yLenh: {
            label: "Y lệnh",
            value: "",
            placeholder: "Nhập y lệnh...",
        },
        phanBiet: {
            label: "Phân biệt",
            value: "",
            placeholder: "Nhập phân biệt...",
        },
    });

    const handleInputChange = (key: string, value: string) => {
        setInputs((prevInputs: any) => ({
            ...prevInputs,
            [key]: { ...prevInputs[key], value },
        }));
    };

    const handleSave = () => {
        console.log('Saved:', inputs);
    };

    const handleReset = () => {
        setInputs({
            dienBien: {
                label: "Diễn biến",
                value: "",
                placeholder: "Nhập diễn biến...",
            },
            yLenh: {
                label: "Y lệnh",
                value: "",
                placeholder: "Nhập y lệnh...",
            },
            phanBiet: {
                label: "Phân biệt",
                value: "",
                placeholder: "Nhập phân biệt...",
            },
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <InstructionForm
                    inputValues={inputs}
                    onInputChange={handleInputChange}
                />
            </View>
        </SafeAreaView>
    );
});

Instructions.displayName = "Instructions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingBottom: Platform.OS === 'ios' ? 0 : 60,
    },
    footer: {
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 10 : 55,
        width: '100%',
        backgroundColor: '#fff',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    saveButton: {
        backgroundColor: '#800080',
        borderRadius: 5,
        paddingVertical: 12,
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
    },
    resetButton: {
        backgroundColor: '#FF0000',
        borderRadius: 5,
        paddingVertical: 12,
        flex: 1,
        marginLeft: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Instructions;
