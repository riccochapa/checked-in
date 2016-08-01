var mongoose = require("mongoose");

  var emergencyContactsSchema = new mongoose.Schema({
    contact: [{
      name: {type: String, required: true},
      phone: {type: String, required: true},
      email: {type: String},
    }],
  });

module.exports = mongoose.model('EmergencyContacts', emergencyContactsSchema);
