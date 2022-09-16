function myFunction() {
    window.location.href = './quiz.html'
};

const quationBank = [

    {
        
        question: "Q.1: In JavaScript, what is a block of statement?",
        a: "Conditional block",
        b: "block that combines a number of statements",
        c: "both conditional block and a single statement",
        d: "block that contains a single statement",
        ans: "ans2"
    },
    
    {
        question: "Q.2: Which one of the following also known as Conditional Expression:",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        ans: "ans4"
    },
    
    {
        question: "Q.3: In JavaScript, what is a block of statement?",
        a: "Conditional block",
        b: "block that combines a number of statements",
        c: "both conditional block and a single statement",
        d: "block that contains a single statement",
        ans: "ans2"
    },
    
    {
        question: "Q.4: When interpreter encounters an empty statements, what it will do:",
        a: "Shows a warning",
        b: "Prompts to complete the statement",
        c: "Throws an error",
        d: "Ignores the statements",
        ans: "ans4"
    }

    ,
    
    {
        question: "Q.5: In JavaScript, what is a block of statement?",
        a: "Conditional block",
        b: "block that combines a number of statements",
        c: "both conditional block and a single statement",
        d: "block that contains a single statement",
        ans: "ans2"
    },
    
    {
        question: "Q.6: When interpreter encounters an empty statements, what it will do:",
        a: "Shows a warning",
        b: "Prompts to complete the statement",
        c: "Throws an error",
        d: "Ignores the statements",
        ans: "ans4"
    },

    {
        
        question: "Q.7: In JavaScript, what is a block of statement?",
        a: "Conditional block",
        b: "block that combines a number of statements",
        c: "both conditional block and a single statement",
        d: "block that contains a single statement",
        ans: "ans2"
    },
    
    {
        question: "Q.8: Which one of the following also known as Conditional Expression:",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        ans: "ans4"
    },
    
    {
        question: "Q.9: In JavaScript, what is a block of statement?",
        a: "Conditional block",
        b: "block that combines a number of statements",
        c: "both conditional block and a single statement",
        d: "block that contains a single statement",
        ans: "ans2"
    },
    
    {
        question: "Q.10: When interpreter encounters an empty statements, what it will do:",
        a: "Shows a warning",
        b: "Prompts to complete the statement",
        c: "Throws an error",
        d: "Ignores the statements",
        ans: "ans4"
    }
    
    ];


const question = document.querySelector('.question');
const opts1 = document.querySelector('#opts1');
const opts2 = document.querySelector('#opts2');
const opts3 = document.querySelector('#opts3');
const opts4 = document.querySelector('#opts4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.ans');
const showMark = document.querySelector('#showMark');


let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList  =  quationBank[questionCount];
   question.innerText  =  questionList.question;
   opts1.innerText = questionList.a;
   opts2.innerText = questionList.b;
   opts3.innerText = questionList.c;
   opts4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () =>{
    let ans;

    answers.forEach((curAnsElem) => {
        if(
            curAnsElem.checked
        ){
            ans = curAnsElem.id;
        }
    });
    return ans;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quationBank[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quationBank.length){
        loadQuestion();
    }
    else{
        showMark.innerHTML =
        `<h3>Results  ! Your scored ${score}/${quationBank.length}</h3>
        <button class="btn" onclick="location.reload()"> Return Test ?</button>`;

        showMark.classList.remove('Marks');
    }
});
