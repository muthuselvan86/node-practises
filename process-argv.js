// ** Global -> Process variable **
console.log(process.argv);

// Create a function to grab param
function grabParam(flag) {
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index + 1];
}

var user = grabParam('--user');

if (!user)
    console.log("User not found");
else
    console.log(`We found a match: ${user}`);