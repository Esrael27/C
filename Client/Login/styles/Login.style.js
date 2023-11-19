// styles/Login.style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafb',
    justifyContent: 'space-between',
  },
  languageContainer: {
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: '#701bb7',
    fontWeight: 'bold',
    margin: 10,
  },
  loginContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 35,
  },
  welcome: {
    fontSize: 27,
    color: '#701bb7',
    fontWeight: 'bold',
  },
  commercial: {
    fontSize: 15,
    color: '#7525ac',
    marginTop: 7,
  },
  good: {
    fontSize: 15,
    color: '#7525ac',
    marginTop: 16,
  },
  input: {
    borderColor: '#7525ac',
    borderWidth: 2,
    width: '90%',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    marginTop: 33,
  },
  iconContainer: {
    marginTop: 27,
    padding: 25,
    backgroundColor: '#bb8d4f',
    borderRadius: 100,
    alignItems: 'center',
  },
  footer: {
    backgroundColor: '#fafafa',
    alignItems: 'center',
    paddingVertical: 100,
  },
  fot: {
    flexDirection: 'row',
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderRadius: 60,
    backgroundColor: '#bb8e4a',
  },
  
  non: {
    fontSize: 16,
    marginLeft: 10,
  },
  fo: {
    color: '#7525ac',
  },
});

export default styles;
