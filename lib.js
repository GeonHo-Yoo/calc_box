function avg(numbers){
    let s = 0;
    for(let i =0; i < numbers.length; i++){
        s += numbers[i];
    }
    return s / numbers.length;
}

function prime(num){

    for(let i = 2; num > i; i++){
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function fact(num){
    if(num==1){
        return 1;
    }
    else{ // recursive call
        return num * fact(num-1);
    }
}

module.exports = {
    avg,
    prime,
    fact
}