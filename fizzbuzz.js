let fizzBuzz = (a) =>{
    for(let b=1; b<=a; b++){
        let c = ''
        if(b%3==0){
            c+='Fizz' ;
        }
        if(b%5==0){
            c+='Buzz';
        }
        if (c === '') {
            c = b.toString();
          }
        console.log(c)
    }
}

fizzBuzz(100)