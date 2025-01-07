import React from 'react';
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
} from 'react-native';

interface Item {
    [key: string]: any;
};

interface ListItemAddProps {
    label: string;
    data: Item[];
    customComponent: (item: Item) => React.ReactNode;
};

export default function ListItemAdd({
    label,
    data,
    customComponent,
}: ListItemAddProps) {
    return (
        <View>
            <Text style={styles.label}>
                {label}
            </Text>
            <ScrollView style={styles.containerScrollView}>
                {data.map((item, index) => (
                    <View key={index}>
                        {customComponent(item)}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    containerScrollView: {
        flex: 1
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333333',
        textAlign: 'center',
        marginVertical: 10,
    }
});
