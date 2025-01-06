import LoaderLogo from "@/components/LoaderLogo";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

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
            {/* Loader Inside Logo */}
            {/* <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <LoaderLogo
                    logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qCreqkTZL0F0bF9kZctFE1XVFocO__70kw&s"
                    loaderColor="red"
                    size={150}
                    thickness={6}
                />
            </SafeAreaView> */}
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