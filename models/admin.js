const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema(
    {
     
        nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    motDePasse: {
        type: String,
        required: true
    }
    }
);
const Admin = mongoose.model('admin', AdminSchema);

module.exports = { Admin };