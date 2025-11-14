import { useState } from 'react';
import icons from '../../UI/icons.js';
import { Button, ButtonTray } from '../../UI/Button.js';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Screen from '../layout/Screen';
 const defaultModule = {
    ModuleID: null,// 106778,
    ModuleName:null,// 'Games Programming',
    ModuleCode: null,//'CI2270',
    ModuleLevel:null,// 4,
    ModuleLeaderID: null,//1,
    ModuleLeaderName: null,// 'Graeme Jones',
    ModuleImage:null,
    //'https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg',
  };
const ModuleAddScreen = ({ navigation, route }) => {
  
 // Initialization
 const  {onAdd} = route.params;
defaultModule.ModuleID = Math.floor(100000 + Math.random() * 9000000),
defaultModule.ModuleImage = 'https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg';

  // state
  const [module,setModule] = useState(defaultModule);
  // handlers
  const handleAdd = () => onAdd(module);
  const handleCancel =() => navigation.goBack;
  const HandleChange = (field,value) => setModule({...module, [field]:value});
   // view
  return (
    <Screen>
      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module Code</Text>
        <TextInput value = {module.ModuleCode}  onChangeText={(value) => HandleChange ('ModuleCode',value)}style = {styles.itemTextInput}/>
      </View>
       
       <View style={styles.item}>
        <Text style={styles.itemLabel}>Module name</Text>
        <TextInput value = {module.ModuleName}  onChangeText={(value) => HandleChange ('ModuleName',value)}style = {styles.itemTextInput}/>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module leader</Text>
        <TextInput value = {module.ModuleLeaderName}  onChangeText={(value) => HandleChange ('ModuleLeaderName',value)}style = {styles.itemTextInput}/>
      </View>



      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module level</Text>
        <TextInput value = {module.ModuleLevel}  onChangeText={(value) => HandleChange ('ModuleLevel',value)}style = {styles.itemTextInput}/>
      </View>


      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module image url</Text>
        <TextInput value = {module.ModuleImage}  onChangeText={(value) => HandleChange ('ModuleImage',value)}style = {styles.itemTextInput}/>
      </View>



      
      <Text>Add</Text>
      <ButtonTray>
            <Button label="Add" icon={<icons.Add/>} onClick={handleAdd} />
            <Button label="Cancel"  onClick={handleCancel} />
             </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({
  itemLabel:{
color:'grey',
fontSize: 16,
marginBottom: 5,
  },
  itemTextInput:{
height: 50,
paddingLeft:10,
fontsize:16,
backgroundColor:'white',
borderRadius:7,
borderWidth:1,
borderColor:'lightgrey',
  },
  });

export default ModuleAddScreen;
