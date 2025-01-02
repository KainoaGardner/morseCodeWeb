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
  wabunMaps.moji.set("ホ", "−··");
  wabunMaps.moji.set("へ", "·");
  wabunMaps.moji.set("ト", "··−··");
  wabunMaps.moji.set("チ", "··−·");
  wabunMaps.moji.set("リ", "−−·");
  wabunMaps.moji.set("ヌ", "····");
  wabunMaps.moji.set("ル", "−·−−·");
  wabunMaps.moji.set("ヲ", "·−−−");
  wabunMaps.moji.set("ワ", "−·−");
  wabunMaps.moji.set("カ", "·−··");
  wabunMaps.moji.set("ヨ", "−−");
  wabunMaps.moji.set("タ", "−·");
  wabunMaps.moji.set("レ", "−−−");
  wabunMaps.moji.set("ソ", "−−−·");
  wabunMaps.moji.set("ツ", "·−−·");
  wabunMaps.moji.set("ネ", "−−·−");
  wabunMaps.moji.set("ナ", "·−·");
  wabunMaps.moji.set("ラ", "···");
  wabunMaps.moji.set("ム", "−");
  wabunMaps.moji.set("ウ", "··−");
  wabunMaps.moji.set("ヰ", "·−··−");
  wabunMaps.moji.set("ノ", "··−−");
  wabunMaps.moji.set("オ", "·−···");
  wabunMaps.moji.set("ク", "···−");
  wabunMaps.moji.set("ヤ", "·−−");
  wabunMaps.moji.set("マ", "−··−");
  wabunMaps.moji.set("ケ", "−·−−");
  wabunMaps.moji.set("フ", "−−··");
  wabunMaps.moji.set("コ", "−−−−");
  wabunMaps.moji.set("エ", "−·−−−");
  wabunMaps.moji.set("テ", "·−·−−");
  wabunMaps.moji.set("ア", "−−·−−");
  wabunMaps.moji.set("サ", "−·−·−");
  wabunMaps.moji.set("キ", "−·−··");
  wabunMaps.moji.set("ユ", "−··−−");
  wabunMaps.moji.set("メ", "−···−");
  wabunMaps.moji.set("ミ", "··−·−");
  wabunMaps.moji.set("シ", "−−·−·");
  wabunMaps.moji.set("ヱ", "·−−··");
  wabunMaps.moji.set("ヒ", "−−··−");
  wabunMaps.moji.set("モ", "−··−·");
  wabunMaps.moji.set("セ", "·−−−·");
  wabunMaps.moji.set("ス", "−−−·−");
  wabunMaps.moji.set("ン", "·−·−·");
  wabunMaps.moji.set("゛", "··");
  wabunMaps.moji.set("゜", "··−−·");

  wabunMaps.suuji.set("1", "·−−−−");
  wabunMaps.suuji.set("2", "··−−−");
  wabunMaps.suuji.set("3", "···−−");
  wabunMaps.suuji.set("4", "····−");
  wabunMaps.suuji.set("5", "·····");
  wabunMaps.suuji.set("6", "−····");
  wabunMaps.suuji.set("7", "−−···");
  wabunMaps.suuji.set("8", "−−−··");
  wabunMaps.suuji.set("9", "−−−−·");
  wabunMaps.suuji.set("0", "−−−−−");

  wabunMaps.kigou.set("ー", "·−−·−");
  wabunMaps.kigou.set("、", "·−·−·−");
  wabunMaps.kigou.set("」", "·−·−··");
  wabunMaps.kigou.set("（", "−·−−·−");
  wabunMaps.kigou.set("）", "·−··−·");
  wabunMaps.kigou.set("本文", "−··−−−");
  wabunMaps.kigou.set("訂正・終了", "···−·");

  return wabunMaps;
}

const wabunMaps = getWabunMorse();

export default wabunMaps;
