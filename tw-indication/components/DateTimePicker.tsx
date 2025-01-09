import React, { useState } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import SingleDatePicker from './SingleDatePicker';
import TimePicker from './TimePicker';

interface DateTimePickerProps {
    initialDate?: Date;
    initialHours?: number;
    initialMinutes?: number;
    onDateTimeChange?: (dateTime: Date) => void;
    dateLabel?: string;
    timeLabel?: string;
    timeConfirmLabel?: string;
    timeCancelLabel?: string;
    customStyles?: StyleProp<ViewStyle>;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
    initialDate = new Date(),
    initialHours = new Date().getHours(),
    initialMinutes = new Date().getMinutes(),
    onDateTimeChange = () => { },
    dateLabel = "Ngày/tháng/năm",
    timeLabel = "Chọn giờ",
    timeConfirmLabel = "Hoàn thành",
    timeCancelLabel = "Hủy",
    customStyles,
}) => {
    const [selectedDate, setSelectedDate] = useState(initialDate);
    const [selectedHours, setSelectedHours] = useState(initialHours);
    const [selectedMinutes, setSelectedMinutes] = useState(initialMinutes);

    const handleDateChange = (date: Date) => {
        setSelectedDate(date);

        const updatedDateTime = new Date(date);
        updatedDateTime.setHours(selectedHours, selectedMinutes);

        onDateTimeChange(updatedDateTime);
    };

    const handleTimeChange = (hours: number, minutes: number) => {
        setSelectedHours(hours);
        setSelectedMinutes(minutes);

        const updatedDateTime = new Date(selectedDate);
        updatedDateTime.setHours(hours, minutes);

        onDateTimeChange(updatedDateTime);
    };

    return (
        <View style={[{ flexDirection: 'row' }, customStyles]}>
            <SingleDatePicker
                locale="vi"
                label={dateLabel}
                initialDate={selectedDate}
                onChangeDate={handleDateChange}
                customStyle={{
                    backgroundColor: "#fff",
                }}
            />
            <TimePicker
                initialHours={selectedHours}
                initialMinutes={selectedMinutes}
                onTimesChange={handleTimeChange}
                label={timeLabel}
                confirmLabel={timeConfirmLabel}
                cancelLabel={timeCancelLabel}
            />
        </View>
    );
};

export default DateTimePicker;
