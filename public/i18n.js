var localizationMap = {
}

function l(tag) {
  const lang = getCookie("ui_lang");
  var langSet = localizationMap[lang];
  if (langSet != null) {
    var string = langSet[tag];
    if (string)
      return string;
  }
  return tag;
}
