import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    alert('This is the "Home" screen.');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.text}>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
