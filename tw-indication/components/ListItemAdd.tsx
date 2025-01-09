import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    StatusBar,
} from 'react-native';

interface Item {
    id: string;
    [key: string]: any;
}

interface ListItemAddProps {
    label: string;
    data: Item[];
    customComponent: (item: Item) => React.ReactNode;
}

export default function ListItemAdd({
    label,
    data,
    customComponent,
}: ListItemAddProps) {
    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
        >
            <Text style={styles.label}>
                {label}
            </Text>
            {data.map((item, index) => (
                <View key={index}>
                    {customComponent(item)}
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333333',
        textAlign: 'center',
        marginVertical: 10,
    },
});
