import { MaterialIcons } from '@expo/vector-icons';

const icons = {};

const Edit = () => (<MaterialIcons name="edit" size={16} />);
const Delete = () => (<MaterialIcons name="delete" size={16} />);
const Add = () => (<MaterialIcons name="add" size={16} />);

// compose
icons.Add = Add;
icons.Delete = Delete;
icons.Edit = Edit;

export default icons;
