import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// itialisation
// state 
// handlers
// view
export const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hellow World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;