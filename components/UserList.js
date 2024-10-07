import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend API
    axios.get('http://192.168.168.8:3000/users')

      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {users.length > 0 ? (
        <FlatList
          data={users}
          keyExtractor={item => item.id.toString()} // Use id as key
          renderItem={({ item }) => (
            <View style={styles.userItem}>
              <Text className="text-lg text-black">ID: {item.id}</Text>
              <Text className="text-lg text-black">Email: {item.email}</Text>
              <Text className="text-lg text-black">Username: {item.username}</Text>
              {/* Password should be displayed cautiously, consider security */}
              <Text className="text-lg text-black">Password: {item.password}</Text>
            </View>
          )}
        />
      ) : (
        <Text className="text-lg text-gray-500">No users found</Text>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  userItem: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    marginVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default UserList;
