import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Screen from '../layout/Screen';
import initialModules from '../../data/modules.js';
import RenderCount from '../entity/ui/rendercount.js';
import ModuleList from '../entity/modules/ModuleList.js';

const ModuleListScreen = ({ navigation }) => { 
  // Initialization
  // state
  const [modules, setModules] = useState(initialModules);

  // handlers
  const handleSelect = (module) => navigation.navigate('ModuleViewScreen', { module });
  const handleDelete = (module) => 
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  // view
  return (    
    <Screen>
      <RenderCount/>
      <ModuleList modules={modules} OnSelect={handleSelect} /> 
    </Screen>
  );
};


export default ModuleListScreen;