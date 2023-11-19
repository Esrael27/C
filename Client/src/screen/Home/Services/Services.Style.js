import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Add a background color to the container
  },
  header: {
    color: '#670a8e',
    fontSize: 24,
    marginBottom: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  iconContainer: {
    width: '45%',
    alignItems: 'center',
    marginVertical: 15, // Use marginVertical for better spacing
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  labelText: {
    fontSize: 17,
    color: '#7c1ba6',
    fontWeight: 'bold',
  },
});
