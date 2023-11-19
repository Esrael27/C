// BankingScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PayForScreen  = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Banking Screen</Text>
      {/* Add your content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default PayForScreen ;