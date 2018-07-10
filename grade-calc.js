//student score (score, totalScore)
//15/20 -> You got a C (75%)


let getGrade = function (score, totalScore) {
    let percent = (score / totalScore) * 100;
    let letterGrade = '';
    
    if (score >= 90)  {
        letterGrade = 'A';
    } else if (score >= 80) {
        letterGrade = 'B';
    } else if (score >= 70) {
        letterGrade = 'C';
    } else if (score >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    return (`You got a ${letterGrade} ${score}%`);
}

let result = getGrade(75, 100);
console.log(result);