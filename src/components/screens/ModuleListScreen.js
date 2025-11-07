import { StatusBar } from 'expo-status-bar';
import {Pressable, StyleSheet, ScrollView, Text, View } from 'react-native';
import Screen from '../layout/Screen';
import initialModules from '../../data/modules.js';

const ModuleListScreen = () => {
  // Initialisation
  const modules = initialModules; 
//state
 //handlers
  const handleSelect = () => alert("Item selected");
 //view 


  return (
    <Screen>
      <ScrollView style={styles.container}>
        {modules.map(module => (
          < Pressable key={module.ModuleCode}  onPress={handleSelect}>
            <View style={styles.item}>
              <Text style={styles.text}>
                {module.ModuleCode} {module.ModuleName}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: { 
  },
  item: { 
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: 'lightgrey',
  },
  text: { 
    fontSize: 16,
  },
}); 

export default ModuleListScreen;
