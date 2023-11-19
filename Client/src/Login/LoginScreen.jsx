import React, { useState, memo } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { loginUser, handleLoginError } from './api/api';
import styles from './styles/Login.style';

const LoginScreen = () => {
  // State variables
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const navigation = useNavigation();
  const [language, setLanguage] = useState('english');

  // Function to change language
  const changeLanguage = () => {
    setLanguage(language === 'english' ? 'amharic' : 'english');
  };

  // Function to get translated text based on selected language
  const getTranslatedText = (englishText, amharicText) => {
    return language === 'amharic' ? amharicText : englishText;
  };

  // Function to handle login
  const handleLogin = async () => {
    try {
      const authToken = await loginUser(password);
      setToken(authToken);
      await AsyncStorage.setItem('token', authToken);
      console.log('Login successfully');

      // Navigate to the home screen after successful login
      navigation.navigate('HomeScreen');
    } catch (e) {
      handleLoginError();
    }
  };

  return (
    <View style={styles.container}>
      {/* Language selection */}
      <View style={styles.languageContainer}>
        <TouchableOpacity>
          <Text style={styles.text}>{getTranslatedText('reset', 'የኋለ ነገር')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeLanguage}>
          <Text style={styles.text}>{getTranslatedText('አማ', 'En')}</Text>
        </TouchableOpacity>
      </View>

      {/* Login container */}
      <View style={styles.loginContainer}>
        <Image source={require('../asset/cbe.jpg')} style={styles.logo} />
        <Text style={styles.welcome}>{getTranslatedText('Welcome!', 'እንኳን ደህና መጡ')}</Text>
        <Text style={styles.commercial}>{getTranslatedText('Commercial Bank of Ethiopia', 'የኢትዮጵያ ንግድ ባንክ')}</Text>
        <Text style={styles.good}>Good morning</Text>

        {/* PIN input */}
        <TextInput
          style={styles.input}
          placeholder={getTranslatedText('PIN', 'PIN')}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          keyboardType="numeric"
        />

        {/* Login button */}
        <TouchableOpacity style={styles.iconContainer} onPress={handleLogin}>
          <Icon name="chevron-right" size={14} color="#fff2ef" />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        {/* Non-Financial Services */}
        <TouchableOpacity style={styles.fot}>
          <Icon name="shield" size={27} />
          <Text style={styles.non}>Non-Financial Services</Text>
        </TouchableOpacity>
        
        {/* Copyright */}
        <Text style={styles.fo}>Copyright © Commercial Bank Of Ethiopia</Text>
      </View>
    </View>
  );
};

export default memo(LoginScreen);
