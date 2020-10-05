//on charge les module express et morgan
const express = require('express');
const logger = require('morgan');
//specification du chemin de l'emplacement des vues

//1. On charge en mémoire le module path
const path =require("path");

const bodyParser = require('body-parser');
const books = require('./books');



const app = express();

//Emplacment des templates que je vais décrire
app.set("views",path.join(__dirname,"views"))

//On demande à express d'utiliser pug  comme moteur de génération de vue !!
app.set("view engine","pug")

app.use(bodyParser.urlencoded({extended: false}));

app.use(logger("dev"));
//On ajoute un middleware
app.use(logger("dev"));
app.use("/static",express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use("/",books);


// On demande au serveur d'écouter sur une URL précise!

app.get("/",(req,res)=>{

    res.redirect("/static/search.html");
});


// On fournit une méthode qui indique où le port doit être écouté!!
app.listen(4242,()=>
{
    console.log("Files server listening on http://127.0.0.1:4242/");
}
);
