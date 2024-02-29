//Declarando os arrays que vamos usar
let arrayA = [13,20,10,22,24,20,27,17,19,14]
let arrayB = [24,22,23,11,15,17,29,14,16,21]

//declarando os parâmetros
function Descobrir(arrayUm,arrayDois){
    let arrayC = [] //array que armazena os números em comum
    let contador = 0 //contador desse array

    //primeiro FOR vai percorrer o arrayUm
    for(let i = 0; i < arrayUm.length; i++){
        //O segundo FOR percorre o arrayDois e compara
        //os números em comum com o arrayum

        for(let j = 0; j < arrayDois.length; j++){
            //Se a comparação entre eles for verdadeira
            //é adicionado o números em comum no arrayC
            //e atribui o valor máximo ao contador j, encerrando 
            //a validação nesse número e evitando os números duplicados
            if(arrayUm[i] == arrayDois[j]){
                arrayC[contador] = arrayUm[i]
                contador++;
                j = arrayDois.length;
            }
           
        }
    }

    return arrayC;
}

console.log(Descobrir(arrayA,arrayB)) //printando os números em comum