const os = require ('os')
const bodyparser = require('body-parser');
const express = require('express');
const { mongoose } = require('../db/config');
const { Todo } = require('../models/todo');

let todo = express();
todo.use(bodyparser.json());

todo.get("/", (req, res) => {
    res.send('welcome to todo controller');
});
todo.post("/ajouter-todo", (req, res) => {
    res.status(200).send("reponsive from /inscription");
    let data = req.body;

    let todo = new Todo({
        titre: data._nom,
        discription: data._discription,
        dateAjout: data._dateAjout,
        dateFin : data._dateFin,
        etat : data._etat,
        idUser : data._idUser



    });
    let t = [];
    let d=[];
    for (let i =0 ; i< this.length(todo);i++ ){
        if(t[i]._etat == false ) {
            todo[i]=t[i];
        }
        if(t[i]._etat == true){
            d[i]=t[i];
   }
    }
    todo.save().then((u) => {
        res.status(200).send({ message: "todo inserted !" })
    }).catch((e) => {
        res.status(400).send({ message: "ERROR : " + e })
    })
});
todo.put("/modif-todo", (req, res) => {
    res.status(200).send("reponsive from /modif-todo");
    let data = req.body;

    let todo = new Todo({
        titre: data._nom,
        discription: data._discription,
        dateAjout: data._dateAjout,
        dateFin : data._dateFin,
        etat : data._etat,
        idUser : data._idUser
    });
    todo.updateOne().then((u) => {
        res.status(200).send({ message: "todo deleted !" })
    }).catch((e) => {
        res.status(400).send({ message: "ERROR : " + e })
    })
});
todo.delete("/supprimer-todo", (req, res) => {

    let data = req.body;

    let todo = new Todo({
        titre: data._nom,
        discription: data._discription,
        dateAjout: data._dateAjout,
        dateFin : data._dateFin,
        etat : data._etat,
        idUser : data._idUser

    });
    todo.delete().then((u) => {
        res.status(200).send({ message: "todo deleted !" })
    }).catch((e) => {
        res.status(400).send({ message: "ERROR : " + e })
    })
});

todo.get("/lister-todo", (req, res) => {
    res.status(200).send("reponsive from /lister-todo");
    let data = req.body;
    let todo = new Todo({
        titre: data._nom,
        discription: data._discription,
        dateAjout: data._dateAjout,
        dateFin : data._dateFin,
        etat : data._etat,
        idUser : data._idUser
    });
    todo.findOne().then((u) => {
        res.status(200).send({ message: "todo selected!" })
    }).catch((e) => {
        res.status(400).send({ message: "ERROR : " + e })
    })
});

todo.get("/lister-dones", (req, res) => {
    res.status(200).send("reponsive from /lister-dones");

    let data = req.body;
    let todo = new Todo({
        titre: data._nom,
        discription: data._discription,
        dateAjout: data._dateAjout,
        dateFin : data._dateFin,
        etat : data._etat,
        idUser : data._idUser
    });
    todo.findOne().then((u) => {
        res.status(200).send({ message: "dones selected!" })
    }).catch((e) => {
        res.status(400).send({ message: "ERROR : " + e })
    })

});
todo.delete("/supprimer-dones", (req, res) => {
    let data = req.body;
    let todo = new Todo({
        titre: data._nom,
        discription: data._discription,
        dateAjout: data._dateAjout,
        dateFin : data._dateFin,
        etat : data._etat,
        idUser : data._idUser
    });
    todo.deleteOne().then((u) => {
        res.status(200).send({ message: "dones deleted !" })
    }).catch((e) => {
        res.status(400).send({ message: "ERROR : " + e })
    })
});




module.exports = todo ;