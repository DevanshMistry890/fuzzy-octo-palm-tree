const sections = document.querySelectorAll(".index-main section:not(#hero)");
let selectedIndex = 0;

function selectID() {
  sections.forEach((el, index) => {
    if (index == selectedIndex) el.style.display = "flex";
    else el.style.display = "none";
  });
}
setInterval(() => {
  // debugger
  if (selectedIndex + 1 == sections.length) selectedIndex = 0;
  else ++selectedIndex;
  selectID();
}, 5000);

selectID();
