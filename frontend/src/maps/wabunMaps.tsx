interface WabunMorse {
  moji: Map<string, string>;
  suuji: Map<string, string>;
  kigou: Map<string, string>;

  mojiR: Map<string, string>;
  suujiR: Map<string, string>;
  kigouR: Map<string, string>;
}

function getWabunMorse(): WabunMorse {
  const wabunMaps = {
    moji: new Map<string, string>(),
    suuji: new Map<string, string>(),
    kigou: new Map<string, string>(),

    mojiR: new Map<string, string>(),
    suujiR: new Map<string, string>(),
    kigouR: new Map<string, string>(),
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

  wabunMaps.mojiR.set("·−", "イ");
  wabunMaps.mojiR.set("·−·−", "ロ");
  wabunMaps.mojiR.set("−···", "ハ");
  wabunMaps.mojiR.set("−·−·", "ニ");
  wabunMaps.mojiR.set("−··", "ホ");
  wabunMaps.mojiR.set("·", "へ");
  wabunMaps.mojiR.set("··−··", "ト");
  wabunMaps.mojiR.set("··−·", "チ");
  wabunMaps.mojiR.set("−−·", "リ");
  wabunMaps.mojiR.set("····", "ヌ");
  wabunMaps.mojiR.set("−·−−·", "ル");
  wabunMaps.mojiR.set("·−−−", "ヲ");
  wabunMaps.mojiR.set("−·−", "ワ");
  wabunMaps.mojiR.set("·−··", "カ");
  wabunMaps.mojiR.set("−−", "ヨ");
  wabunMaps.mojiR.set("−·", "タ");
  wabunMaps.mojiR.set("−−−", "レ");
  wabunMaps.mojiR.set("−−−·", "ソ");
  wabunMaps.mojiR.set("·−−·", "ツ");
  wabunMaps.mojiR.set("−−·−", "ネ");
  wabunMaps.mojiR.set("·−·", "ナ");
  wabunMaps.mojiR.set("···", "ラ");
  wabunMaps.mojiR.set("−", "ム");
  wabunMaps.mojiR.set("··−", "ウ");
  wabunMaps.mojiR.set("·−··−", "ヰ");
  wabunMaps.mojiR.set("··−−", "ノ");
  wabunMaps.mojiR.set("·−···", "オ");
  wabunMaps.mojiR.set("···−", "ク");
  wabunMaps.mojiR.set("·−−", "ヤ");
  wabunMaps.mojiR.set("−··−", "マ");
  wabunMaps.mojiR.set("−·−−", "ケ");
  wabunMaps.mojiR.set("−−··", "フ");
  wabunMaps.mojiR.set("−−−−", "コ");
  wabunMaps.mojiR.set("−·−−−", "エ");
  wabunMaps.mojiR.set("·−·−−", "テ");
  wabunMaps.mojiR.set("−−·−−", "ア");
  wabunMaps.mojiR.set("−·−·−", "サ");
  wabunMaps.mojiR.set("−·−··", "キ");
  wabunMaps.mojiR.set("−··−−", "ユ");
  wabunMaps.mojiR.set("−···−", "メ");
  wabunMaps.mojiR.set("··−·−", "ミ");
  wabunMaps.mojiR.set("−−·−·", "シ");
  wabunMaps.mojiR.set("·−−··", "ヱ");
  wabunMaps.mojiR.set("−−··−", "ヒ");
  wabunMaps.mojiR.set("−··−·", "モ");
  wabunMaps.mojiR.set("·−−−·", "セ");
  wabunMaps.mojiR.set("−−−·−", "ス");
  wabunMaps.mojiR.set("·−·−·", "ン");
  wabunMaps.mojiR.set("··", "゛");
  wabunMaps.mojiR.set("··−−·", "゜");

  wabunMaps.suujiR.set("·−−−−", "1");
  wabunMaps.suujiR.set("··−−−", "2");
  wabunMaps.suujiR.set("···−−", "3");
  wabunMaps.suujiR.set("····−", "4");
  wabunMaps.suujiR.set("·····", "5");
  wabunMaps.suujiR.set("−····", "6");
  wabunMaps.suujiR.set("−−···", "7");
  wabunMaps.suujiR.set("−−−··", "8");
  wabunMaps.suujiR.set("−−−−·", "9");
  wabunMaps.suujiR.set("−−−−−", "0");

  wabunMaps.kigouR.set("·−−·−", "ー");
  wabunMaps.kigouR.set("·−·−·−", "、");
  wabunMaps.kigouR.set("·−·−··", "」");
  wabunMaps.kigouR.set("−·−−·−", "（");
  wabunMaps.kigouR.set("·−··−·", "）");
  wabunMaps.kigouR.set("−··−−−", "本文");
  wabunMaps.kigouR.set("···−·", "訂正・終了");

  return wabunMaps;
}

const wabunMaps = getWabunMorse();

export default wabunMaps;
