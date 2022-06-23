const ln = document.getElementById("lang");

ln.childNodes.forEach(el => {
  el.addEventListener("click", () => {
    if (!el.classList.contains("selected")){
      changeLang(el.dataset.type);
      ln.childNodes.forEach((ele) => {
        try {
          ele.classList.toggle("selected");
        } catch {}
      });
    }
  });
})

// window.onload = ()=>{
//   changeLang(ln.value);
// }

async function changeLang(value) {
  const file = await fetch("./lang/" + value + ".json");
  const json = await file.json();


  const elements = document.querySelectorAll("[data-lang]");
  document.body.dir = json["dir"];
  document.body.style.fontFamily = json["font"];


  elements.forEach(el => {
    el.innerHTML = json[el.dataset.lang];
    el.style.fontFamily = json["font"];
  });
  console.log(elements);
}

const navBtn = document.getElementById("nav-btn");
const mainMenu = document.getElementById("main-menu");
navBtn.addEventListener("click", ()=>{
  mainMenu.classList.toggle("active");
});
