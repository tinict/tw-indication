import React, { useRef, useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Animated,
    StyleSheet,
} from "react-native";
import Icon from "./Icon";

interface MemoItem {
    label: string;
    value: string;
};

interface MemoInfoProps {
    title?: string;
    items: MemoItem[];
    expandedHeight?: number;
    backgroundColor?: string;
    borderColor?: string;
    onExpand?: () => void;
    onCollapse?: () => void;
};

export default function MemoInfo({
    title = "Thông tin bệnh nhân",
    items = [],
    expandedHeight = 200,
    backgroundColor = "#fff",
    borderColor = "#ccc",
    onExpand = () => { },
    onCollapse = () => { },
}: MemoInfoProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const animationHeight = useRef(new Animated.Value(0)).current;

    const toggleExpansion = () => {
        const toValue = isExpanded ? 0 : expandedHeight;
        Animated.timing(animationHeight, {
            toValue,
            duration: 300,
            useNativeDriver: false,
        }).start();

        if (isExpanded) {
            onCollapse();
        } else {
            onExpand();
        }

        setIsExpanded(!isExpanded);
    };

    return (
        <View
            style={[
                styles.container,
                isExpanded && styles.containerExpanded,
                { borderColor },
            ]}
        >
            <TouchableOpacity
                style={[
                    styles.touchable,
                    isExpanded && styles.touchableExpanded,
                    { backgroundColor },
                ]}
                onPress={toggleExpansion}
                accessibilityLabel={isExpanded ? "Collapse details" : "Expand details"}
                accessibilityRole="button"
            >
                <View style={styles.header}>
                    <Icon name="info" size={16} />
                    <Text style={styles.patientInfo}>
                        <Text style={styles.boldText}>{title}</Text>
                    </Text>
                </View>
                <Icon
                    name={isExpanded ? "chevron-up" : "chevron-down"}
                    size={16}
                />
            </TouchableOpacity>
            <Animated.View style={[styles.card]}>
                {isExpanded && (
                    <View>
                        {items.map((item, index) => (
                            <Text key={index} style={styles.label}>
                                {item.label}: <Text style={styles.value}>{item.value}</Text>
                            </Text>
                        ))}
                    </View>
                )}
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 12,
        marginRight: 12,
        marginTop: 12,
        borderColor: "#ccc",
    },
    containerExpanded: {
        borderWidth: 1,
        borderRadius: 12,
    },
    touchable: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        justifyContent: "space-between",
        borderRadius: 12,
    },
    touchableExpanded: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderWidth: 0,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
    },
    patientInfo: {
        fontSize: 16,
        marginLeft: 8,
        color: "#000",
    },
    boldText: {
        fontWeight: "bold",
        color: "#000",
    },
    card: {
        padding: 12,
        paddingBottom: 12,
        backgroundColor: "#fff",
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 6,
        color: "#333",
    },
    value: {
        fontWeight: "normal",
        color: "#555",
    },
});
