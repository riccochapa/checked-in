var mongoose = require("mongoose");

  var emergencyContactsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String}
  });



module.exports = mongoose.model('Course', CourseSchema);
