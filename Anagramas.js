/*1) Hacer una funcion que devuelva si una palabra es anagrama de otra
  2)}Hacer una funcion que cuente y devuelva cuantas veces aparece una palabra en determinada frase */
function esAnagrama(palabra, posibleAnagrama){
    return palabra.split("").sort().join("") === posibleAnagrama.split("").sort().join("");
  }
  
  
  function cuantosAnagramas(palabra,frase)/*pasadas por parametro*/ {   
    let npalabra=0; /*para iterar*/   let word=palabra;/*me hago una copia para modificar*/
    let nfrase=0;  /*para iterar*/    let frase2=frase;/*me hago una copia para modificar*/
    let resu=false;                   let cantidadDeAnagramas=0;
    
    palabra.split("");
    frase.split("");
    for(nfrase=0;nfrase<frase.length;nfrase++){
     for (npalabra=0; npalabra<palabra.length; npalabra++){
       //console.log(frase[nfrase]);
       //console.log(palabra[npalabra])
       if(frase[nfrase]==palabra[npalabra]){
         console.log(frase2 = frase.slice(nfrase,(palabra.length+nfrase)))
         resu=esAnagrama(palabra,frase2);
         console.log(resu)
         
         if(resu==true){
           console.log(cantidadDeAnagramas++);
           
           
           resu=false;
         }
         console.log("--------------------------------")
       }
     }
    }
    return cantidadDeAnagramas;
  }
  function main(){
  console.log(cuantosAnagramas("ola", "hola hola"))
  console.log(cuantosAnagramas("uno","uno onu nou"))
  console.log(esAnagrama("Juancho","Juancho"));
  }
  main()