import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import { Button, ButtonTray } from '../../../UI/Button';
import icons from '../../../UI/icons';

 // Initialization
  // state
  // handlers
   // view
const ModuleView = ({ module, onDelete }) => {

  const handleDelete = () => onDelete(module);

  const requestDelete = () => Alert.alert(
    'Delete Warning',
    `Are you sure you want to delete ${module.ModuleCode}${module.ModuleName}`,
    [
      { text: 'Cancel' },
      { text: 'Delete', onPress: handleDelete }
    ]
  );

  return (
    <View style={styles.container}>
      <FullWidthImage source={{ uri: module.ModuleImage }} style={styles.image} />

      <View style={styles.infoTray}>
        <Text style={styles.boldText}>
          {module.ModuleCode}{module.ModuleName}
        </Text>
        <Text style={styles.text}> Level {module.ModuleLevel}</Text>
        <Text style={styles.text}> {module.ModuleLeaderName} <Text style={styles.dimText}>(Module Leader)</Text></Text>
      </View>

      <ButtonTray>
        <Button icon={<icons.Edit />} label='Modify' />
        <Button
          icon={<icons.Delete />}
          label='Delete'
          onClick={requestDelete}
          styleButton={{ backgroundColor: 'mistyrose' }}
          styleLabel={{ color: 'red' }}
        />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  image: { borderRadius: 3, },
  text: { fontSize: 16, gap: 5 },
  boldText: { fontSize: 16, fontWeight: 'bold' },
  dimText: { color: 'grey' },
});

export default ModuleView;
