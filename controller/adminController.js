const bodyparser = require('body-parser');
const express = require('express');
const { mongoose } = require('../db/config');
const { Admin } = require('../models/admin');

let adminws = express();
adminws.use(bodyparser.json());

adminws.get("/", (req, res) => {
    res.send('welcome to admin controller');
});

adminws.post("/inscritption", (req, res) => {

    let data = req.body;

    let admin = new Admin({
        nom: data._nom,
        prenom: data._prenom,
        email: data._email,
        telephone: data._telephone,
        motDePasse: data._motDePasse
    });
    admin.save().then((u) => {
        res.status(200).send({ message: "admin inserted !" })
    }).catch((e) => {
        res.status(400).send({ message: "ERROR : " + e })
    })
});
adminws.post("/connexion", (req, res) => {
    res.status(200).send("reponsive from /connexion admin");
});
adminws.put("/activer-user", (req, res) => {
    res.status(200).send("reponsive from /activer-user");
});

adminws.put("/désactiver-user", (req, res) => {
    res.status(200).send("reponsive from /désactiver-user");
});
adminws.get("/lister-user", (req, res) => {
    res.status(200).send("reponsive from /lister-user");
    let data = req.body;
    let admin = new Admin({
        nom: data._nom,
        email: data._email
    });
    admin.findOne().then((u) => {
        res.status(200).send({ message: "admin deleted !" })
    }).catch((e) => {
        res.status(400).send({ message: "ERROR : " + e })
    })

});
adminws.delete("/supprimer-user", (req, res) => {
    let data = req.body;
    let admin = new Admin({
        nom: data._nom,
        email: data._email
    });
    admin.deleteOne().then((u) => {
        res.status(200).send({ message: "admin deleted !" })
    }).catch((e) => {
        res.status(400).send({ message: "ERROR : " + e })
    })

});

module.exports = adminws;