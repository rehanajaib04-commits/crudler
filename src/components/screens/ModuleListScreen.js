import { useState } from 'react';
import { LogBox, StyleSheet, ScrollView } from 'react-native';
import Screen from '../layout/Screen';
import initialModules from '../../data/modules.js';
import RenderCount from '../entity/ui/rendercount.js';
import ModuleList from '../entity/modules/ModuleList.js';
import icons from '../../UI/icons.js';
import { Button, ButtonTray } from '../../UI/Button.js';

const ModuleListScreen = ({ navigation }) => { 
  // Initialization
  LogBox.ignoreLogs(['nonserialized values were found in the navigation state'])
  // state
  const [modules, setModules] = useState(initialModules);

  // handlers

  const handleDelete = (module) => 
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
const onDelete = (module) => {
handleDelete(module);
navigation.goBack();

}
const handleAdd = (module) => setModules ([...modules,module]);
const handleModify = (updateModule) => setModules (
  modules.map((module) => (module.ModuleID == updateModule.ModuleID) ? updateModule : module)
);
const onAdd = (module) => {
handleAdd(module);
navigation.goBack();
}
const onModify = (module) => {
handleModify(module);
navigation.navigate("ModuleListScreen");
}
const gotoViewScreen = (module) => navigation.navigate('ModuleViewScreen', { module, onDelete,onModify });
const gotoAddScreen = () => navigation.navigate('ModuleAddScreen',{onAdd});
  // view
  return (    
    <Screen>
      <RenderCount/>
      <ButtonTray>
      <Button label="Add" icon={<icons.Add/>} onClick={gotoAddScreen} />
       </ButtonTray>
             <ModuleList modules={modules} OnSelect={gotoViewScreen} /> 
    </Screen>
  );
};


export default ModuleListScreen;