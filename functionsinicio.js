/* Functions não são executas instantanêamente, elas são blocos de código
para uma futura ação.

sintaxe:
function functionName(parameters) {
  // código para executar //
}

 E serão executas quando os chamados "puxadores" invocar elas.
*/

/* --------------------------------Functions inicio--------------------------------- */


 var xis = minhaFunção(54, 33, 2, 3, 5, 600);
 document.getElementById("demo").innerHTML = xis;

  function minhaFunção(a, b, c, d, e, f) {
    return a * b * c * d + e - f;
  }


/* -------------------------------------------------------------------------------- */

const myFunction = new Function("a", "b", "return a * b");
document.getElementById("demoo").innerHTML = myFunction(54, 33);

/* ------------------------------------------------------------------------------- */

 /* function que se auto invoca + 2 for*/



const vari = ["one", "two", "three", "four", "nine"];
const color = ["blue", "red", "violet", "indigo", "white"];


(function () {

  let txt = "";
  for(let i = 0; i < vari.length; i++){
        txt += vari[i] + "<br>";
      };
  let gg = "";
  for(let z = 0; z < color.length; z++){
         gg += color[z] + "<br>"
      };
  document.getElementById("deemo").innerHTML = txt + gg;
})();


/* ------------------------------------------------------------------------------*/


/* Function auto invocavel com while */


(function () {

  let texto = "";
  let x = 50;
  let y = 0;
  let z = 10;

 const country = ["Brasil", "Argentina", "Paraguay", "Uruguay", "Venezuela"];

  while(x < 100, z < 40, y < country.length){
    texto += country[y] + "<br>"
    texto += x +"<br>";
    texto += z + "<br>";


    x++;
    y++;
    z++;
  };
  document.getElementById("ddemo").innerHTML = texto;
})();


/* ------------------------------------------ */
