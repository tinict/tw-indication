import TabsView from '@/components/TabsViews';
import {
    View,
    Text
} from 'react-native';
import Instructions from './components/instructions';
import Medicines from './components/medicines';
import DiagnosticServices from './components/diagnostic-services';
import SurgicalServices from './components/surgical-services';

const tabs = [
    {
        label: 'DB.Y Lệnh',
        content: (
            <View style={{ flex: 1 }}>
                <Instructions />
            </View>
        ),
    },
    {
        label: 'Thuốc',
        content: (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Medicines />
            </View>
        ),
    },
    {
        label: 'DVKT',
        content: (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <DiagnosticServices />
            </View>
        ),
    },
    {
        label: 'Phẫu thuật',
        content: (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <SurgicalServices />
            </View>
        ),
    },
];

export default function TabsIndication() {
    return (
        <View style={{ flex: 1 }}>
            <TabsView tabs={tabs} />
        </View>
    );
};
