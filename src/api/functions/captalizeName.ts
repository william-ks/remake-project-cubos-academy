const capitalizeNames = (sentence: string): string => {
  const words = sentence.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.length === 0) {
      return word;
    }
    return (
      word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
    );
  });

  return capitalizedWords.join(" ");
};

export { capitalizeNames };
