import Icon from "@/components/Icon";
import PartialOverlaysModal from "@/components/modals/PartialOverlaysModal";
import TWCheckBox from "@/components/TWCheckBox";
import { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function ItemSelector({
    item
}: {
    item: any
}) {
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
        { label: "STT", value: item?.stt }
    ];

    const [quantity, setQuantity] = useState(item.soLuong);
    const [dosage, setDosage] = useState(item.lieuDung);
    const [usageInstructions, setUsageInstructions] = useState(item.cachDung);

    const [isModalOptions, setIsModalOptions] = useState(false);

    return (
        <KeyboardAwareScrollView style={styles.selectedItem}>
            <View style={styles.itemRow}>
                <Text
                    style={styles.itemName}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    Thuốc chỉ định
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        padding: 10,
                        backgroundColor: "#f9f9f9",
                        borderRadius: 8,
                    }}
                >
                    <TouchableOpacity
                        onPress={(item: any) => setIsModalOptions(true)}
                    >
                        <Icon
                            name={"options-sharp"}
                            size={24}
                            library={"Ionicons"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={(item: any) => console.log(item.maThuoc)}
                    >
                        <Icon
                            name={"delete-forever"}
                            size={24}
                            library={"MaterialIcons"}
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

            {/* <MedicineDetails item={item} /> */}
            <View>
                {details.map((detail, index) => (
                    <Text key={index} style={styles.chemicalInfo}>
                        {detail.label}: {detail.value || "N/A"}
                    </Text>
                ))}
            </View>
            {/* <AdditionalInfo item={item} /> */}
            {/* <DateRangeSelector /> */}
            <View>
                <View style={styles.infoContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Nhập số lượng"
                            keyboardType="numeric"
                            value={quantity}
                            style={styles.textInput}
                            onChangeText={setQuantity}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Nhập liều dùng"
                            value={dosage}
                            style={styles.textInput}
                            onChangeText={setDosage}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Nhập cách dùng"
                            value={usageInstructions}
                            style={styles.textInput}
                            onChangeText={setUsageInstructions}
                        />
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    selectedItem: {
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowOffset: { width: 0, height: 2 },
        marginVertical: 5,
        marginHorizontal: 5,
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    itemName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        flex: 1,
        marginRight: 12,
    },
    actionsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    chemicalInfo: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    boldText: {
        fontWeight: "bold",
        color: "#53fd",
    },
    priceInfo: {
        marginVertical: 5,
        color: '#555',
    },
    stockInfo: {
        marginVertical: 5,
        color: '#555',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        padding: 8,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        alignSelf: 'center',
        marginRight: 5,
        marginLeft: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonRed: {
        backgroundColor: '#e74c3c'
    },
    chemicalInfoLink: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        marginVertical: 5,
    },
    chemicalInfoText: {
        fontSize: 14,
        color: '#333',
        fontWeight: '400',
        flex: 1,
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
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 5,
        paddingLeft: 10,
        backgroundColor: '#f5f5f5',
        fontSize: 14,
    },
});