import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Screen from '../layout/Screen';
import initialModules from '../../data/modules.js';
//import RenderCount from '../entity/ui/rendercount.js';
import ModuleList from '../entity/modules/ModuleList.js';

const ModuleListScreen = () => {
  // Initialization
  // state
  const [modules, setModules] = useState(initialModules);

  // handlers
  const handleDelete = (module) => 
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  // view
  return (    
    <Screen>
      <ModuleList modules={modules} OnSelect={handleDelete} /> 
    </Screen>
  );
};


export default ModuleListScreen;