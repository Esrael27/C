import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      textAlign: 'center',
      alignItems: 'center',  
    },
    containe: {
       flexDirection: 'row', 
       justifyContent: 'space-between', 
      },
    backgroundImage: {
        margin: 10,
      },
      image: {
        marginTop: 16,
        marginLeft: -45,
        width: 55, // Set the width based on your requirements
        height: 50, // Set the height based on your requirements
      },
    title: {
      marginTop: 12,
      fontSize: 19,
      color: '#ffdb91',
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 15,
      marginTop: 4,
      color: '#ffda96',
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 21,
    },
    balanceText: {
      fontSize: 19,
      color: '#e9f1f4',
      marginRight: 10,
    },
    balance: {
        fontSize: 29,
        color: '#fff',
        marginRight: 10,
      },
    account: {
      marginTop: 7,
      fontSize: 19,
      color: '#ffda96',
     
    },
    date: {
     marginTop: 1,
     marginBottom: 30,
      fontSize: 14,
      color: '#FFFFFF',
    },
  });