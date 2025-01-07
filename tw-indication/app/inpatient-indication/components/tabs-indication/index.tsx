import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import TabsView from '@/components/TabsViews';
import Instructions from './components/instructions';
import Medicines from './components/medicines';
import DiagnosticServices from './components/diagnostic-services';
import SurgicalServices from './components/surgical-services';

const MemoizedInstructions = React.memo(Instructions);
const MemoizedMedicines = React.memo(Medicines);
const MemoizedDiagnosticServices = React.memo(DiagnosticServices);
const MemoizedSurgicalServices = React.memo(SurgicalServices);

const InstructionsTab = React.memo(() => (
    <View style={styles.tabContent}>
        <MemoizedInstructions />
    </View>
));

const MedicinesTab = React.memo(() => (
    <View style={styles.tabContentWhite}>
        <MemoizedMedicines />
    </View>
));

const DiagnosticServicesTab = React.memo(() => (
    <View style={styles.tabContentWhite}>
        <MemoizedDiagnosticServices />
    </View>
));

const SurgicalServicesTab = React.memo(() => (
    <View style={styles.tabContentWhite}>
        <MemoizedSurgicalServices />
    </View>
));

const TabsIndication = React.memo(() => {
    const tabs = useMemo(() => [
        {
            label: 'DB.Y Lệnh',
            content: <InstructionsTab />,
        },
        {
            label: 'Thuốc',
            content: <MedicinesTab />,
        },
        {
            label: 'DVKT',
            content: <DiagnosticServicesTab />,
        },
        {
            label: 'Phẫu thuật',
            content: <SurgicalServicesTab />,
        },
    ], []);

    return (
        <View style={styles.container}>
            <TabsView
                tabs={tabs}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabContent: {
        flex: 1,
    },
    tabContentWhite: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

TabsIndication.displayName = 'TabsIndication';

export default TabsIndication;
