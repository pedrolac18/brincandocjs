/* Esse loop while, é interesante, tem como trabalhar com mais itens.
 arroz 1 2;
 feijão 1 2;
 carne 1 2;

 loop em 3 de 3;

 Chamo de Loop Array.

*/

let text = "";
let i = 0;
let x = 0;
let y = 0;
const carros = ["BMW", "Gol", "Uno", "Strada", "Fox", "Civic"]
const comida = ["Arroz", "feijão", "batata", "bife", "abobora", "laranja"];
while( i < 5, x < comida.length, y < carros.length){
  text += "<br> O numero é " + i;
  text +=  "<br> Itens para o almoço " + comida[x];
  text += "<br> Estilos de Carros " + carros[y] + "<br>";
  i++;
  x++;
  y++;
};
document.getElementById("demo").innerHTML = text;


/* ------------------------------------------------------------------------- */



let txt = "";
let z = 0;
let a = 0;
let tt = ["Carro", "Arroz", "Pão", "cachorro"];

do {
  txt += "<br> O número é: " + z;
  z++;
  txt += "<br> Itens Aleatórios: " + tt[a];
  a++;

}while( z < 10, a < tt.length);

document.getElementById("demoo").innerHTML = txt;

/*------------------------------------------------------------- */

const jogos = ["Paladins", "M.A.R.S.", "G.T.A", "Resident Evil VII", "Minecraft"];
let p = 0;
let texto = "";
for (;jogos[p];) {
  texto += jogos[p] + "<br>";
  p++;
};

document.getElementById("deemo").innerHTML = texto;

/* ---------------------------------------------------------------- */


       var habilidade = ["correr", "pular", "rolar", "escrever"];

       let f = 0;
       let ttext = "";
       while (habilidade[f]) {
         ttext += habilidade[f] + "<br>"
         f++
       };

       document.getElementById("ddemo").innerHTML = ttext;
