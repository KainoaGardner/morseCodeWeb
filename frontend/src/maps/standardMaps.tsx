interface StandardMorse {
  letters: Map<string, string>;
  symbols: Map<string, string>;
  numbers: Map<string, string>;
  prosigns: Map<string, string>;

  lettersR: Map<string, string>;
  symbolsR: Map<string, string>;
  numbersR: Map<string, string>;
  prosignsR: Map<string, string>;
}

function getStandardMorse(): StandardMorse {
  const standardMaps = {
    letters: new Map<string, string>(),
    symbols: new Map<string, string>(),
    numbers: new Map<string, string>(),
    prosigns: new Map<string, string>(),

    lettersR: new Map<string, string>(),
    symbolsR: new Map<string, string>(),
    numbersR: new Map<string, string>(),
    prosignsR: new Map<string, string>(),
  };

  standardMaps.letters.set("A", "·−");
  standardMaps.letters.set("B", "−···");
  standardMaps.letters.set("C", "−·−·");
  standardMaps.letters.set("D", "−··");
  standardMaps.letters.set("E", "·");
  standardMaps.letters.set("F", "··−·");
  standardMaps.letters.set("G", "−−·");
  standardMaps.letters.set("H", "····");
  standardMaps.letters.set("I", "··");
  standardMaps.letters.set("J", "·−−−");
  standardMaps.letters.set("K", "−·−");
  standardMaps.letters.set("L", "·−··");
  standardMaps.letters.set("M", "−−");
  standardMaps.letters.set("N", "−·");
  standardMaps.letters.set("O", "−−−");
  standardMaps.letters.set("P", "·−−·");
  standardMaps.letters.set("Q", "−−·−");
  standardMaps.letters.set("R", "·−·");
  standardMaps.letters.set("S", "···");
  standardMaps.letters.set("T", "−");
  standardMaps.letters.set("U", "··−");
  standardMaps.letters.set("V", "···−");
  standardMaps.letters.set("W", "·−−");
  standardMaps.letters.set("X", "−··−");
  standardMaps.letters.set("Y", "−·−−");
  standardMaps.letters.set("Z", "−−··");

  standardMaps.numbers.set("1", "·−−−−");
  standardMaps.numbers.set("2", "··−−−");
  standardMaps.numbers.set("3", "···−−");
  standardMaps.numbers.set("4", "····−");
  standardMaps.numbers.set("5", "·····");
  standardMaps.numbers.set("6", "−····");
  standardMaps.numbers.set("7", "−−···");
  standardMaps.numbers.set("8", "−−−··");
  standardMaps.numbers.set("9", "−−−−·");
  standardMaps.numbers.set("0", "−−−−−");

  standardMaps.symbols.set(".", "·−·−·−");
  standardMaps.symbols.set(",", "−−··−−");
  standardMaps.symbols.set("?", "··−−··");
  standardMaps.symbols.set("'", "·−−−−·");
  standardMaps.symbols.set("!", "−·−·−−");
  standardMaps.symbols.set("/", "−··−·");
  standardMaps.symbols.set("(", "−·−−·");
  standardMaps.symbols.set(")", "−·−−·−");
  standardMaps.symbols.set("&", "·−···");
  standardMaps.symbols.set(":", "−−−···");
  standardMaps.symbols.set(";", "−·−·−·");
  standardMaps.symbols.set("=", "−···−");
  standardMaps.symbols.set("+", "·−·−·");
  standardMaps.symbols.set("-", "−····−");
  standardMaps.symbols.set("_", "··−−·−");
  standardMaps.symbols.set('"', "·−··−·");
  standardMaps.symbols.set("$", "···−··−");
  standardMaps.symbols.set("@", "·−−·−·");

  standardMaps.prosigns.set("End of work", "···−·−");
  standardMaps.prosigns.set("Error", "········");
  standardMaps.prosigns.set("General invitation to transmit", "−·−");
  standardMaps.prosigns.set("Starting signal", "−·−·−");
  standardMaps.prosigns.set("New message follows", "·−·−·");
  standardMaps.prosigns.set("Verified", "···−·");
  standardMaps.prosigns.set("Wait", "·−···");

  standardMaps.lettersR.set("·−", "A");
  standardMaps.lettersR.set("−···", "B");
  standardMaps.lettersR.set("−·−·", "C");
  standardMaps.lettersR.set("−··", "D");
  standardMaps.lettersR.set("·", "E");
  standardMaps.lettersR.set("··−·", "F");
  standardMaps.lettersR.set("−−·", "G");
  standardMaps.lettersR.set("····", "H");
  standardMaps.lettersR.set("··", "I");
  standardMaps.lettersR.set("·−−−", "J");
  standardMaps.lettersR.set("−·−", "K");
  standardMaps.lettersR.set("·−··", "L");
  standardMaps.lettersR.set("−−", "M");
  standardMaps.lettersR.set("−·", "N");
  standardMaps.lettersR.set("−−−", "O");
  standardMaps.lettersR.set("·−−·", "P");
  standardMaps.lettersR.set("−−·−", "Q");
  standardMaps.lettersR.set("·−·", "R");
  standardMaps.lettersR.set("···", "S");
  standardMaps.lettersR.set("−", "T");
  standardMaps.lettersR.set("··−", "U");
  standardMaps.lettersR.set("···−", "V");
  standardMaps.lettersR.set("·−−", "W");
  standardMaps.lettersR.set("−··−", "X");
  standardMaps.lettersR.set("−·−−", "Y");
  standardMaps.lettersR.set("−−··", "Z");

  standardMaps.numbersR.set("·−−−−", "1");
  standardMaps.numbersR.set("··−−−", "2");
  standardMaps.numbersR.set("···−−", "3");
  standardMaps.numbersR.set("····−", "4");
  standardMaps.numbersR.set("·····", "5");
  standardMaps.numbersR.set("−····", "6");
  standardMaps.numbersR.set("−−···", "7");
  standardMaps.numbersR.set("−−−··", "8");
  standardMaps.numbersR.set("−−−−·", "9");
  standardMaps.numbersR.set("−−−−−", "0");

  standardMaps.symbolsR.set("·−·−·−", ".");
  standardMaps.symbolsR.set("−−··−−", ",");
  standardMaps.symbolsR.set("··−−··", "?");
  standardMaps.symbolsR.set("·−−−−·", "'");
  standardMaps.symbolsR.set("−·−·−−", "!");
  standardMaps.symbolsR.set("−··−·", "/");
  standardMaps.symbolsR.set("−·−−·", "(");
  standardMaps.symbolsR.set("−·−−·−", ")");
  standardMaps.symbolsR.set("·−···", "&");
  standardMaps.symbolsR.set("−−−···", ":");
  standardMaps.symbolsR.set("−·−·−·", ";");
  standardMaps.symbolsR.set("−···−", "=");
  standardMaps.symbolsR.set("·−·−·", "+");
  standardMaps.symbolsR.set("−····−", "-");
  standardMaps.symbolsR.set("··−−·−", "_");
  standardMaps.symbolsR.set("·−··−·", '"');
  standardMaps.symbolsR.set("···−··−", "$");
  standardMaps.symbolsR.set("·−−·−·", "@");

  standardMaps.prosignsR.set("···−·−", "End of work");
  standardMaps.prosignsR.set("········", "Error");
  standardMaps.prosignsR.set("−·−", "General invitation to transmit");
  standardMaps.prosignsR.set("−·−·−", "Starting signal");
  standardMaps.prosignsR.set("·−·−·", "New message follows");
  standardMaps.prosignsR.set("···−·", "Verified");
  standardMaps.prosignsR.set("·−···", "Wait");

  return standardMaps;
}

const standardMaps = getStandardMorse();

export default standardMaps;
