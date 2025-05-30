// UC1: Check Employee Attendance
function checkAttendance() {
    const status = Math.floor(Math.random() * 2); // 0 for absent, 1 for present
    console.log(status === 1 ? "Employee is Present" : "Employee is Absent");
    return status;
}

console.log("Welcome to Employee Wage Computation Program on Master Branch");
checkAttendance();