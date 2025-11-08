import { StatusBar } from 'expo-status-bar';
import {StyleSheet, ScrollView, } from 'react-native';
import Screen from '../layout/Screen';
import initialModules from '../../data/modules.js';
import ModuleList from '../entity/modules/ModuleList.js';

const ModuleListScreen = () => {
  // Initialisation
  const modules = initialModules; 
//state
 //handlers
    const handleSelect = (module) => alert(`Item ${module.ModuleCode} selected`); 
 //view 


  return (    
    <Screen>
  <ModuleList modules={modules} OnSelect = {handleSelect}/>
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
