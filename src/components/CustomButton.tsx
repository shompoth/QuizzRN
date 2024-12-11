import {
  Pressable,
  StyleSheet,
  Text,
  View,
  PressableProps,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

type CustomButton = {
  title: string;
  rightIcon?: React.ReactNode;
} & PressableProps;

const CustomButton = ({
  title,
  rightIcon,
  ...pressableProps
}: CustomButton) => {
  return (
    <Pressable {...pressableProps} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
      <View style={styles.rightIcon}>{rightIcon}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  rightIcon: {
    marginLeft: "auto",
    position: "absolute",
    right: 20,
  },
});

export default CustomButton;
