import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <View className="flex-1         items-center       justify-center 		bg-white">
        <Text className="text-blue-900">Open up App.js to staaaart working on app</Text>

        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
