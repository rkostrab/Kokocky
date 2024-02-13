import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const ThirdDice = ({ value }) => {
  switch (value) {
    case 1:
      return <FontAwesome5 name="place-of-worship" size={34} color="gold" />;
    case 2:
      return <FontAwesome5 name="place-of-worship" size={34} color="blue" />;
    case 3:
      return <FontAwesome5 name="place-of-worship" size={34} color="lime" />;
    default:
      return <FontAwesome5 name="ship" size={34} color="black" />;
  }
};

export default ThirdDice;
