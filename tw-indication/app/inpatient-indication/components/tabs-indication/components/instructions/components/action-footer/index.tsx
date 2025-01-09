import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Platform,
} from 'react-native';

const ActionFooter = () => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity
                style={[styles.button, styles.saveButton]}
                onPress={() => { }}
            >
                <Text style={styles.buttonText}>Lưu</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, styles.resetButton]}
                onPress={() => { }}
            >
                <Text style={styles.buttonText}>Lấy lại</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        zIndex: 10,
        bottom: Platform.OS === 'ios' ? 10 : 55,
        width: '100%',
        backgroundColor: '#fff',
        padding: 10,
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
