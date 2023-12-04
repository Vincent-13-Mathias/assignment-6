function sumNumbers(x) {
    if (x < 0) {
        return 0;
    }
    let answer = 0;
    let a = x;

    while (a > 0) {
        answer += a, a--;
    }

    return answer;
}
let number1 = 5;
let number2 = 99;
let answer = sumNumbers(number1);
console.log(`The sum  up to ${number1} is: ${answer}`);
