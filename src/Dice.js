import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Text as SvgText } from "react-native-svg";

const Dice = ({ value }) => {
  return (
    <View style={styles.container}>
      <Svg height="100" width="100" viewBox="0 0 100 100">
        {value === 1 && (
          <SvgText x="50%" y="50%" fontSize="20" textAnchor="middle" dy=".3em">
            &#11044;
          </SvgText>
        )}
        {value === 2 && (
          <>
            <SvgText
              x="33%"
              y="33%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
            <SvgText
              x="66%"
              y="66%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
          </>
        )}
        {value === 3 && (
          <>
            <SvgText
              x="33%"
              y="33%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
            <SvgText
              x="50%"
              y="50%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
            <SvgText
              x="66%"
              y="66%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
          </>
        )}
        {value === 4 && (
          <>
            <SvgText
              x="33%"
              y="33%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
            <SvgText
              x="66%"
              y="33%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
            <SvgText
              x="33%"
              y="66%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
            <SvgText
              x="66%"
              y="66%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
          </>
        )}
        {value === 5 && (
          <>
            <SvgText
              x="33%"
              y="33%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
            <SvgText
              x="66%"
              y="33%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
            <SvgText
              x="50%"
              y="50%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
            <SvgText
              x="33%"
              y="66%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
            <SvgText
              x="66%"
              y="66%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
          </>
        )}
        {value === 6 && (
          <>
            <SvgText
              x="33%"
              y="25%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
            <SvgText
              x="66%"
              y="25%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
            <SvgText
              x="33%"
              y="50%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
            <SvgText
              x="66%"
              y="50%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
            <SvgText
              x="33%"
              y="75%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
            <SvgText
              x="66%"
              y="75%"
              fontSize="20"
              textAnchor="middle"
              dy=".3em"
            >
              &#11044;
            </SvgText>
          </>
        )}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Dice;
