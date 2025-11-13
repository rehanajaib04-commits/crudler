import { StyleSheet,  } from 'react-native';
import Screen from '../layout/Screen';
import ModuleView from '../entity/modules/ModuleView';


const ModuleViewScreen = ({navigate, route}) => {
  // Initialization
  const {module}= route.params;
  // state
  // handlers
   // view
  return (
    <Screen>
      <ModuleView module = {module}/>
    </Screen>
  );
};

const styles = StyleSheet.create();

export default ModuleViewScreen;