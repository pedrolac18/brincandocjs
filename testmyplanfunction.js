/* ----------------------------------- Primeiro Botão -------------------------------------------------------- */
const carros = ["BMW", "Gol", "Uno", "Pálio", "Carroça", "Carrossel", "Trator"];
const animais = ["Cachorro", "Gato", "Girafa", "Rato", "Elefante", "Ariranha", "Preguiça"];

 function base(){

  let txt = "";

  let i = 0;
  let z = 0;
  while(i < carros.length, z < animais.length){
  txt+=carros[i] + "<br>";
  txt+= animais[z] + "<br>";
  i++;
  z++;
};
  document.getElementById("demo").innerHTML = txt;
};

/*----------------------------------------------------------------------------------------------------------------- */

/* ----------------------------------- Segundo Botão -------------------------------------------------------------- */
const nome = ["Marcos", "José", "Carlos"];
const idade = ["10 Anos", "17 Anos", "18 Anos"];
const profissao = ["Estudante", "Estudante", "Dev em Desenvolvimento"];
const formacao = ["Cursando Fundamental I", "Cursando Ensino Médio", "Ensino Médio Completo"];

 function curriculum(){

   let texto = "";
   let a = 0;
   let b = 0;
   let c = 0;
   let d = 0;

   while(a < nome.length, b < idade.lenght, c < profissao.lenght, d < formacao.length){
     texto+=nome[a] + "<br>";
     texto+=idade[b] + "<br>";
     texto+=profissao[c] + "<br>";
     texto+=formacao[d] + "<br>" + "<br>";
     a++;
     b++;
     c++;
     d++;
   }
 document.getElementById("demoo").innerHTML = texto;
 }

 /* -------------------------------------------------------------------------------------------------------------- */

  /*function numbers(){
    let tt = "";
     for(let i = 0; 0 < 10; i++){
       tt += i + "<br>";
     }
    console.log(tt);

  }
*/

function bass(){
  const vida = [" 10 De vida ", " 15 De vida ", " 20  De vida", " 25 De vida", " 30 De vida", " 35 De vida"];


  let teext = "";
  for(let i = 0; i < vida.length; i++){
  teext += vida[i] + "<br>"
}

document.getElementById("deemo").innerHTML = teext;
};

/* ---------------------------------------------------------------------------------------------- */

function nize(){

var paladins = new Array();
paladins[0] = '<img src="http://s2.glbimg.com/_9rqEuMqGfGp56v9GpnaR2QBUHo=/0x0:694x419/695x420/s.glbimg.com/po/tt2/f/original/2016/10/14/untitled-11.jpg" width="200" height="150">';
paladins[1] = '<img src="https://webcdn.hirezstudios.com/paladins/wp-content/uploads/2021/04/Vatu_SplashArtDefault_Final.jpg" width="200px" height="150">';

let ui = "";
for(let i = 0; i < paladins.length; i++){
  ui += paladins[i] +"<br>";
}
document.getElementById("ddemo").innerHTML = ui;
};
