const readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);
let person = {
    name: "",
    details: []
};

rl.question("what is your name?", (ans) => {
    // console.log(`Hello ${ans}!`);
    person.name = ans.trim();

    rl.setPrompt(`${person.name}! tell me some details?`);
    rl.prompt();

    rl.on('line', (details) => {
        if (details.toLowerCase().trim() === "exit")
            rl.close();
        person.details.push(details.trim());
        rl.setPrompt(`${person.name}! tell me some other details? (type exit to stop) `);
        rl.prompt();
    });

});

rl.on('close', () => {
    console.log("name: %s and details:%j", person.name, person.details);
    process.exit();
});