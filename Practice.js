

getNextPractice = (matrix) => {

    let minimumValue = 6
    let minimumList = []

    for (var bodyPart in matrix) {
        for (var practiceType in matrix[bodyPart]) {
            if (practiceType === "level" || practiceType === "overall") {
                continue;
            } else if (matrix[bodyPart][practiceType] < minimumValue) {
                minimumValue = matrix[bodyPart][practiceType]
                minimumList = []
                let tmp = {
                    [bodyPart]: practiceType
                }
                minimumList.push(tmp)
            } else if (matrix[bodyPart][practiceType] == minimumValue) {
                let tmp = {
                    [bodyPart]: practiceType
                }
                minimumList.push(tmp)
            }
        }
    }
    // console.log(minimumList)
    return minimumList[0]
}


module.exports = {
    getNextPractice
}