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

function grading(average) {
    if(average >= 90 && average <= 100) { 
        return "A";
    } else if(average >= 75 && average < 90) {
        return "B";
    } else if(average >= 50 && average < 75) {
        return "C";
    }
    return "F";
};

const passorfail = (scores => {
    for(i = 0; i < scores.length; i++) {
        if(scores[i] < 35) {
            return "Fail";
        }
    }
    return "Pass";
});

for(let i = 0; i < students.length; i++) {
    const student = students [i];
    const totalScore = totalScores(student.scores)
    const avg = Math.round(average(totalScore, student.scores.length))
    const PF = passorfail(student.scores)
    const grade = grading(avg)

    console.log(`Name: ${student.name}`);
    console.log(`Individual Scores: ${student.scores.join()}`);
    console.log(`TotalScore: ${totalScore}`);
    console.log(`Pass/Fail: ${PF}`); // min score for each subject to pass is 35
    console.log(`Average: ${avg}`);
    console.log(`Grading: ${grade}`);
    console.log("------------");
};


// Report:

// A: 
// B: 
// C: 
// F: 