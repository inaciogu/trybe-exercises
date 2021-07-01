let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let qtd = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 != 0) {
        qtd+=1;
    }
 }
  if(qtd == 0){
        console.log('Nenhum valor impar encontrado!') 
    } else {
        console.log(qtd);
    }






