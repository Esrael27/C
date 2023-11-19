// NavBar.js
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Header.Style';

const NavBar = () => {
  const navigation = useNavigation();

  // Handle menu button press
  const handleMenuPress = () => {
    // Navigate to the "NavBar" page
    navigation.navigate('NavBar');
  };

  return (
    // Navigation bar container
    <View style={styles.navBar}>
      {/* Menu button */}
      <TouchableOpacity onPress={handleMenuPress}>
        <MaterialIcons name="menu" size={24} color="purple" />
      </TouchableOpacity>

      {/* Navigation buttons container */}
      <View style={styles.nav}>
        {/* Language selection button */}
        <TouchableOpacity>
          <Text style={styles.text}>አማ</Text>
        </TouchableOpacity>

        {/* Arrow-right button */}
        <TouchableOpacity>
          <MaterialIcons name="arrow-right" size={24} color="purple" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBar;


