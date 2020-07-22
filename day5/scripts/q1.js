var a = [];
while(1){
    let input = +(prompt("Enter the numbers :"));
    if(input != 0 && input != ''){
        a.push(input);
        continue;
    }
    else{
        break;
    }
}

console.log(`Original Array: ${a}`);

let odd = a.filter(od=>od%2!=0);

let oddCubes = [];
oddCubes.push(a.filter(od=>od%2!=0).map(od=>od**3));

console.log(`Filtered Array with Odd numbers : ${odd}`);
console.log(`The cubes of odd numbers are ${oddCubes}`);