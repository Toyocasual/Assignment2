//Write a loop to print all even numbers from 1 to 100




/* let a = function (){
    for(i = 0; i < 100; i++) {
        console.log(i)
    }
};
console.log(a) */

/* let b = 0;
while(b < a.lenght){
    if (a[b] % 2 == 0)
    event.push(a[b]); b++
}

console.log(a[b]); */

 /*  let a = function loop(){

let x = 1;
while (x < 101) {
    console.log(x++)

    if (x == 101)
    break;
} 
return loop();
}

console.log(a) */

  function even_numbers() {
    for (let i = 1; i <= 100; i++)
        if(i%2 == 0){ 
            console.log(i)
        }
       
}

 even_numbers();
