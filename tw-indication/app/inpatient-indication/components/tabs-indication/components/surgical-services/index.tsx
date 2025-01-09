import { useState } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";
import SurgicalServicesList from './components/surgical-services-list';
import PartialOverlaysModal from "@/components/modals/PartialOverlaysModal";
import Icon from "@/components/Icon";
import TWCheckBox from "@/components/TWCheckBox";

const MOCK_SURGICAL_SERVICES = [
    {
        "maPT": "007795",
        "tenPT": "X-Quang",
        "stt": 1
    }
];

export default function SurgicalServices() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filtered, setFiltered] = useState(MOCK_SURGICAL_SERVICES);
    const [modalVisible, setModalVisible] = useState(false);
    const [isPartialOverlaysModal, setIsPartialOverlaysModal] = useState(false);

    const onSearch = () => {
        const filtered = MOCK_SURGICAL_SERVICES.filter((surgical) =>
            surgical.tenPT.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFiltered(filtered);
        setModalVisible(true);
    };

    return (
        <View
            style={{ flex: 1, padding: 12 }}
        >
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 12,
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        setIsPartialOverlaysModal(true);
                    }}
                    style={{
                        marginRight: 10,
                        padding: 5,
                        borderRadius: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Icon
                        name="options"
                        library="Ionicons"
                        size={28}
                        style={{
                            marginRight: 10,
                            color: "#555",
                        }}
                    />
                </TouchableOpacity>

                <Searchbar
                    placeholder="Nhập tên dịch vụ phẫu thuật"
                    onChangeText={(query) => setSearchQuery(query)}
                    value={searchQuery}
                    style={{
                        flex: 1,
                        borderRadius: 12,
                        elevation: 2,
                        backgroundColor: "#f7f7f7",
                        paddingHorizontal: 5,
                    }}
                    onSubmitEditing={onSearch}
                    returnKeyType="search"
                />

                <TouchableOpacity
                    style={{
                        marginLeft: 10,
                        padding: 5,
                        borderRadius: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => { }}
                >
                    <Icon
                        name="copy"
                        library="FontAwesome6"
                        size={28}
                        style={{
                            color: "#555",
                        }}
                    />
                </TouchableOpacity>
            </View>

            <PartialOverlaysModal
                visible={isPartialOverlaysModal}
                onClose={() => setIsPartialOverlaysModal(false)}
                content={
                    <View>
                        <TWCheckBox />
                    </View>
                }
            />

            <SurgicalServicesList
                modalVisible={modalVisible}
                setModalVisible={(isVisible: any) => {
                    setModalVisible(isVisible);
                }}
                listSurgicalServices={filtered}
                surgicalServices={[
                    {
                        "maPT": "007795",
                        "tenPT": "Phẫu thuật cận, tiếp cận",
                        "stt": 1
                    }
                ]}
            />
        </View>
    );
};
