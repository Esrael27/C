import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { styles } from './NavBar.Style';

// Array of available options in the NavBar
const options = [
  { name: 'Change PIN', icon: 'lock' },
  { name: 'Unsubscribe', icon: 'box' },
  { name: 'Logout', icon: 'power-off' },
  { name: 'About', icon: 'info-circle' },
  { name: 'Rate this app', icon: 'star' },
  { name: 'Reset', icon: 'refresh' },
];

const NavBar = () => {
  const navigation = useNavigation();

  // Handle option press based on the option name
  const handleOptionPress = (optionName) => {
    // Example: Navigate to the 'LoginScreen' if the 'Logout' option is pressed
    if (optionName === 'Logout') {
      navigation.navigate('LoginScreen');
    }
    // Add handling for other options if needed
  };

  return (
    <View style={styles.container}>
      {/* Map through the options and render each TouchableOpacity */}
      {options.map((option, index) => (
        <TouchableOpacity
          key={index} // Using index as the key since the options array is static
          style={styles.option} // Apply the common styling directly
          onPress={() => handleOptionPress(option.name)}
        >
          {/* Icon for the option */}
          <Icon name={option.icon} style={styles.icon} size={30} color="#898989" />
          
          {/* Text for the option */}
          <Text style={styles.text}>{option.name}</Text>
          
          {/* Chevron-right icon */}
          <Icon name="chevron-right" size={15} color="#8522a0" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavBar;
