import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Platform,
} from 'react-native';

const ActionFooter = () => {
    const handleSave = () => {
        console.log('Save clicked');
    };

    const handleReset = () => {
        console.log('Reset clicked');
    };

    return (
        <View style={styles.footer}>
            <TouchableOpacity
                style={[styles.button, styles.saveButton]}
                onPress={handleSave}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText}>Lưu</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        height: Platform.select({
            ios: 70,
            android: 70
        }),
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: Platform.select({
            ios: 10,
            android: 55
        }),
        borderTopWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        borderRadius: 5,
        paddingVertical: 12,
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    saveButton: {
        backgroundColor: '#800080',
    },
    resetButton: {
        backgroundColor: '#FF0000',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default ActionFooter;
