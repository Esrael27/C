import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from './Services.Style';
import Balance from '../Balance/Balance';

const Services = () => {
  const handleServicePress = (service) => {
    // Handle the press event for the service
    console.log(`Pressed ${service.label}`);
  };

  const services = [
    { label: 'Top UP', image: require('../../../asset/top.jpg'), color: '#7f16a7' },
    { label: 'Transfer', image: require('../../../asset/arrow.jpg'), color: '#7f16a7' },
    { label: 'Utility', image: require('../../../asset/util.jpg'), color: '#7f16a7' },
    { label: 'Government Services', image: require('../../../asset/gover.jpg'), color: '#7f16a7' },
    { label: 'Banking', image: require('../../../asset/banking.jpg'), color: '#7f16a7' },
    { label: 'Travel', image: require('../../../asset/travel.jpg'), color: '#7f16a7' },
    { label: 'Pay for', image: require('../../../asset/payfor.jpg'), color: '#7f16a7' },
    { label: 'Entertainment', image: require('../../../asset/enter.jpg'), color: '#7f16a7' },
    { label: 'Utilities', image: require('../../../asset/utilties.jpg'), color: '#7f16a7' },
    // Add paths for other images
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
              <Image source={service.image} style={styles.iconImage} />
              <Text style={styles.labelText}>{service.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Services;
