import { useRef, useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import CombinationGenerator from "./src/CombinationGenerator";
import { useKeepAwake } from "expo-keep-awake";
import { FontAwesome5 } from "@expo/vector-icons";
import Dice from "./src/Dice";
import ThirdDice from "./src/SpecialDice";
import useCountdown from "./src/useCoutdown";

const TURN_TIMEOUT = 3000;

export default function App() {
  const [currentCombination, setCurrentCombination] = useState();
  const combinator = useRef(CombinationGenerator());
  const [isTurnAllowed, setIsTurnAllowed] = useState(true);
  const { time, restart } = useCountdown();

  useKeepAwake();

  const onTurn = () => {
    setCurrentCombination(combinator.current.turn());
    setIsTurnAllowed(false);
    restart();
    setTimeout(() => {
      setIsTurnAllowed(true);
    }, TURN_TIMEOUT);
  };

  const reset = () => {
    setCurrentCombination(combinator.current.init());
    setIsTurnAllowed(true);
  };

  const onReset = () => {
    Alert.alert(
      "Reset kociek",
      "Ste si istý?",
      [
        {
          text: "Nie",
          style: "cancel",
        },
        {
          text: "Áno",
          onPress: () => reset(),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View>
          <View style={styles.diceBox}>
            {currentCombination ? (
              <>
                <View style={[styles.dice, { backgroundColor: "white" }]}>
                  <Dice value={currentCombination.white} />
                </View>
                <View style={[styles.dice, { backgroundColor: "red" }]}>
                  <Dice value={currentCombination.red} />
                </View>
                <View style={[styles.dice, { backgroundColor: "gray" }]}>
                  <ThirdDice value={currentCombination?.third} />
                </View>
              </>
            ) : (
              <View style={styles.diceBox}>
                <Text style={styles.buttonText}>{"Žiadny hod"}</Text>
              </View>
            )}
          </View>
          <Text style={styles.coutdownText}>
            {currentCombination ? time : "00:00"}
          </Text>
        </View>
        {isTurnAllowed ? (
          <TouchableHighlight onPress={onTurn} style={styles.turnButton}>
            <FontAwesome5 name="dice-d6" size={64} color="white" />
          </TouchableHighlight>
        ) : (
          <View style={styles.turnButton}></View>
        )}
        <TouchableHighlight onPress={onReset} style={styles.resetButton}>
          <Text style={styles.buttonText}>{"Reset"}</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "black",
    justifyContent: "space-between",
    rowGap: 40,
  },
  diceBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 120,
  },
  dice: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  diceText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  turnButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  resetButton: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  coutdownText: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
});
