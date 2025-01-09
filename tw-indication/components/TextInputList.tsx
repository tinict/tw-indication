import React from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from "react-native";

type TextInputItem = {
    label: string;
    value: string;
    placeholder: string;
};

type TextInputListProps = {
    textInputs: Record<string, TextInputItem>;
    handleInputChange: (key: string, value: string) => void;
};

const TextInputList: React.FC<TextInputListProps> = ({ textInputs, handleInputChange }) => {
    return (
        <>
            {Object.keys(textInputs).map((key) => (
                <View key={key}>
                    <Text>{textInputs[key].label}</Text>
                    <TextInput
                        style={styles.input}
                        multiline
                        numberOfLines={4}
                        placeholder={`Nhập ${textInputs[key].placeholder.toLowerCase()}`}
                        value={textInputs[key].value}
                        onChangeText={(value) => handleInputChange(key, value)}
                    />
                </View>
            ))}
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginBottom: 20,
        padding: 10,
    },
});

export default TextInputList;
