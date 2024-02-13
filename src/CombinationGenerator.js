const CombinationGenerator = () => {
  let combinations = [];
  let currentIndex = 0;

  const init = () => {
    generateCombinations();
    shuffleCombinations();
    currentIndex = 0;
  };

  const generateCombinations = () => {
    combinations = [];
    for (let white = 1; white <= 6; white++) {
      for (let red = 1; red <= 6; red++) {
        combinations.push({ white, red });
      }
    }
  };

  const shuffleCombinations = () => {
    for (let i = combinations.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combinations[i], combinations[j]] = [combinations[j], combinations[i]];
    }
  };

  const turn = () => {
    const currentCombination = combinations[currentIndex];
    currentIndex++;

    if (currentIndex === combinations.length) {
      generateCombinations();
      shuffleCombinations();
      currentIndex = 0;
    }

    const third = Math.floor(Math.random() * 6) + 1;
    return { ...currentCombination, third };
  };

  init();

  return {
    turn,
    init,
  };
};

export default CombinationGenerator;
