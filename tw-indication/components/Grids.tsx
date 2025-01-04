import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ViewStyle,
    TextStyle,
} from 'react-native';
import Icon from './Icon';

interface GridItem {
    id: string;
    label: string;
    icon: string;
    iconType?: string;
    onPress?: () => void;
}

interface GridProps {
    items: GridItem[];
    numColumns?: number;
    spacing?: number;
    itemHeight?: number;
    containerStyle?: ViewStyle;
    itemStyle?: ViewStyle;
    labelStyle?: TextStyle;
    iconSize?: number;
    iconColor?: string;
}

export const Grids: React.FC<GridProps> = ({
    items,
    numColumns = 3,
    spacing = 10,
    itemHeight = 100,
    containerStyle,
    itemStyle,
    labelStyle,
    iconSize = 24,
    iconColor = '#03A9F4',
}) => {
    const screenWidth = Dimensions.get('window').width;
    const padding = spacing * 2;
    const itemWidth = (screenWidth - padding - (spacing * (numColumns - 1))) / numColumns;

    const getRowItems = (items: GridItem[], rowIndex: number) => {
        return items.slice(rowIndex * numColumns, (rowIndex + 1) * numColumns);
    };

    const getRows = (items: GridItem[]) => {
        const numRows = Math.ceil(items.length / numColumns);
        return Array.from({ length: numRows }, (_, index) => getRowItems(items, index));
    };

    return (
        <View style={[styles.container, { padding: spacing }, containerStyle]}>
            {getRows(items).map((row, rowIndex) => (
                <View key={rowIndex} style={[styles.row, { marginBottom: spacing }]}>
                    {row.map((item, index) => (
                        <TouchableOpacity
                            key={item.id}
                            style={[
                                styles.item,
                                {
                                    width: itemWidth,
                                    height: itemHeight,
                                    marginRight: index < row.length - 1 ? spacing : 0,
                                },
                                itemStyle,
                            ]}
                            onPress={item.onPress}
                        >
                            <View style={styles.itemContent}>
                                <View style={styles.iconContainer}>
                                    <Icon
                                        name={item.icon}
                                        size={iconSize}
                                        color={iconColor}
                                        library={item.iconType}
                                    />
                                </View>
                                <View style={styles.labelContainer}>
                                    <Text
                                        style={[styles.label, labelStyle]}
                                        numberOfLines={2}
                                        ellipsizeMode="tail"
                                    >
                                        {item.label}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    item: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        overflow: 'hidden',
    },
    itemContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    iconContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        marginBottom: 8,
        backgroundColor: '#fff',
    },
    labelContainer: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 4,
    },
    label: {
        fontSize: 12,
        textAlign: 'center',
        color: '#333',
        lineHeight: 16,
    },
});
