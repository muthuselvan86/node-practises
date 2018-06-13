// ** Global -> Process -> stdin/stdout
const questions = [
    "what is project name?",
    "what is the version?",
    "what is the name of the author?"
];
let answers=[];

function ask(index) {
    process.stdout.write(`\n > ${questions[index]}  \n -Ans-> `);
}

process.stdin.on('data', (data) => {
    //process.stdout.write(data.toString().trim() + '\n');
    answers.push(data.toString().trim());
    if(answers.length < questions.length){
        ask(answers.length);
    }else{
        process.exit();
    }
});

process.on('exit', () => {
    process.stdout.write(`Welcome ${answers[2]} to  the ${answers[0]} project version is ${answers[1]} \n`);
});

ask(0);