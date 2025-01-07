import wabunMaps from "../maps/wabunMaps.tsx";

const dakutenSet = new Set([
  "ガ",
  "ギ",
  "グ",
  "ゲ",
  "ゴ",
  "ザ",
  "ジ",
  "ズ",
  "ゼ",
  "ゾ",
  "ダ",
  "ヂ",
  "ヅ",
  "デ",
  "ド",
  "バ",
  "ビ",
  "ブ",
  "ベ",
  "ボ",
]);
const handakutenSet = new Set(["パ", "ピ", "プ", "ペ", "ポ"]);

function TranslateToMorseWabun(toMorse): string {
  const cleanToMorse = toMorse.replace(/\s+/g, " ").trim().toUpperCase();

  let finalToMorse = "";

  for (let i = 0; i < cleanToMorse.length; i++) {
    if (dakutenSet.has(cleanToMorse[i])) {
      const nonDakuMoji = String.fromCharCode(
        cleanToMorse[i].charCodeAt(0) - 1,
      );
      finalToMorse += `${nonDakuMoji}゛`;
    } else if (handakutenSet.has(cleanToMorse[i])) {
      const nonHandakuMoji = String.fromCharCode(
        cleanToMorse[i].charCodeAt(0) - 2,
      );
      finalToMorse += `${nonHandakuMoji}゛`;
    } else if (cleanToMorse[i] == "ヴ") {
      finalToMorse += "ウ゛";
    } else if (cleanToMorse[i] == "ヷ") {
      finalToMorse += "ワ゛";
    } else if (cleanToMorse[i] == "ヸ") {
      finalToMorse += "ヰ゛";
    } else if (cleanToMorse[i] == "ヹ") {
      finalToMorse += "ヱ゛";
    } else if (cleanToMorse[i] == "ヺ") {
      finalToMorse += "ヲ゛";
    } else {
      finalToMorse += cleanToMorse[i];
    }
  }

  if (!checkToMorseLetters(finalToMorse)) {
    return "Invalid Input";
  }

  let result = "";

  for (let i = 0; i < finalToMorse.length; i++) {
    if (finalToMorse[i] === " ") {
      result += "/ ";
    } else if (wabunMaps.moji.has(finalToMorse[i])) {
      result += wabunMaps.moji.get(finalToMorse[i]);
    } else if (wabunMaps.suuji.has(finalToMorse[i])) {
      result += wabunMaps.suuji.get(finalToMorse[i]);
    } else if (wabunMaps.kigou.has(finalToMorse[i])) {
      result += wabunMaps.kigou.get(finalToMorse[i]);
    }

    result += " ";
  }

  return result.trim();
}

function checkToMorseLetters(toMorse): bool {
  for (let i = 0; i < toMorse.length; i++) {
    if (
      toMorse[i] != " " &&
      !wabunMaps.moji.has(toMorse[i]) &&
      !wabunMaps.suuji.has(toMorse[i]) &&
      !wabunMaps.kigou.has(toMorse[i])
    ) {
      return false;
    }
  }

  return true;
}

function TranslateFromMorseWabun(fromMorse): string {
  const cleanFromMorse = fromMorse.replace(/\s+/g, " ").trim().toUpperCase();

  let result = "";

  let letter = "";

  for (let i = 0; i < cleanFromMorse.length; i++) {
    if (cleanFromMorse[i] === " ") {
      if (wabunMaps.mojiR.has(letter)) {
        result += wabunMaps.mojiR.get(letter);
      } else if (wabunMaps.suujiR.has(letter)) {
        result += wabunMaps.suujiR.get(letter);
      } else if (wabunMaps.kigouR.has(letter)) {
        result += wabunMaps.kigouR.get(letter);
      }

      letter = "";
    } else if (cleanFromMorse[i] === "·" || cleanFromMorse[i] === "−") {
      letter += cleanFromMorse[i];
    } else {
      return "Invalid Input";
    }
  }
  if (wabunMaps.mojiR.has(letter)) {
    result += wabunMaps.mojiR.get(letter);
  } else if (wabunMaps.suujiR.has(letter)) {
    result += wabunMaps.suujiR.get(letter);
  } else if (wabunMaps.kigouR.has(letter)) {
    result += wabunMaps.kigouR.get(letter);
  }

  let final = "";
  for (let i = 0; i < result.length; i++) {
    final += result[i];
    if (result[i] === "゛" && i > 0) {
      const dakuMoji = String.fromCharCode(result[i - 1].charCodeAt(0) + 1);
      if (dakutenSet.has(dakuMoji)) {
        final = final.slice(0, -2) + dakuMoji;
      } else if (i > 0 && result[i - 1] === "ウ") {
        final = final.slice(0, -2) + "ヴ";
      } else if (i > 0 && result[i - 1] === "ワ") {
        final = final.slice(0, -2) + "ヷ";
      } else if (i > 0 && result[i - 1] === "ヰ") {
        final = final.slice(0, -2) + "ヸ";
      } else if (i > 0 && result[i - 1] === "ヱ") {
        final = final.slice(0, -2) + "ヹ";
      } else if (i > 0 && result[i - 1] === "ヲ") {
        final = final.slice(0, -2) + "ヺ";
      }
    } else if (result[i] === "゜" && i > 0) {
      const handakuMoji = String.fromCharCode(result[i - 1].charCodeAt(0) + 2);
      if (handakutenSet.has(handakuMoji)) {
        final = final.slice(0, -2) + handakuMoji;
      }
    }
  }

  return final.trim();
}

export { TranslateToMorseWabun, TranslateFromMorseWabun };
