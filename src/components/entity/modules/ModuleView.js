import {Pressable, StyleSheet,Text, View } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
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