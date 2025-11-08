import {Pressable, StyleSheet,Text, View } from 'react-native';
const ModuleItem = ({  module,OnSelect})=>{
return(


        
          < Pressable  onPress={()=>OnSelect (module) }>
            <View style={styles.item}>
              <Text style={styles.text}>
                {module.ModuleCode} {module.ModuleName}
              </Text>
            </View>
          </Pressable>
        )}




const styles = StyleSheet.create({
  container: { 
  },
  item: { 
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: 'lightgrey',
  },
  text: { 
    fontSize: 16,
  },
}); 

export default ModuleItem;