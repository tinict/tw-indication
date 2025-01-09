import Icon from "@/components/Icon";
import PartialOverlaysModal from "@/components/modals/PartialOverlaysModal";
import TWCheckBox from "@/components/TWCheckBox";
import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    InputAccessoryView
} from "react-native";
import AdditionalInfo from "../../additional-info";

export default function ItemSelector({ item }: { item: any }) {
    const details = [
        { label: "Tên thuốc", value: item?.tenThuoc },
        { label: "Hoạt chất", value: item?.hoatChat },
        { label: "Đơn vị tính", value: item?.dvt },
        { label: "Số lượng", value: item?.soLuong },
        { label: "Đường dùng", value: item?.duongDung },
        { label: "Cách dùng", value: item?.cachDung },
        { label: "Liều dùng", value: item?.lieuDung },
        { label: "Giá thực tế", value: item?.donGiaTT },
        { label: "Tồn kho", value: item?.tonKho },
        { label: "Tồn kho dự tính", value: item?.tonKhoDuTinh },
        { label: "STT", value: item?.stt },
    ];

    const [quantity, setQuantity] = useState(item.soLuong || "");
    const [dosage, setDosage] = useState(item.lieuDung || "");
    const [usageInstructions, setUsageInstructions] = useState(item.cachDung || "");

    const [isModalOptions, setIsModalOptions] = useState(false);

    return (
        <View style={styles.selectedItem}>
            <View style={styles.itemRow}>
                <Text
                    style={styles.itemName}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    Thuốc chỉ định
                </Text>

                <View style={styles.actionsContainer}>
                    <TouchableOpacity
                        onPress={() => setIsModalOptions(true)}
                        style={styles.iconButton}
                    >
                        <Icon
                            name="options-sharp"
                            size={24}
                            library="Ionicons"
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => console.log(item.maThuoc)}
                        style={styles.iconButton}
                    >
                        <Icon
                            name="delete-forever"
                            size={24}
                            library="MaterialIcons"
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <PartialOverlaysModal
                visible={isModalOptions}
                onClose={() => setIsModalOptions(false)}
                content={
                    <View>
                        <TWCheckBox />
                    </View>
                }
            />

            <View>
                {details.map((detail, index) => (
                    <Text key={index} style={styles.chemicalInfo}>
                        {detail.label}: {detail.value || "N/A"}
                    </Text>
                ))}
            </View>

            <AdditionalInfo item={item} />

            <View style={styles.infoContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Nhập số lượng"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        value={quantity}
                        style={styles.textInput}
                        onChangeText={setQuantity}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Nhập liều dùng"
                        placeholderTextColor="#999"
                        value={dosage}
                        style={styles.textInput}
                        onChangeText={setDosage}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Nhập cách dùng"
                        inputAccessoryViewID={"1"}
                        placeholderTextColor="#999"
                        value={usageInstructions}
                        style={styles.textInput}
                        onChangeText={setUsageInstructions}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    selectedItem: {
        padding: 12,
        backgroundColor: "#fff",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ddd",
        shadowOffset: { width: 0, height: 2 },
        marginVertical: 5,
        marginHorizontal: 5,
    },
    itemRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    itemName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        flex: 1,
        marginRight: 12,
    },
    actionsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconButton: {
        backgroundColor: "#f9f9f9",
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 5,
    },
    icon: {
        color: "#555",
    },
    chemicalInfo: {
        fontSize: 14,
        color: "#666",
        marginBottom: 4,
    },
    infoContainer: {
        marginTop: 10,
    },
    inputContainer: {
        marginBottom: 10,
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#f5f5f5",
        fontSize: 14,
    },
});
