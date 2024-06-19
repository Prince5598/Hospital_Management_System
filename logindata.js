const mongoose = require("mongoose");
const Logindb = require("./Model/loginDb");

mongoose.connect('mongodb://127.0.0.1:27017/LoginDB');

Logindb.insertMany([
    {
        email: "princepatel5598@gmail.com",
        username: "Prince_123",
        password: "Prince",
        appointments: [{
            name: "Prince",
            Address: "46,47 be umiyapark Society",
            contact : 8488039383,
            Age: 18,
            doctor: "Dr.Prince Patel",
            appointmentDate: new Date(),
            appointmentTime: "12:00",
        }
        ]
    },
])
