import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import icons from '../../../UI/icons.js';
import Form from '../../../UI/Form.js';

const defaultModule = {
  ModuleID: null, // 106778,
  ModuleName: null, // 'Games Programming',
  ModuleCode: null, // 'CI2270',
  ModuleLevel: null, // 4,
  ModuleLeaderID: null, // 1,
  ModuleLeaderName: null, // 'Graeme Jones',
  ModuleImage: null, 
};

const ModuleForm = ({  orginialModule, onCancel, onSubmit }) => { 
  // Initializations ---------------------
  defaultModule.ModuleID = Math.floor(100000 + Math.random() * 9000000);
  defaultModule.ModuleImage = 'https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg';

  const levels = [
    {value: 3, label : '3 (foundaiton)' },
    {value: 4, label : '4 (first year)' },
    {value: 5, label : '5 (second year)' },
    {value: 6, label : '6 (third year)' },
    {value: 7, label : '7 (masters)' },






  ]

  // State -------------------------------
  const [module, setModule] = useState(orginialModule || defaultModule);

  // Handlers ----------------------------
  const handleChange = (field, value) => setModule({ ...module, [field]: value });
  const handleSubmit = () => onSubmit(module); 

  // View --------------------------------
  const submitLabel = orginialModule ? "Modify" : "Add";
  const submitIcon = orginialModule ? <icons.Edit/>:<icons.Add />;

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
      <Form.InputText
        label="ModuleCode"
        value={module.ModuleCode}
        onChangeText={(value) => handleChange('ModuleCode', value)}
        style={styles.itemTextInput}
      />
      <Form.InputText
        label="ModuleName"
        value={module.ModuleName}
        onChangeText={(value) => handleChange('ModuleName', value)}
        style={styles.itemTextInput}
      />
      <Form.InputText
        label="ModuleLeaderName"
        value={module.ModuleLeaderName}
        onChangeText={(value) => handleChange('ModuleLeaderName', value)}
        style={styles.itemTextInput}
      />
      <Form.InputSelect
        label="ModuleLevel"
        prompt= "Select module level..."
        options={levels}
        value={module.ModuleLevel}
        onChangeText={(value) => handleChange('ModuleLevel', value)}
        style={styles.itemTextInput}
      />
      <Form.InputText
        label="ModuleImage"
        value={module.ModuleImage}
        onChangeText={(value) => handleChange('ModuleImage', value)}
        style={styles.itemTextInput}
      />
    </Form>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    color: 'grey',
    fontSize: 16,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
});

export default ModuleForm;
