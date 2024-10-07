import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import UserList from './components/UserList'; // Import UserList component

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar style="auto" />

      {/* App Header */}
      <Text className="text-2xl text-black mb-4">User Management App</Text>

      {/* Render UserList component */}
      <UserList />
    </View>
  );
}
