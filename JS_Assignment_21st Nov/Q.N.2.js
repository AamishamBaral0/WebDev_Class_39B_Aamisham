const calculateAverage = (mathMarks, scienceMarks, computerMarks) => {
    const totalMarks = mathMarks + scienceMarks + computerMarks;
    return totalMarks / 3;
};
const getDivision = (averageMarks) => {
    if (averageMarks >= 70) {
        return "First Division";
    } else if (averageMarks >= 60) {
        return "Second Division";
    } else if (averageMarks >= 50) {
        return "Third Division";
    } else {
        return "Fail";
    }
};
const processStudentResult = (mathMarks, scienceMarks, computerMarks) => {
    const averageMarks = calculateAverage(
        mathMarks,
        scienceMarks,
        computerMarks
    );

    return getDivision(averageMarks);
};
const processResult = (
    studentName,
    mathMarks,
    scienceMarks,
    computerMarks,
    callback
) => {
    const averageMarks = calculateAverage(
        mathMarks,
        scienceMarks,
        computerMarks
    );

    const division = callback(
        mathMarks,
        scienceMarks,
        computerMarks
    );

    console.log("Student:", studentName);
    console.log("Average:", averageMarks);
    console.log("Division:", division);
};
processResult("Sita", 80, 70, 75, processStudentResult);