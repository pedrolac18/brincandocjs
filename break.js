
/* ---------------------------- Break com numeros ------------ */
let text = "";
for(let i = 0; i < 10; i++) {
  if(i === 3) {break;}
  text += "O número é " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
/* ------------------------------------------------------------- */

/* ----------------------------- Continue statement  ---------------- */

let texto = "";
for (let j = 0; j < 100; j++) {
  if (j === 10) { continue; }
  if (j === 20) { continue; }
  if (j === 30) { continue; }
  if (j === 40) { continue; }
  if (j === 50) { break; }
  texto += "O Número é: " + j + "<br>";
}

document.getElementById("demoo").innerHTML = texto;


/* ----------------------------------------------------------------------- */
/* -------------- BREAK in Array -------------------------- */


const brother = ["Itadori", "tudou", "Gojo", "Megumi"];
let tixti = "";

list: {
  tixti += brother[0] + "<br>";
  tixti += brother[1] + "<br>";
  break list;
  tixti += brother[2] + "<br>";
  tixti += brother[3] + "<br>";
}

document.getElementById("deemo").innerHTML = tixti ;

/* ------------------------------------------------------------------ */
