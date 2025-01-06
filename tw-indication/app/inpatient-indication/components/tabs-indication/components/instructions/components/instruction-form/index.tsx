import React from "react";
import {
    ScrollView,
    StyleSheet,
} from "react-native";

import TextInputList from "@/components/TextInputList";

type TextInputItem = {
    label: string;
    value: string;
    placeholder: string;
};

type InstructionFormProps = {
    inputValues: Record<string, TextInputItem>;
    onInputChange: (key: string, value: string) => void;
};

const InstructionForm: React.FC<InstructionFormProps> = ({ inputValues, onInputChange }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <TextInputList
                textInputs={inputValues}
                handleInputChange={onInputChange}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollViewContent: {
        paddingHorizontal: 15,
        paddingBottom: 60,
    },
    datePicker: {
        marginBottom: 15,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
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

export default InstructionForm;
