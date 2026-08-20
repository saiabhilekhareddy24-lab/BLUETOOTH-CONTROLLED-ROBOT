const Robot = require("./robot");

function test(name, condition) {
    if (condition) {
        console.log(`PASS: ${name}`);
    } else {
        console.log(`FAIL: ${name}`);
    }
}

console.log("=== Bluetooth Robot Testbench ===\n");

// Test 1: Forward
let robot = new Robot();
robot.receiveCommand("F");
test(
    "Robot moves forward",
    robot.x === 0 && robot.y === 1
);

// Test 2: Backward
robot = new Robot();
robot.receiveCommand("B");
test(
    "Robot moves backward",
    robot.x === 0 && robot.y === -1
);

// Test 3: Right turn
robot = new Robot();
robot.receiveCommand("R");
test(
    "Robot turns right",
    robot.direction === "EAST"
);

// Test 4: Left turn
robot = new Robot();
robot.receiveCommand("L");
test(
    "Robot turns left",
    robot.direction === "WEST"
);

// Test 5: Stop
robot = new Robot();
robot.receiveCommand("S");
test(
    "Robot stops",
    robot.status === "STOPPED"
);

// Test 6: Invalid command
robot = new Robot();
robot.receiveCommand("X");
test(
    "Invalid command does not move robot",
    robot.x === 0 && robot.y === 0
);

console.log("\n=== Testbench Completed ===");
