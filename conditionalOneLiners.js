function checkSame(a,b) {
    return (a == b) ? "EQUAL" : "NOT EQUAL"
}
console.log(checkSame(-1 ,2))

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}

console.log(findGreaterOrEqual(10, 10))