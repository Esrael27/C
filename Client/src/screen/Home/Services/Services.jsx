// Services.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Balance from '../Balance/Balance';
import { styles } from './Services.Style';
const Services = () => {
  const navigation = useNavigation();

  const handleServicePress = (service) => {
    console.log(`Pressed ${service.label}`);

    switch (service.label) {
      case 'Top UP':
        navigation.navigate('TopUpScreen');
        break;
      case 'Transfer':
        navigation.navigate('TransferScreen');
        break;
      case 'Utility':
        navigation.navigate('UtilityScreen');
        break;
      case 'Government Services':
        navigation.navigate('GovernmentServicesScreen');
        break;
      case 'Banking':
        navigation.navigate('BankingScreen');
        break;
      case 'Travel':
        navigation.navigate('TravelScreen');
        break;
      case 'Pay for':
        navigation.navigate('PayForScreen');
        break;
      case 'Entertainment':
        navigation.navigate('EntertainmentScreen');
        break;
      case 'Utilities':
        navigation.navigate('UtilitiesScreen');
        break;
      // Add cases for other services
      default:
        break;
    }
  };

  const services = [
    { label: 'Top UP', icon: 'arrow-up', color: '#7f16a7' },
    { label: 'Transfer', icon: 'exchange', color: '#7f16a7' },
    { label: 'Utility', icon: 'wrench', color: '#7f16a7' },
    { label: 'Government Services', icon: 'university', color: '#7f16a7' },
    { label: 'Banking', icon: 'bank', color: '#7f16a7' },
    { label: 'Travel', icon: 'plane', color: '#7f16a7' },
    { label: 'Pay for', icon: 'credit-card', color: '#7f16a7' },
    { label: 'Entertainment', icon: 'film', color: '#7f16a7' },
    { label: 'Utilities', icon: 'lightbulb', color: '#7f16a7' },
    // Add other services with icons
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Balance />
      <View style={styles.container}>
        <Text style={styles.header}>Services</Text>
        <View style={styles.grid}>
          {services.map((service, index) => (
            <TouchableOpacity
              key={index}
              style={styles.iconContainer}
              onPress={() => handleServicePress(service)}
            >
              <FontAwesome name={service.icon} size={30} color={service.color} />
              <Text style={styles.labelText}>{service.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
 
export default Services;

