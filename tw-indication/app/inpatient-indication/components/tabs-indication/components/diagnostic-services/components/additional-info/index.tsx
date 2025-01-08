import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import PartialOverlaysModal from "@/components/modals/PartialOverlaysModal";
import { useState } from "react";
import Icon from '@/components/Icon';

export default function AdditionalInfo({
    item
}: {
    item: any
}) {
    const [isPartialOverlaysModal, setIsPartialOverlaysModal] = useState(false);

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    setIsPartialOverlaysModal(true);
                }}
            >
                <View style={styles.modalTrigger}>
                    <Text style={styles.modalTriggerText}>
                        Thông tin về giá, tồn kho, bảo hiểm, ...
                    </Text>
                    <Icon
                        name="keyboard-arrow-right"
                        size={20}
                        library='MaterialIcons'
                    />
                </View>
            </TouchableOpacity>

            <PartialOverlaysModal
                visible={isPartialOverlaysModal}
                onClose={() => setIsPartialOverlaysModal(false)}
                content={
                    <View>

                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    modalTrigger: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f0f2f4',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#e0e3e6',
        paddingHorizontal: 8,
        shadowColor: '#000',
        shadowRadius: 2,
        marginBottom: 5,
        marginTop: 5
    },
    modalTriggerText: {
        color: '#333',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 0.5,
        flex: 1,
        marginRight: 8
    }
});
