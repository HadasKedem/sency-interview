const Practice = require('./Practice');



let matrix = {
    Upper: {Power : 2 , Control:4 , Flexibility:4 , Speed: 3, level:1, overall: 13} ,
    Lower: {Power : 4 , Control:1 , Flexibility:3 , Speed: 1, level:1, overall: 9} ,
    Back:{Power : 4 , Control:2 , Flexibility:4 , Speed: 5, level:1, overall: 15} ,
    Core:{Power : 3 , Control:2 , Flexibility:5 , Speed: 3, level:1, overall: 13} ,
    Brain:{Power : 4 , Control:1 , Flexibility:3 , Speed: 4, level:1, overall: 12} 
}

Practice.getNextPractice(matrix)