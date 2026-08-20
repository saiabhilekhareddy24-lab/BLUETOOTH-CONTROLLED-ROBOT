Bluetooth Controlled Robot 🤖📱

A Bluetooth-controlled robot that can be operated wirelessly using a smartphone or Bluetooth-enabled device. The robot receives movement commands such as Forward, Backward, Left, Right, and Stop and controls its motors accordingly.

Features
📱 Bluetooth-based wireless control
🤖 Forward and backward movement
↪️ Left and right movement
🛑 Stop control
🧪 JavaScript simulation and testbench
💻 Easy to understand and modify
Project Structure
bluetooth-controlled-robot/
├── README.md
├── robot.js
├── testbench.js
├── simulation.js
└── package.json

Commands
Command	Action
F	Move Forward
B	Move Backward
L	Turn Left
R	Turn Right
S	Stop
How to Run

Make sure Node.js is installed.

node simulation.js


Run the automated tests:

node testbench.js

Example Simulation Output
=== Bluetooth Robot Simulation ===

Bluetooth Command Received: F
Robot Action: Moving Forward
Position: (0, 1)

Bluetooth Command Received: R
Robot Action: Turning Right
Position: (1, 1)

Bluetooth Command Received: F
Robot Action: Moving Forward
Position: (1, 2)

Bluetooth Command Received: L
Robot Action: Turning Left
Position: (1, 2)

Bluetooth Command Received: B
Robot Action: Moving Backward
Position: (1, 1)

Bluetooth Command Received: S
Robot Action: Stopped

=== Simulation Completed ===

Technologies Used
JavaScript
Node.js
Bluetooth communication concept
Robotics and motor-control logic
Future Improvements
Add real Bluetooth hardware communication
Add ultrasonic obstacle detection
Add speed control
Create a mobile application
Add autonomous navigation
Author

Bluetooth Controlled Robot Project
