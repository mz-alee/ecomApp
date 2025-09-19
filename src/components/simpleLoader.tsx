import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";

interface LoaderProp {
  color?: string;
  size?: number;
}

const Loader: React.FC<LoaderProp> = ({ color = "#D17842", size = 40 }) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000, 
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.center}>
      <Animated.View
        style={[
          styles.loader,
          {
            borderColor: color,
            width: size,
            height: size,
            borderRadius: size / 2,
            transform: [{ rotate: spin }],
          },
        ]}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    borderWidth: 3,
    borderTopColor: "transparent", 
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
});
