<TextInput
          style={style.input}
          placeholder={getTranslatedText('PIN', 'PIN')}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={style.iconContainer} onPress={handleLogin}>
          <Icon name="chevron-right" size={14} color="#fff2ef" />
        </TouchableOpacity>
import React, { useState, memo } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser, handleLoginError } from './api/api';
import { useNavigation } from '@react-navigation/native';
mport React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { BsChevronRight } from 'react-icons/bs';
import { GrSecure } from 'react-icons/gr';
import { loginUser, handleLoginError } from './components/Login/api/api';
import styles from './log.style';

// Component for handling the login screen
const Login = () => {
  // State to manage the selected language, default is English
  const [language, setLanguage] = useState('english');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const navigation = useNavigation(); // Initialize useNavigation hook

  const handleLogin = async () => {
    try {
      const authToken = await loginUser(password);
      setToken(authToken);
      await AsyncStorage.setItem('token', authToken);
      console.log('Login successfully');

      // Navigate to the home page
      navigation.navigate('Home');
    } catch (error) {
      handleLoginError(error);
    }
  };

  // Function to change the language to Amharic
  const changeLanguage = () => {
    setLanguage('amharic');
  };

  // Function to get the translated text based on the selected language
  const getTranslatedText = (englishText, amharicText) => {
    return language === 'amharic' ? amharicText : englishText;
  };

  return (
    <>
      {/* Language selection and reset password links */}
      <View style={styles.a}>
        <TouchableOpacity>
          <Text style={styles.text}>{getTranslatedText('reset', 'የኋለ ነገር')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeLanguage}>
          <Text style={styles.text}>{getTranslatedText('አማ', 'En')}</Text>
        </TouchableOpacity>
      </View>

      {/* Main login container */}
      <View style={styles.container}>
        <Image source={require('../../assets/cbe.jpg')} style={styles.logo} />
        <Text style={styles.welcome}>{getTranslatedText('Welcome!', 'እንኳን ደህና መጡ')}</Text>
        <Text style={styles.commercial}>{getTranslatedText('Commercial Bank of Ethiopia', 'የኢትዮጵያ ንግድ ባንክ')}</Text>
        <Text style={styles.good}>Good morning</Text>
    
        <TextInput
        placeholder="PIN"
        style={styles.input}
        secureTextEntry
        keyboardType="numeric"
        value={password}
        onChangeText={setPassword}
      />
        {/* Arrow icon for login submission */}
        <TouchableOpacity style={styles.iconContainer} onPress={handleLogin}>
          <BsChevronRight size={14} color="#fff2ef" />
        </TouchableOpacity>
      </View>

      {/* Footer section */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.fot}>
          <Text>
            <GrSecure /> Non-Financial Services
          </Text>
        </TouchableOpacity>
        <Text style={styles.fo}>Copyright © Commercial Bank Of Ethiopia</Text>
      </View>
    </>
  );
};

export default Login;