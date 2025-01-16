const students = require('./students.json');

function totalScores(scores) {
    let totalScore = 0;
    for(let i = 0; i < scores.length; i++) {
        totalScore += scores[i];
    }
    return totalScore;
};

function average(totalScore, NOFSubjects) {
    return(totalScore / NOFSubjects);
};

function grading(average, isPass) {
    if(isPass == "Fail") {
        return "F";
    }
    if(average >= 90 && average <= 100) { 
        return "A";
    } else if(average >= 75 && average < 90) {
        return "B";
    } else if(average >= 50 && average < 75) {
        return "C";
    }
    return "F";
};

const passOrFail = (scores => {
    // scores.every((item)=> item >= 35) ? "Pass" : "Fail";
    // scores.some((item)=> item < 35) ? "Fail" : "Pass";
    for(i = 0; i < scores.length; i++) {
        if(scores[i] < 35) {
            return "Fail";
        }
    }
    return "Pass";
});

const getIndScores = (scores => {
    let score = '';
    for(i = 0; i < scores.length; i++) {
        score += scores[i];
        if (i != scores.length - 1) {
            score += ', ';
        }
    }
    return score;
});

let gradesCount = {
    A : 0,
    B : 0,
    C : 0,
    F : 0,
};

for(let i = 0; i < students.length; i++) {
    const student = students [i];
    const totalScore = totalScores(student.scores)
    const avg = Math.round(average(totalScore, student.scores.length))
    const isPass = passOrFail(student.scores)
    const grade = grading(avg, isPass)
    
    gradesCount[grade]++;

    console.log(`Name: ${student.name}`);
    // console.log(`Individual Scores: ${student.scores.join()}`);
    console.log(`Individual Scores: ${getIndScores(student.scores)}`);
    console.log(`TotalScore: ${totalScore}`);
    console.log(`Pass/Fail: ${isPass}`); // min score for each subject to pass is 35
    console.log(`Average: ${avg}`);
    console.log(`Grading: ${grade}`);
    console.log("------------");
};

console.log("Grading Report:");
console.log(`A: ${gradesCount.A}`);
console.log(`B: ${gradesCount.B}`);
console.log(`C: ${gradesCount.C}`);
console.log(`F: ${gradesCount.F}`);

// Report:

// A: 
// B: 
// C: 
// F: 