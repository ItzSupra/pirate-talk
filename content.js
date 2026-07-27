const replacements = [
  [/404/i, " Arrr! This page be lost at sea, mate!"],
  [/403/i, " Ye be forbidden from enterin' these waters!"],
  [/500/i, " The ship's engine be on fire! The crew must be fixin' it."],
  [/error/i, " Arrr! Somethin' went terribly wrong."]
];

function piratefy() {
  document.querySelectorAll("body *").forEach(el => {
    if (el.children.length === 0) {
      let text = el.textContent;

      replacements.forEach(([pattern, replacement]) => {
        text = text.replace(pattern, replacement);
      });

      el.textContent = text;
    }
  });
}
piratefy();