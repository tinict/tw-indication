import { Drawer } from 'expo-router/drawer';
import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IconSymbol } from '@/components/ui/IconSymbol';
import RNDropdown from '@/components/RNDropDown';

export default function StackLayout() {
    const [selectedValue, setSelectedValue] = useState<string>();

    const options = [
        { label: 'Khoa mắt', value: '1' },
        { label: 'Khoa phòng chống ngộ độc', value: '2' },
        { label: 'Phòng mổ tim', value: '3' },
        { label: 'Khoa răng hàm mặt', value: '4' },
        { label: 'Khoa dinh dưỡng', value: '5' },
    ];

    return (
        <Drawer
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: '#03A9F4',
                    height: 120,
                },
                headerTintColor: '#fff',
                drawerActiveBackgroundColor: '#03A9F4',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontFamily: 'Roboto-Medium',
                    fontSize: 15,
                },
                headerTitle: () => (
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerTitle}>
                            Nguyễn Quốc Thành (DUP017)
                        </Text>
                        <RNDropdown
                            data={options}
                            value={selectedValue}
                            onSelect={(value) => setSelectedValue(value.toString())}
                            placeholder="Chọn khoa thực hiện"
                        />
                    </View>
                ),
                headerLeft: () => (
                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Ionicons name="menu" size={28} color="#fff" />
                    </TouchableOpacity>
                ),
            })}
        >
            <Drawer.Screen
                name="setting"
                options={{
                    drawerLabel: 'Cài đặt',
                    drawerIcon: ({ color }) => (
                        <IconSymbol size={24} name="house.fill" color={color} />
                    ),
                }}
            />
        </Drawer>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 10,
        marginLeft: 10,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 5,
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.8,
    },
    menuButton: {
        marginLeft: 15,
        padding: 5,
    },
});