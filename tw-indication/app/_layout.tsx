import { Stack } from 'expo-router/stack';
import '../../tw-indication/styles/global.css';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="inpatient-indication"
        options={{
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              style={{
                marginRight: 10,
                paddingVertical: 5,
                paddingHorizontal: 12,
                backgroundColor: "red",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => alert('Chỉ định đã được tạo thành công!')}
            >
              <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}>
                Lưu
              </Text>
            </TouchableOpacity>

          ),
        }}
      />
    </Stack>
  );
};
