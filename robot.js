class Robot {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.direction = "NORTH";
        this.status = "STOPPED";
    }

    moveForward() {
        this.status = "MOVING FORWARD";

        if (this.direction === "NORTH") this.y++;
        else if (this.direction === "SOUTH") this.y--;
        else if (this.direction === "EAST") this.x++;
        else if (this.direction === "WEST") this.x--;

        console.log(`Robot Action: ${this.status}`);
        console.log(`Position: (${this.x}, ${this.y})`);
    }

    moveBackward() {
        this.status = "MOVING BACKWARD";

        if (this.direction === "NORTH") this.y--;
        else if (this.direction === "SOUTH") this.y++;
        else if (this.direction === "EAST") this.x--;
        else if (this.direction === "WEST") this.x++;

        console.log(`Robot Action: ${this.status}`);
        console.log(`Position: (${this.x}, ${this.y})`);
    }

    turnLeft() {
        this.status = "TURNING LEFT";

        const directions = ["NORTH", "WEST", "SOUTH", "EAST"];
        let index = directions.indexOf(this.direction);
        this.direction = directions[(index + 1) % 4];

        console.log(`Robot Action: ${this.status}`);
        console.log(`Direction: ${this.direction}`);
    }

    turnRight() {
        this.status = "TURNING RIGHT";

        const directions = ["NORTH", "EAST", "SOUTH", "WEST"];
        let index = directions.indexOf(this.direction);
        this.direction = directions[(index + 1) % 4];

        console.log(`Robot Action: ${this.status}`);
        console.log(`Direction: ${this.direction}`);
    }

    stop() {
        this.status = "STOPPED";
        console.log(`Robot Action: ${this.status}`);
    }

    receiveCommand(command) {
        console.log(`\nBluetooth Command Received: ${command}`);

        switch (command.toUpperCase()) {
            case "F":
                this.moveForward();
                break;

            case "B":
                this.moveBackward();
                break;

            case "L":
                this.turnLeft();
                break;

            case "R":
                this.turnRight();
                break;

            case "S":
                this.stop();
                break;

            default:
                console.log("Invalid Bluetooth Command");
        }
    }
}

module.exports = Robot;
