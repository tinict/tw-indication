import React, { useEffect, useState } from "react";
import { DatePickerInput } from "react-native-paper-dates";
import { configureDatePicker } from '@/config/datePickerConfig';

export default function SingleDatePicker({
    initialDate = new Date(),
    onChangeDate,
    locale = 'vi',
    label,
    customStyle,
}: {
    initialDate?: Date;
    onChangeDate?: (newDate: Date) => void;
    locale?: string;
    label?: string;
    customStyle?: any;
}) {
    const [selectedDate, setSelectedDate] = useState(initialDate);

    const handleDateChange = (newDate: any) => {
        setSelectedDate(newDate);
        onChangeDate && onChangeDate(newDate);
    };

    useEffect(() => {
        configureDatePicker();
    }, []);

    return (
        <DatePickerInput
            locale={locale || 'en'}
            label={label}
            value={selectedDate}
            onChange={handleDateChange}
            style={customStyle}
            inputMode={"start"}
        />
    );
};
