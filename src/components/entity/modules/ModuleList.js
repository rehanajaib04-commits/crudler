  import {ScrollView,StyleSheet,} from 'react-native';
  import ModuleItem from './ModuleItem.js';
  const ModuleList = ({modules, OnSelect })=>{
  return(
  
 <ScrollView style={styles.container}>
        {modules.map(module => (
          
      <ModuleItem key={module.ModuleCode}  module={module} OnSelect={OnSelect}/>
        
        ))}
      </ScrollView>
          
         
          )}
  
  
  
  
  const styles = StyleSheet.create({}
  ); 
  
    export default ModuleList; 