const accountId = 67328
let accountEmail = "sam@google.com"
var accountPassword = "1245352"

accountCity = "Jaipur"

// accountId = 2  // not allowed

// accountEmail = "hfjk@ks.com"
// accountPassword = "748922" // commented kyonki gitGuardian se mail aa gaya tha 
accountCity = "jodhpur"
let accountState;

console.log(accountId); 

/* 
Prefer not to to use var
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
