let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media;

for (i = 0; i < numbers.length; i+=1) {
    sum = sum + numbers[i];
    media = sum / numbers.length
}
console.log(media)
if (media > 20 && media !== 20) {
    console.log("Maior que 20")
} else if (media == 20) {
    console.log("Igual a 20")
} else {
    console.log("menor que 20")
}



      
