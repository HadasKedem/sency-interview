const Practice = require('./Practice');
const Assessment = require('./Assessment')



let matrix = {
    Upper: {Power : 2 , Control:4 , Flexibility:4 , Speed: 3, level:1, overall: 13} ,
    Lower: {Power : 4 , Control:1 , Flexibility:3 , Speed: 1, level:1, overall: 9} ,
    Back:  {Power : 4 , Control:2 , Flexibility:4 , Speed: 5, level:1, overall: 15} ,
    Core:  {Power : 3 , Control:2 , Flexibility:5 , Speed: 3, level:1, overall: 13} ,
    Brain: {Power : 4 , Control:1 , Flexibility:3 , Speed: 4, level:1, overall: 12} 
}

let matrix2 = {
    Upper: {Power : 3 , Control:4 , Flexibility:4 , Speed: 3, level:1, overall: 14} ,
    Lower: {Power : 4 , Control:2 , Flexibility:3 , Speed: 2, level:1, overall: 11} ,
    Back:  {Power : 4 , Control:3 , Flexibility:4 , Speed: 5, level:1, overall: 16} ,
    Core:  {Power : 3 , Control:2 , Flexibility:5 , Speed: 3, level:1, overall: 13} ,
    Brain: {Power : 4 , Control:2 , Flexibility:3 , Speed: 4, level:1, overall: 13} 
}


// console.log(Practice.getNextPractice(matrix))

Assessment.getNextLevelAssessment(matrix)