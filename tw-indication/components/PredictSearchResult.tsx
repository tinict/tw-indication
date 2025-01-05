import {
    View,
    TouchableOpacity,
    Text,
    FlatList,
    StyleSheet,
} from "react-native";

export default function PredictSearchResult({
    data,
    onSelect,
}: {
    data: any[];
    onSelect: (item: any) => void;
}) {
    return (
        <View style={styles.searchResultContainer}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            onSelect(item);
                        }}
                        style={styles.resultItem}
                    >
                        <Text style={styles.patientName}>{item.hoTen}</Text>
                        <Text style={styles.patientDetails}>{`${item.gioiTinh} | ${item.ngaySinh}`}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchResultContainer: {
        position: 'absolute',
        marginHorizontal: 12,
        top: 75,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        maxHeight: 200,
        zIndex: 1000,
    },
    resultItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    patientName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    patientDetails: {
        fontSize: 14,
        color: '#555',
    },
});

