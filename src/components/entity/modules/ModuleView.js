import {Pressable, StyleSheet,Text, View } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import { Button, ButtonTray } from '../../../UI/Button';
import icons from '../../../UI/icons';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
  // Initialization
  // state
  // handlers
   // view
const  ModuleView = ({  module,OnSelect})=>{
return(
<View style = {styles.container}>
      <FullWidthImage source={{uri: module.ModuleImage}} style={styles.image}/>
       <View style={styles.infoTray}>
      <Text style={styles.boldText}>
        {module.ModuleCode}{module.ModuleName}
      </Text>
      <Text style={styles.text}> Level {module.ModuleLevel}</Text>
      <Text style={styles.text}> {module.ModuleLeaderName} <Text style ={styles.dimText}>(Module Leader)</Text>
      </Text>
    
   </View>
     <ButtonTray>
      <Button icon ={<icons.Edit/>}label='Modify'/>
      <Button icon ={<icons.Delete/>} label='Delete' styleButton={{backgroundColor:'mistyrose'}}
  styleLabel={{ color:'red'}}
/>
      </ButtonTray>
   </View>

        
       )}




const styles = StyleSheet.create({
  image:{borderRadius: 3,},
  text: {
    fontSize: 16,
    gap: 5,
  },
  boldText: {
    fontSize:16,
    fontWeight:'bold',
  },
  dimText: {
    color:'grey',
  },
}); 

export default ModuleView;