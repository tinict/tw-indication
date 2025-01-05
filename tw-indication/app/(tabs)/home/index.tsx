import { SafeAreaView } from "react-native-safe-area-context";
import { View, Platform, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import { Grids } from "@/components/Grids";
import { useNavigation } from "expo-router";
import PredictSearchResult from "@/components/PredictSearchResult";
import MemoInfo from "@/components/MemoInfo";

const mockData = [
    {
        key: "1",
        hoTen: "Nguyễn Văn A",
        gioiTinh: "Nam",
        ngaySinh: "1990-01-01",
    },
    {
        key: "2",
        hoTen: "Trần Thị B",
        gioiTinh: "Nữ",
        ngaySinh: "1985-05-12",
    },
    {
        key: "3",
        hoTen: "Lê Văn C",
        gioiTinh: "Nam",
        ngaySinh: "2000-08-25",
    },
    {
        key: "4",
        hoTen: "Phạm Thị D",
        gioiTinh: "Nữ",
        ngaySinh: "1995-03-15",
    },
];

export default function Home() {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedResult, setSelectedResult] = useState("");

    const filteredData = mockData.filter((item) =>
        item.hoTen.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const gridItems = [
        {
            id: "1",
            label: "Bệnh án",
            icon: "book-medical",
            iconType: "FontAwesome5",
            onPress: () => console.log("Bệnh án"),
        },
        {
            id: "2",
            label: "Chỉ định nội trú",
            iconType: "FontAwesome6",
            icon: "user-doctor",
            onPress: () => navigation.navigate("inpatient-indication" as never),
        },
        {
            id: "3",
            label: "Chẩn đoán hình ảnh",
            icon: "x-ray",
            iconType: "FontAwesome5",
            onPress: () => console.log("Chẩn đoán hình ảnh"),
        },
        {
            id: "4",
            label: "Xét nghiệm",
            icon: "test-tube",
            iconType: "Fontisto",
            onPress: () => console.log("Xét nghiệm"),
        },
        {
            id: "5",
            label: "Thuốc",
            icon: "medicinebox",
            iconType: "AntDesign",
            onPress: () => console.log("Thuốc"),
        },
        {
            id: "6",
            label: "PT.Thủ Thuật",
            icon: "surgical-knife",
            iconType: "Fontisto",
            onPress: () => console.log("PT.Thủ Thuật"),
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <Searchbar
                    placeholder="Mã bệnh nhân / Số vào viện"
                    onChangeText={(query) => setSearchQuery(query)}
                    value={searchQuery}
                />
                {searchQuery.length > 0 && (
                    <PredictSearchResult
                        data={filteredData}
                        onSelect={(item) => {
                            setSelectedResult(item.hoTen);
                            setSearchQuery("");
                            console.log("Selected item:", item);
                        }}
                    />
                )}
            </View>


            <View style={styles.gridContainer}>
                <MemoInfo
                    title="Thông tin bệnh nhân"
                    items={[
                        { label: "Số vào viện", value: "001" },
                        { label: "Tên bệnh nhân", value: "Nguyễn Văn A" },
                        { label: "Ngày sinh", value: "01/01/1990" },
                        { label: "Địa chỉ", value: "Hà Nội, Xuân Phú, Tp Hà Nội" },
                        { label: "Số điện thoại", value: "099383883" },
                        { label: "Giới tính", value: "Nam" },
                        { label: "Chẩn đoán", value: "Tuyến giáp" },
                    ]}
                />

                <Grids
                    numColumns={4}
                    spacing={4}
                    itemHeight={120}
                    iconSize={26}
                    iconColor="#03A9F4"
                    itemStyle={{ backgroundColor: "#fff" }}
                    labelStyle={{
                        fontSize: 12,
                        fontWeight: "500",
                        width: "80%",
                    }}
                    items={gridItems}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    searchContainer: {
        position: "absolute",
        top: Platform.select({ ios: 0, android: 10 }),
        left: 0,
        right: 0,
        padding: 12,
        zIndex: 1,
    },
    gridContainer: {
        flex: 1,
        marginTop: Platform.select({ ios: 0, android: 60 }),
        paddingTop: Platform.select({ ios: 30, android: 40 }),
    },
});
