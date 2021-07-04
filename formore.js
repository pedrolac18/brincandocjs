/*
*/





/* ------------------------------ Primeira seção ---------------------- */

/*

         Nessa seção o FOR usa a propriedade /IN/


         A constante possui propriedades e valores, você pode colocar o quanto de propriedades
         e valores desejados.
         Após a Const xxx = { xxx: "yyy", xx: "yy"};, entra já no bloco do For.
         let (nomequalquer) = ""; esses apostrofos servem para indicar que é uma string,
         algo que será exibido em texto, após isso, tem o for(let x in xxx){ nomequalquer += xxx[x] + " "}; a letra X tem como
         propriedade referir ao nome da const.



    Exemplo:

*/



const pessoa = { name: "camile", job: "Costureia", age: "34 anos", child: "4 filhos"}

     let txt = "";
     for( let x in pessoa) {
       txt += pessoa[x] + " ";
     };

     document.getElementById('demo').innerHTML = txt;




/* ------------------------------------------------------------------------ */

/*

     O que o pato disse para a pata?

    - Vem Quá!

*/


/* ------------------------------ Segunda Seção ----------------------------*/


/*

           Nessa segunda seção ocorre a mesma coisa da seção acima,
           só que ussa Array(matriz).

*/

 const lele = [" Minas Gerais, ", " São Paulo, ", " Santa Catarina, ", " Rio de Janeiro, ", " Espirito Santo. "];
    let text = "";
    for (let x in lele){
      text += lele[x];
    }
        document.getElementById('demoo').innerHTML = text;

/* ------------------------------------------------------------------------ */

        /* Usaremos a Function pela primeira vez no for, pois se o for for importande var.forEach(Nome da function);*/

/* --------------------------------------------- Terceira Seção ------------------------------------*/


/*

    Nessa for é usado uma funçao por causa da importância, esse for chama uma função de retorno,
    uma vez para cada elemento da matriz.
    a const pode array em numeros ou strings.

    após let deve usar o parametro .forEach(nomedafunction).
    após puxe o d.getElementById(id).innerHTML = nome do let;
    após isso faça uma function com nome dado no parametro. function nomedafunction(x,y,z), pode usar apenas o X e else {
    pode ter o nome que você quiser.
    após ter criado a function finaçiza com retorno do nome da let += x + "<br>"
    }

*/



   const numbers = [45,2,3,4343,43321,32434,543535,1231344,4235345,4534534,3545345,5345345, "jogar bola", "luis"];

   let txxt = "";
   numbers.forEach(templare);
   document.getElementById("deemo").innerHTML = txxt;

   function templare(value, index, array) {
     txxt += value + "<br>"
   }

   /* --------------------------------------------------------------------------------------------------------------- */
