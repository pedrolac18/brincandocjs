
/* Nessa codificação temos 3 (const) em Array, ou seja vários valores em (strings""), indica que serão escrituras,
temos também 3 (for) que é o loop, ele faz o mesmo que:

   exemplo:

   const x = ["arroz", "batata"];

   console.log(x[0]);
   console.log(x[1]);

   output:

    arroz
    batata

    essa foi uma forma demorada, o FOR faz o mesmo que isso de uma maneira simplificada, continuando o exemplo:

    const x = ["arroz", "batata"];

    let y = "";
    for(let i = 0; i > x.length; i++){
    y += x[i] + "<br>";
  }
    document.getElementId("id do elemento HTML").innerHTML = y;

    no output estará:

    arroz
    batata

    Essa repetição é cricial para encurtar o Tempo!

 */
const nomes = ["pedro : ", "joão : ", "luis : ", "henrique : ", "antonio : ", "lucas : "];
const classe = ["arqueiro", "atirador", "vigilante", "flanco-atirador","mago", "vanguarda"];
const vida = [" 10 De vida ", " 15 De vida ", " 20  De vida", " 25 De vida", " 30 De vida", " 35 De vida"];

 let texxt = "";
 for(let i = 0; i < nomes.length; i++) {
   texxt += nomes[i] + "         " + "<br>";
 }

  let text = "";
  for(let i = 0; i < classe.length; i++) {
  text += classe[i] + "<br>";

 }

 let teext = "";
 for(let i = 0; i < vida.length; i++){
   teext += vida[i] + "<br>"
 }



document.getElementById('demo').innerHTML = texxt;
document.getElementById('demoo').innerHTML = text;
document.getElementById('deemo').innerHTML = teext;
