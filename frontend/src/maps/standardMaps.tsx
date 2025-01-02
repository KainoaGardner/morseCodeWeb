interface StandardMorse {
  letters: Map<string, string>;
  symbols: Map<string, string>;
  numbers: Map<string, string>;
  prosigns: Map<string, string>;
}

function getStandardMorse(): StandardMorse {
  const standardMaps = {
    letters: new Map<string, string>(),
    symbols: new Map<string, string>(),
    numbers: new Map<string, string>(),
    prosigns: new Map<string, string>(),
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

  return standardMaps;
}

const standardMaps = getStandardMorse();

export default standardMaps;
