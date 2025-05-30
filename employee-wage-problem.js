const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;
const PART_TIME_HOUR = 4;

// UC1: Check Employee Attendance
function checkAttendance() {
    const status = Math.floor(Math.random() * 2); // 0 for absent, 1 for present
    console.log(status === 1 ? "Employee is Present" : "Employee is Absent");
    return status;
}

// UC2: Calculate Daily Employee Wage
function calculateDailyWage(empStatus) {
    if (empStatus === 0) {
        console.log("Employee is Absent. No wage calculated.");
        return 0;
    }
    const wage = WAGE_PER_HOUR * FULL_DAY_HOUR;
    console.log("Full-time Wages:", wage);
    return wage;
}

// UC3: Part-time Wage
function calculatePartTimeWage(empStatus) {
    if (empStatus === 0) {
        console.log("Employee is Absent. No wage calculated.");
        return 0;
    }
    const wage = WAGE_PER_HOUR * PART_TIME_HOUR;
    console.log("Part-time Wages:", wage);
    return wage;
}

// UC4: Switch case display
function displayWage(empStatus, fullTimeWage, partTimeWage) {
    const choice = 2; // hardcoded
    switch (choice) {
        case 1:
            console.log(empStatus === 1 ? "Employee is Present" : "Employee is Absent");
            break;
        case 2:
            console.log("Daily Full-time Wage:", fullTimeWage);
            break;
        case 3:
            console.log("Daily Part-time Wage:", partTimeWage);
            break;
        default:
            console.log("Invalid choice!");
    }
}

console.log("Welcome to Employee Wage Computation Program on Master Branch");
const empStatus = checkAttendance();
const fullTimeWage = calculateDailyWage(empStatus);
const partTimeWage = calculatePartTimeWage(empStatus);
displayWage(empStatus, fullTimeWage, partTimeWage);
