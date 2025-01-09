import React, { useState, useCallback, memo } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

interface Tab {
    label: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
};

interface TabsViewProps {
    tabs: Tab[];
    showIcons?: boolean;
};

const TabButton = memo(({
    label,
    icon,
    showIcons,
    isActive,
    width: tabWidth,
    onPress
}: {
    label: string;
    icon?: React.ReactNode;
    showIcons?: boolean;
    isActive: boolean;
    width: number;
    onPress: () => void;
}) => (
    <TouchableOpacity
        style={[styles.tab, { width: tabWidth }]}
        onPress={onPress}
    >
        {showIcons && icon && (
            <View style={styles.iconContainer}>
                {icon}
            </View>
        )}
        <Text
            style={[
                styles.tabText,
                isActive ? styles.activeTabText : null,
                showIcons && icon ? styles.tabTextWithIcon : null,
            ]}
        >
            {label}
        </Text>
    </TouchableOpacity>
));

const TabContent = memo(({ content }: { content: React.ReactNode }) => (
    <View style={styles.contentContainer}>
        {content}
    </View>
));

const TabsView: React.FC<TabsViewProps> = memo(({ tabs, showIcons = false }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [translateX] = useState(new Animated.Value(0));

    const handleTabPress = useCallback((index: number): void => {
        Animated.spring(translateX, {
            toValue: index * (width / tabs.length),
            useNativeDriver: true,
        }).start();
        setActiveTab(index);
    }, [tabs.length, translateX]);

    const tabWidth = width / tabs.length;

    return (
        <View style={styles.container}>
            <View style={styles.tabBar}>
                <Animated.View
                    style={[
                        styles.indicator,
                        {
                            transform: [{ translateX }],
                            width: tabWidth,
                        },
                    ]}
                />

                {tabs.map((tab: Tab, index: number) => (
                    <TabButton
                        key={index}
                        label={tab.label}
                        icon={tab.icon}
                        showIcons={showIcons}
                        isActive={activeTab === index}
                        width={tabWidth}
                        onPress={() => handleTabPress(index)}
                    />
                ))}
            </View>

            <TabContent content={tabs[activeTab]?.content} />
        </View>
    );
});

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
        justifyContent: 'center',
    },
    iconContainer: {
        marginBottom: 4,
    },
    tabText: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    tabTextWithIcon: {
        fontSize: 12,
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
