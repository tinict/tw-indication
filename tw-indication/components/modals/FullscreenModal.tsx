import React from 'react';
import {
    Modal,
    Text,
    Pressable,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Platform,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

interface ItemSelectorProps {
    data: any[];
    customComponent: (item: any) => React.ReactNode;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    onSelected: (item: any) => void;
}

const ItemSelector: React.FC<ItemSelectorProps> = ({
    data,
    customComponent,
    setIsModalVisible,
    onSelected,
}) => {
    return (
        <View>
            {data.map((item, index) => (
                <View key={index} style={styles.serviceItem}>
                    <TouchableOpacity
                        onPress={() => {
                            setIsModalVisible(false);
                            onSelected(item);
                        }}
                    >
                        {customComponent(item)}
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

interface FullscreenModalProps {
    data: any[];
    isModalVisible: boolean;
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    customComponent: (item: any) => React.ReactNode;
    onSelected: (item: any) => void;
}

const FullscreenModal: React.FC<FullscreenModalProps> = ({
    data,
    isModalVisible,
    setIsModalVisible,
    customComponent,
    onSelected,
}) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView
                style={[
                    styles.safeAreaView,
                    {
                        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                    },
                ]}
            >
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="transparent"
                    translucent
                />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => setIsModalVisible(false)}
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.modalView}>
                            <ScrollView contentContainerStyle={styles.listContainer}>
                                <ItemSelector
                                    data={data}
                                    onSelected={onSelected}
                                    customComponent={customComponent}
                                    setIsModalVisible={setIsModalVisible}
                                />
                            </ScrollView>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setIsModalVisible(false)}
                            >
                                <Text style={styles.textStyle}>Thoát</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: 10,
        paddingTop: Platform.OS === 'android' ? 0 : 50,
        paddingBottom: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    listContainer: {
        padding: 10,
        width: '90%',
    },
    serviceItem: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    button: {
        padding: 10,
    },
    buttonClose: {
        backgroundColor: '#f1f1f1',
        marginTop: 10,
        width: '100%',
        borderRadius: 8,
        alignItems: 'center',
    },
    textStyle: {
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default FullscreenModal;
