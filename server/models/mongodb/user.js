const mongoose = require('mongoose');
const { Schema } = mongoose;

userSchema = new Schema({
  googleId: {
    type: String,
    required: true
  },
  accessToken: String,
  refreshToken: String
});

mongoose.model('users', userSchema);
