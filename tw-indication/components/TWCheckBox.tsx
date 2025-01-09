import React, { useState, useEffect } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { CheckBox } from 'react-native-elements';

interface TWCheckBoxProps {
    onChange?: (isChecked: boolean) => void;
    isChecked?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    [key: string]: any;
}

const TWCheckBox: React.FC<TWCheckBoxProps> = ({
    onChange,
    isChecked: initialIsChecked = false,
    containerStyle = {},
    ...props
}) => {
    const [isChecked, setIsChecked] = useState<boolean>(initialIsChecked);

    const handleToggle = () => {
        const newState = !isChecked;
        setIsChecked(newState);
        if (onChange) {
            onChange(newState);
        }
    };

    useEffect(() => {
        setIsChecked(initialIsChecked);
    }, [initialIsChecked]);

    return (
        <CheckBox
            checked={isChecked}
            onPress={handleToggle}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon="checkbox-blank-outline"
            containerStyle={{ margin: 0, padding: 0, ...(containerStyle as object) }}
            {...props}
        />
    );
};

export default TWCheckBox;
