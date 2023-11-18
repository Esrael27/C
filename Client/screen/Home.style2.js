import { StyleSheet } from "react-native";

const styless = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      fontSize: 24,
      marginBottom: 20,
      color: '#7c1ba6',
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    iconContainer: {
      width: '40%',
      padding: 20,
      alignItems: 'center',
      margin: 15,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      shadowColor: '#cccccc',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    iconImage: {
      width: 40, // Adjust the width and height based on your image size
      height: 40,
    },
    labelText: {
      marginTop: 12,
      fontSize: 17,
      color: '#7c1ba6',
      fontWeight: 'bold',
    },
  });

export default styless