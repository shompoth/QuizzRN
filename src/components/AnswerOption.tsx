import { Text, View, StyleSheet } from "react-native";

const AnswerOption = () => {
  return (
    <View style={styles.container}>
      <Text>Option</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 20,
    borderColor: "lightgray",
    borderRadius: 100,
  },
});

export default AnswerOption;
