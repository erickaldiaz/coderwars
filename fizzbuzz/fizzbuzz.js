function FizzBuzzTest (boxNumber){

    //console.log(boxNumber);
    var arry = [];

for(i=1; i<= boxNumber; i++){

    if(i% 3 == 0 && i%5 ==0){
        arry.push("fizzbuzz"); 
    } else if( i% 3 ==0) {
        arry.push("fizz");   
    } else if( i%5 ==0) {
        arry.push("buzz");
    }else {
        arry.push(i);   
    }
    

   // console.log("hola"+ i);
}
 console.log(arry);

}