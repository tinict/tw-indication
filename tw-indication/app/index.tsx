import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Test indication app</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('/home')}
            >
                <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
        padding: 10,
        backgroundColor: '#03A9F4',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
});