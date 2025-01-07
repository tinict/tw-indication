import { useState } from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import { Searchbar } from "react-native-paper";
import SurgicalServicesList from './components/surgical-services-list';

const MOCK_SURGICAL_SERVICES = [
    {
        "maPT": "007795",
        "tenPT": "X-Quang",
        "stt": 1
    }
];

export default function SurgicalServices() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <View
            style={{
                flex: 1,
                padding: 12,
            }}
        >
            <Searchbar
                placeholder="Nhập tên dịch vụ phẫu thuật"
                onChangeText={(query) => setSearchQuery(query)}
                value={searchQuery}
                style={styles.searchbar}
            />

            <SurgicalServicesList
                modalVisible={false}
                setModalVisible={() => { }}
                listSurgicalServices={MOCK_SURGICAL_SERVICES}
                surgicalServices={[
                    {
                        "maPT": "007795",
                        "tenPT": "X-Quang",
                        "stt": 1
                    }
                ]}
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
