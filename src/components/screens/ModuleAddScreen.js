import { useState } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Screen from '../layout/Screen';
import ModuleForm from '../entity/modules/ModuleForm';

const ModuleAddScreen = ({ navigation, route }) => {
  
 // Initialization
 const  {onAdd} = route.params;


  // state

  // handlers
const handleCancel = () => navigation.goBack();


   // view
  return (
    <Screen>
      <ModuleForm onCancel ={handleCancel}  onSubmit ={onAdd}/>
    </Screen>
  );
};

const styles = StyleSheet.create({
 
  });

export default ModuleAddScreen;
