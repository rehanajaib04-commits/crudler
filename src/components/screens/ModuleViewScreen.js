import { StyleSheet,  } from 'react-native';
import Screen from '../layout/Screen';
import ModuleView from '../entity/modules/ModuleView';

const ModuleViewScreen = ({ navigation, route }) => {
    // Initialization
  const { module, onDelete } = route.params;
// state
  // handlers
   // view
  return (
    <Screen>
     <ModuleView module={module} onDelete={onDelete} />
    </Screen>
  );
};

export default ModuleViewScreen;