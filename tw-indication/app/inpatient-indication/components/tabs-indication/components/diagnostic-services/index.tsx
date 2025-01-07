import { useState } from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import { Searchbar } from "react-native-paper";

export default function DiagnosticServices() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <View
            style={{
                flex: 1,
                padding: 12,
            }}
        >
            <Searchbar
                placeholder="Nhập tên dịch vụ kỹ thuật"
                onChangeText={(query) => setSearchQuery(query)}
                value={searchQuery}
                style={styles.searchbar}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchbar: {
        borderRadius: 12,
        paddingHorizontal: 10,
    },
});
