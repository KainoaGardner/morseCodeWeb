import standardMaps from "../maps/standardMaps.tsx";

function TranslateToMorse(toMorse): string {
  const cleanToMorse = toMorse.replace(/\s+/g, " ").trim().toUpperCase();
  if (!checkToMorseLetters(cleanToMorse)) {
    return "Invalid Input";
  }

  let result = "";

  for (let i = 0; i < cleanToMorse.length; i++) {
    if (cleanToMorse[i] === " ") {
      result += "/ ";
    } else if (standardMaps.letters.has(cleanToMorse[i])) {
      result += standardMaps.letters.get(cleanToMorse[i]);
    } else if (standardMaps.numbers.has(cleanToMorse[i])) {
      result += standardMaps.numbers.get(cleanToMorse[i]);
    } else if (standardMaps.symbols.has(cleanToMorse[i])) {
      result += standardMaps.symbols.get(cleanToMorse[i]);
    } else if (standardMaps.prosigns.has(cleanToMorse[i])) {
      result += standardMaps.prosigns.get(cleanToMorse[i]);
    }

    result += " ";
  }

  return result.trim();
}

function checkToMorseLetters(toMorse): bool {
  for (let i = 0; i < toMorse.length; i++) {
    if (
      toMorse[i] != " " &&
      !standardMaps.letters.has(toMorse[i]) &&
      !standardMaps.numbers.has(toMorse[i]) &&
      !standardMaps.symbols.has(toMorse[i]) &&
      !standardMaps.prosigns.has(toMorse[i])
    ) {
      return false;
    }
  }

  return true;
}

function TranslateFromMorse(fromMorse): string {
  const cleanFromMorse = fromMorse.replace(/\s+/g, " ").trim().toUpperCase();

  let result = "";

  let letter = "";

  for (let i = 0; i < cleanFromMorse.length; i++) {
    if (cleanFromMorse[i] === " " || cleanFromMorse[i] === "/") {
      if (standardMaps.lettersR.has(letter)) {
        result += standardMaps.lettersR.get(letter);
      } else if (standardMaps.numbersR.has(letter)) {
        result += standardMaps.numbersR.get(letter);
      } else if (standardMaps.symbolsR.has(letter)) {
        result += standardMaps.symbolsR.get(letter);
      } else if (standardMaps.prosignsR.has(letter)) {
        result += standardMaps.prosignsR.get(letter);
      } else if (cleanFromMorse[i] === "/") {
        result += " ";
      }

      letter = "";
    } else if (cleanFromMorse[i] === "·" || cleanFromMorse[i] === "−") {
      letter += cleanFromMorse[i];
    } else {
      return "Invalid Input";
    }
  }
  if (standardMaps.lettersR.has(letter)) {
    result += standardMaps.lettersR.get(letter);
  } else if (standardMaps.numbersR.has(letter)) {
    result += standardMaps.numbersR.get(letter);
  } else if (standardMaps.symbolsR.has(letter)) {
    result += standardMaps.symbolsR.get(letter);
  } else if (standardMaps.prosignsR.has(letter)) {
    result += standardMaps.prosignsR.get(letter);
  }

  return result.trim();
}

function checkFromMorseLetters(fromMorse): bool {
  for (let i = 0; i < fromMorse.length; i++) {
    if (
      fromMorse[i] != "/" &&
      fromMorse[i] != " " &&
      !standardMaps.lettersR.has(fromMorse[i]) &&
      !standardMaps.numbersR.has(fromMorse[i]) &&
      !standardMaps.symbolsR.has(fromMorse[i]) &&
      !standardMaps.prosignsR.has(fromMorse[i])
    ) {
      return false;
    }
  }

  return true;
}

export { TranslateToMorse, TranslateFromMorse };
