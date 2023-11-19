import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './Balance.style';
import { useState } from 'react';

const Balance = () => {
  const [displayText, setDisplayText] = useState(false);

  const toggleBalanceVisibility = () => {
    setDisplayText(!displayText);
  };

  const getCurrentDate = () => {
    const date = new Date();
    const formattedDate = `${date.getDate()} ${date.toLocaleString('default', {
      month: 'short',
    })} ${date.getFullYear()} ${date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    })}`;
    return formattedDate;
  };

  return (
    <ImageBackground
      source={require('../../../asset/bg.png')}
      style={styles.backgroundImage}
      imageStyle={{ borderRadius: 21 }} // Set borderRadius here
    >
      <View style={styles.container}>
        <View style={styles.containe}>
          <Image source={require('../../../asset/Logo.jpg')} style={styles.image} />
          <View style={styles.both}>
            <Text style={styles.title}>Commercial Bank of Ethiopia</Text>
            <Text style={styles.subtitle}>The Bank You Can Always Rely On!</Text>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.balanceText}>Balance</Text>
          <TouchableOpacity onPress={toggleBalanceVisibility}>
            {displayText ? (
              <Icon name="eye-slash" size={26} color="#a29e9d" />
            ) : (
              <Icon name="eye" size={26} color="#a29e9d" />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.balance}>
          {displayText ? '323,434,43.43' :'* * * * * *'} Birr
        </Text>
        <Text style={styles.account}>
          {`Saving - ${displayText ? ' 10001967302085' : ' 1*********0285'}`}
        </Text>
        <Text style={styles.date}>{getCurrentDate()}</Text>
      </View>
    </ImageBackground>
  );
};

export default Balance;

