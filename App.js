import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
// import { NativeWindStyleSheet } from "nativewind";


export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-blue-900">Open up App.js to start working on app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// NativeWindStyleSheet.setOutput({
//   default: "native",
// });
