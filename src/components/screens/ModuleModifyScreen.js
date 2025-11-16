import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../layout/Screen';
import ModuleForm from '../entity/modules/ModuleForm.js'
const ModuleModifyScreen = ({navigation,route}) => {
 // Initialization
 const{module,onModify} =  route.params;
  // state
  // handlers
  const handleCancel = () => navigation.goBack();
   // view

  return (
    <Screen>
      <ModuleForm orginialModule ={module} onCancel = {handleCancel} onSubmit = {onModify} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  });

export default ModuleModifyScreen;
