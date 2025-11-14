import { useState } from 'react';
import { LogBox, StyleSheet, ScrollView } from 'react-native';
import Screen from '../layout/Screen';
import initialModules from '../../data/modules.js';
import RenderCount from '../entity/ui/rendercount.js';
import ModuleList from '../entity/modules/ModuleList.js';

const ModuleListScreen = ({ navigation }) => { 
  // Initialization
  LogBox.ignoreLogs(['nonserialized values were found in the navigation state'])
  // state
  const [modules, setModules] = useState(initialModules);

  // handlers
const handleSelect = (module) => 
  navigation.navigate('ModuleViewScreen', { module, onDelete });
  const handleDelete = (module) => 
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
const onDelete = (module) => {
handleDelete(module);
navigation.goBack();

}
  // view
  return (    
    <Screen>
      <RenderCount/>
      <ModuleList modules={modules} OnSelect={handleSelect} /> 
    </Screen>
  );
};


export default ModuleListScreen;