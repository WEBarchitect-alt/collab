const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 6,
    },

    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    }
});


// Hash Password Before Save
userSchema.pre("save", async function () {

    if (!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 10);

});

const User = mongoose.model("User", userSchema);

module.exports = User;