const Robot = require("./robot");

const robot = new Robot();

console.log("=== Bluetooth Robot Simulation ===");

const bluetoothCommands = [
    "F",
    "R",
    "F",
    "L",
    "B",
    "S"
];

bluetoothCommands.forEach(command => {
    robot.receiveCommand(command);
});

console.log("\n=== Simulation Completed ===");
console.log(`Final Position: (${robot.x}, ${robot.y})`);
console.log(`Final Direction: ${robot.direction}`);
console.log(`Final Status: ${robot.status}`);
