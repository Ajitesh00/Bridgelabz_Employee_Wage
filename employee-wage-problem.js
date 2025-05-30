const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;

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

console.log("Welcome to Employee Wage Computation Program on Master Branch");
const empStatus = checkAttendance();
calculateDailyWage(empStatus);
