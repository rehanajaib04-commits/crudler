import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native"; 

const RenderCount = ({ backgroundColor = 'dodgerblue', fontColor = 'white' }) => { 

  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <View>
      <Text style={[styles.count, { backgroundColor, color: fontColor }]}>
        Number of renders: {renderCount.current}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  count: {
    padding: 5, 
  },
});

export default RenderCount;
