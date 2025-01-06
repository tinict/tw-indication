import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface Tab {
    label: string;
    content: React.ReactNode;
};

interface TabsViewProps {
    tabs: Tab[];
};

const TabsView: React.FC<TabsViewProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [translateX] = useState(new Animated.Value(0));

    const handleTabPress = (index: number): void => {
        Animated.spring(translateX, {
            toValue: index * (width / tabs.length),
            useNativeDriver: true,
        }).start();
        setActiveTab(index);
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabBar}>
                <Animated.View
                    style={[
                        styles.indicator,
                        {
                            transform: [{ translateX }],
                            width: width / tabs.length,
                        },
                    ]}
                />

                {tabs.map((tab: Tab, index: number) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.tab, { width: width / tabs.length }]}
                        onPress={() => handleTabPress(index)}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                activeTab === index && styles.activeTabText,
                            ]}
                        >
                            {tab.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.contentContainer}>
                {tabs[activeTab]?.content}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
        position: 'relative',
        backgroundColor: '#f8f9fa',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    indicator: {
        position: 'absolute',
        height: 3,
        bottom: 0,
        backgroundColor: '#2196F3',
    },
    tab: {
        paddingVertical: 15,
        alignItems: 'center',
    },
    tabText: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    activeTabText: {
        color: '#2196F3',
        fontWeight: '600',
    },
    contentContainer: {
        flex: 1,
    },
});

export default TabsView;
