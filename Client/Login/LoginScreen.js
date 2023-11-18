import React, { useState, memo } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the appropriate icon
import { loginUser, handleLoginError } from './api/api';
import styles from './styles/Login.style';

const LoginScreen = () => {
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const navigation = useNavigation();
  const [language, setLanguage] = useState('english');

  const changeLanguage = () => {
    setLanguage(language === 'english' ? 'amharic' : 'english');
  };

  const getTranslatedText = (englishText, amharicText) => {
    return language === 'amharic' ? amharicText : englishText;
  };

  const handleLogin = async () => {
    try {
      const authToken = await loginUser(password);
      setToken(authToken);
      await AsyncStorage.setItem('token', authToken);
      console.log('Login successfully');
      navigation.navigate('Home');
    } catch (error) {
      handleLoginError(error);
    }
  };

  return (
    <>
      <View style={styles.a}>
        <TouchableOpacity>
          <Text style={styles.text}>{getTranslatedText('reset', 'የኋለ ነገር')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeLanguage}>
          <Text style={styles.text}>{getTranslatedText('አማ', 'En')}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
      <Image source={require('../asset/cbe.jpg')} style={styles.logo} />
        <Text style={styles.welcome}>{getTranslatedText('Welcome!', 'እንኳን ደህና መጡ')}</Text>
        <Text style={styles.commercial}>{getTranslatedText('Commercial Bank of Ethiopia', 'የኢትዮጵያ ንግድ ባንክ')}</Text>
        <Text style={styles.good}>Good morning</Text>
        
        <TextInput
  style={styles.input}
  placeholder={getTranslatedText('PIN', 'PIN')}
  secureTextEntry={true}
  value={password}
  onChangeText={(text) => setPassword(text)}
  keyboardType="numeric" // Setting the keyboardType to 'numeric'
/>

        <TouchableOpacity style={styles.iconContainer} onPress={handleLogin}>
          <Icon name="chevron-right" size={14} color="#fff2ef" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.fot}>
          <Text style={styles.non}>
            <Icon name="shield" /> Non-Financial Services
          </Text>
        </TouchableOpacity>
        <Text style={styles.fo}>Copyright © Commercial Bank Of Ethiopia</Text>
      </View>
    </>
  );
};

export default memo(LoginScreen);
