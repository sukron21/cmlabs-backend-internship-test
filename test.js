let fizzBuzz = (a) =>{
    for(let b=1; b<=a; b++){
        let output = ''
        if(b%3==0){
            output+='Fizz' ;
        }
        if(b%5==0){
            output+='Buzz';
        }
        if (output === '') {
            output = b.toString();
          }
        console.log(output)
    }
}

fizzBuzz(100)