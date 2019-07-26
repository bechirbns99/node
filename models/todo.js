const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
    {
        titre: {
            type: String,
            required: true
        },
        discription: {
            type: String,
            required: true
        },
        dateAjout: {
            type: String,
            required: true,
        },
        dateFin: {
            type: String,
            required: true
        },
        etat: {
            type: Boolean,
            required: true,
            default: false
        }, 
        idUser: {
            type: String,
            required: true
        }
    }
);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = { Todo };