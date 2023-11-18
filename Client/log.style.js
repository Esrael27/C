import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  a: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Adding alignItems for centering items vertically
  },
  text: {
    fontSize: 16,
    color: '#701bb7',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 64,
  },
  welcome: {
    fontSize: 21,
    marginBottom: 14,
    color: '#701bb7',
    fontWeight: 'bold',
  },
  commercial: {
    fontSize: 15,
    marginBottom: 10,
    color: '#7525ac',
  },
  good: {
    fontSize: 15,
    marginBottom: 40,
    color: '#7525ac',
  },
  input: {
    height: 40,
    borderColor: '#7525ac',
    borderWidth: 2,
    width: '90%',
    marginBottom: 20,
    padding: 10,
    textAlign: 'center',
    borderRadius: 8, // Adding border radius for a rounded appearance
  },
  iconContainer: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#bb8d4f',
    borderRadius: 50,
    alignItems: 'center', // Centering content inside the iconContainer
  },
  footer: {
    backgroundColor: '#fafafa',
    alignItems: 'center',
    paddingVertical: 20, // Adding padding for better spacing
  },
  fot: {
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#bb8e4a',
  },
  fo: {
    color: '#7525ac',
  },
});

export default styles;