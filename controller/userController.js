const bodyparser = require('body-parser');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { mongoose } = require('../db/config');
let userws = express();

const { User } = require('../models/user');

userws.use(bodyparser.json());

userws.get("/", (req, res) => {
    res.send('welcome to user controller');
});

userws.post("/inscritption", (req, res) => {
    let data = req.body;
    let privateKey = 10;
    let hashedPassword = bcrypt.hashSync(data._motDePasse, privateKey);
    let user = new User({
        nom: data._nom,
        prenom: data._prenom,
        email: data._email,
        telephone: data._telephone,
        motDePasse: hashedPassword,
        role: "user"
    });

    user.save().then((u) => {
        res.status(200).send({ message: "user inserted !" })

    }).catch((e) => {
        res.status(400).send({ message: "ERROR : " + e })
    })




});
userws.post("/connexion", (req, res) => {
    let email = req.body._email;
    let motDePasse = req.body._motDePasse;

    User.findOne({ email }).then((user) => {
        if (!user) { res.status(400).send({ message: 'email incorrect' }) }

        let valide = bcrypt.compareSync(motDePasse, user.motDePasse);
        if (!valide) { res.status(400).send({ message: e }) }
        res.status(200).send(user);

        let token = jwt.sign({ _id: user, _role: user.role }, 'bechir').toString();
        res.status(200).send({ token });
    }).catch((e) => {
        res.status(400).send({ message: "ERROR : " + e });
    })

});

module.exports = userws;