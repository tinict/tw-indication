import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TimePickerModal } from "react-native-paper-dates";
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet
} from "react-native";

interface TimePickerProps {
    initialHours?: number;
    initialMinutes?: number;
    onTimesChange?: (hours: number, minutes: number) => void;
    label?: string;
    confirmLabel?: string;
    cancelLabel?: string;
}

const TimePicker: React.FC<TimePickerProps> = ({
    initialHours = 0,
    initialMinutes = 0,
    onTimesChange,
    label = "Chọn giờ",
    confirmLabel = "Hoàn thành",
    cancelLabel = "Hủy",
}) => {
    const [selectedHours, setSelectedHours] = useState<number>(initialHours);
    const [selectedMinutes, setSelectedMinutes] = useState<number>(initialMinutes);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        setSelectedHours(initialHours);
        setSelectedMinutes(initialMinutes);
    }, [initialHours, initialMinutes]);

    const handleConfirm = ({ hours, minutes }: { hours: number; minutes: number }) => {
        setSelectedHours(hours);
        setSelectedMinutes(minutes);
        if (onTimesChange) {
            onTimesChange(hours, minutes);
        }
        setIsVisible(false);
    };

    const handleDismiss = () => {
        setIsVisible(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setIsVisible(true)}
                style={styles.touchable}
            >
                <View style={styles.content}>
                    <Text style={styles.label}>{label}</Text>
                    <Text style={styles.selectedTime}>
                        {selectedHours}:{selectedMinutes < 10 ? `0${selectedMinutes}` : selectedMinutes}
                    </Text>
                </View>
                <MaterialCommunityIcons
                    name="clock-time-five-outline"
                    size={24}
                    color="#333"
                    style={styles.icon}
                />
            </TouchableOpacity>

            <TimePickerModal
                visible={isVisible}
                onConfirm={handleConfirm}
                onDismiss={handleDismiss}
                hours={selectedHours}
                minutes={selectedMinutes}
                confirmLabel={confirmLabel}
                cancelLabel={cancelLabel}
                locale="vi"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 130,
    },
    touchable: {
        backgroundColor: "#fff",
        padding: 8,
        borderBottomWidth: 2,
        borderColor: "#cfcfcf",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    content: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
    label: {
        fontSize: 12,
        color: "#333",
    },
    icon: {
        marginLeft: 20,
    },
    selectedTime: {
        fontSize: 16,
        color: "#666",
    },
});

export default TimePicker;
