const Practice = require('./Practice');



getNextLevelAssessment = (matrix) => {
    let bodyPartList = []
    let lessThen3List = []
    let numberOfDays = 0

    while (bodyPartList.length === 0) {
        // getting every cell of overall >= 15
        for (var bodyPart in matrix) {
            if (matrix[bodyPart].overall >= 15) {
                bodyPartList.push(bodyPart)
            }
        }

        // checking if the bodypart has any cells less then 3, then stores them to remove later
        if (bodyPartList.length > 0) {
            for (var bodyPart2 in bodyPartList) {
                for (var trainType in matrix[bodyPartList[bodyPart2]]) {
                    // console.log(trainType)
                    if (matrix[bodyPartList[bodyPart2]][trainType] < 3 &&
                        trainType !== "level" &&
                        trainType !== "overall") {
                        if (lessThen3List.find(element => element === bodyPart2)) {
                            continue
                        } else {
                            lessThen3List.push(bodyPart2)
                        }
                    }
                }
            }
        }
        // console.log(bodyPartList)

        // clearing the "less then 3" in the bodypart list 
        for (var i in lessThen3List) {
            bodyPartList.pop(i)
        }

        // console.log(bodyPartList)

        // get the next practice, update the matrix and try again to find test
        let practice = Practice.getNextPractice(matrix)
        console.log(practice)
        matrix[Object.keys(practice)[0]][ practice[Object.keys(practice)[0]] ] +=1
        matrix[Object.keys(practice)[0]]["overall"] +=1
        // console.log(matrix)
    }
    console.log(bodyPartList)
}




module.exports = {
    getNextLevelAssessment
}