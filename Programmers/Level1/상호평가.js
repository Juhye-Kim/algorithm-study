function solution(scores) {
    const grades = [];
    
    for (let i = 0; i < scores.length; i++) {
        let [total, max, maxCount, min, minCount] = [0, -Infinity, 0, Infinity, 0];
        
        for (let j = 0; j < scores.length; j++) {
            const cur = scores[j][i];
            total += cur;
            
            if (max <= cur) {
                if (max < cur) maxCount = 0;
                [maxCount, max] = [maxCount + 1, cur];
            }
            else if (min >= cur) {
                if (min > cur) minCount = 0;
                [minCount, min] = [minCount + 1, cur]; 
            }
        }

        const selfscore = scores[i][i];
        
        if ((selfscore === max && maxCount === 1) || (selfscore === min && minCount === 1)) {
            grades.push((total - selfscore) / (scores.length - 1));
        } else {
          grades.push(total / scores.length);
        }
    }
    
    return grades.reduce((prev, cur) => prev + getGrade(cur), '');
}

function getGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 50) return 'D';
    return 'F';
}
