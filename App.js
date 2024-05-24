import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style ={styles.KingsApp} >My name is <Text style ={styles.KingsApp1}> Kingsley Martey Amenuvie</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  KingsApp: {
    fontSize: 24,
    
  },
  KingsApp1: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'red',
  },
});
