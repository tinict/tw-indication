import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { Grids } from '@/components/Grids';
import { useNavigation } from 'expo-router';

export default function Home() {
    const navigation = useNavigation();

    const [searchQuery, setSearchQuery] = useState('');

    const gridItems = [
        {
            id: '1',
            label: 'Bệnh án',
            icon: 'book-medical',
            iconType: 'FontAwesome5',
            onPress: () => console.log('Bệnh án'),
        },
        {
            id: '2',
            label: 'Chỉ định nội trú',
            iconType: 'FontAwesome6',
            icon: 'user-doctor',
            onPress: () => navigation.navigate('inpatient-indication' as never),
        },
        {
            id: '3',
            label: 'Chẩn đoán hình ảnh',
            icon: 'x-ray',
            iconType: 'FontAwesome5',
            onPress: () => console.log('Lịch làm việc pressed'),
        },
        {
            id: '4',
            label: 'Xét nghiệm',
            icon: 'test-tube',
            iconType: 'Fontisto',
            onPress: () => console.log('Lịch làm việc pressed'),
        },
        {
            id: '5',
            label: 'Thuốc',
            icon: 'medicinebox',
            iconType: 'AntDesign',
            onPress: () => console.log('Lịch làm việc pressed'),
        },
        {
            id: '6',
            label: 'PT.Thủ Thuật',
            icon: 'surgical-knife',
            iconType: 'Fontisto',
            onPress: () => console.log('Lịch làm việc pressed'),
        },
    ];

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff',
        }}>
            <View style={{
                position: 'absolute',
                top: Platform.select({ ios: 0, android: 10 }),
                left: 0,
                right: 0,
                padding: 12,
                zIndex: 1,
            }}>
                <Searchbar
                    placeholder="Mã bệnh nhân / Số vào viện"
                    onChangeText={(query) => setSearchQuery(query)}
                    value={searchQuery}
                />
            </View>

            <View style={{
                flex: 1,
                marginTop: Platform.select({ ios: 0, android: 60 }),
                paddingTop: Platform.select({ ios: 30, android: 40 }),
            }}>
                <Grids
                    numColumns={4}
                    spacing={4}
                    itemHeight={100}
                    iconSize={26}
                    iconColor="#03A9F4"
                    itemStyle={{ backgroundColor: '#fff' }}
                    labelStyle={{
                        fontSize: 12,
                        fontWeight: '500',
                        width: '80%',
                    }}
                    items={gridItems}
                />
            </View>
        </SafeAreaView>
    );
};
