import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Icon name="bars" size={20} color="#7f16a7" />
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.contentContainer}>
      <Text style={styles.text}>አማ</Text>
        <Icon  name="rotate-right" size={25} color="#7f16a7" marginRight={12} />
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <>
      <Header />
      <View style={styles.contentContainer}>
        <Text>Home Page</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fafafa',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    color: '#701bb7',
    fontWeight: 'bold',
    marginRight: 28,
  },
});

export default HomeScreen;

