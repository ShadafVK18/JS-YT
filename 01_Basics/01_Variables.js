const accountId = 14456
let accountEmail = "mdshadaf@gmail.com"
var accountPassword = "123456"
accountCity = "Dhaka"
let accountState;

//accountId = 2 not allowed

accountEmail = "hfdgrbt.com"
accountPassword = "123456789"
accountCity = "Chittagong"

console.log(accountId);

/*
Prefer not to use var,
because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);