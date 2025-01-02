interface WabunMorse {
  moji: Map<string, string>;
  suuji: Map<string, string>;
  kigou: Map<string, string>;
}

function getWabunMorse(): WabunMorse {
  const wabunMaps = {
    moji: new Map<string, string>(),
    suuji: new Map<string, string>(),
    kigou: new Map<string, string>(),
  };

  wabunMaps.moji.set("イ", "·−");
  wabunMaps.moji.set("ロ", "·−·−");
  wabunMaps.moji.set("ハ", "−···");
  wabunMaps.moji.set("ニ", "−·−·");
  wabunMaps.moji.set("ニ", "−·−·");

  return wabunMaps;
}

const wabunMaps = getWabunMorse();

export default wabunMaps;
