import React from "react";
import {
    View,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";

interface PartialOverlaysModalProps {
    visible: boolean;
    onClose: () => void;
    content: React.ReactNode;
}

export default function PartialOverlaysModal({
    visible,
    onClose,
    content,
}: PartialOverlaysModalProps) {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Thông tin</Text>
                    <View style={styles.modalContentContainer}>
                        {typeof content === "string" ? (
                            <Text style={styles.modalContent}>{content}</Text>
                        ) : (
                            content
                        )}
                    </View>
                    <TouchableOpacity
                        onPress={onClose}
                        style={styles.closeButton}
                    >
                        <Text style={styles.closeButtonText}>Đóng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    modalContainer: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        padding: 16,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    modalContentContainer: {
        marginBottom: 20,
    },
    modalContent: {
        fontSize: 16,
        color: "#555",
    },
    closeButton: {
        backgroundColor: "#007bff",
        paddingVertical: 10,
        borderRadius: 8,
    },
    closeButtonText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
});
