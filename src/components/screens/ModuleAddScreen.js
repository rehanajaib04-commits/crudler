import icons from '../../UI/icons.js';
import { Button, ButtonTray } from '../../UI/Button.js';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../layout/Screen';
 const defaultMode = {
    ModuleID: 106778,
    ModuleName: 'Games Programming',
    ModuleCode: 'CI2270',
    ModuleLevel: 4,
    ModuleLeaderID: 1,
    ModuleLeaderName: 'Graeme Jones',
    ModuleImage:
      'https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg',
  };
const ModuleAddScreen = ({ navigation, route }) => {
  
 // Initialization
 const  {onAdd} = route.params;
  // state
  // handlers
  const handleAdd = () => onAdd(defaultMode);
  const handleCancel =() => navigation.goBack;
   // view
  return (
    <Screen>
      <Text>Add</Text>
      <ButtonTray>
            <Button label="Add" icon={<icons.Add/>} onClick={handleAdd} />
            <Button label="Cancel"  onClick={handleCancel} />
             </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({
  });

export default ModuleAddScreen;
