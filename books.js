const express = require("express");
const rout = express.Router();


const livres = [  {author:"Guillaume Debré	",title:"L'affaire Lafayette	",category:"roman historique"},
                    {author:"Gérald Messadié	",title:"La conspiration Jeanne d'Arc	",category:"roman historique "},
                    {author:"J.R.R. Tolkien	",title:"Le Seigneur des anneaux	",category:"fantasy"},
                    {author:"Michael Ende	",title:"L'Histoire sans fin	",category:"fantasy"},
                    {author:"Andrzej Sapkowski	",title:"Le Sorceleur	",category:"fantasy"},
                    {author:"George R. R. Martin	",title:"Le Trône de fer	",category:"fantasy"},
                    {author:"Hervé Bazin	",title:"Vipère au poing	",category:"autobiographie"},
                    {author:"Marie Cardinal	",title:"Les mots pour le dire	",category:"autobiographie"},
                    {author:"Giacomo Casanova	",title:"Histoire de ma vie	",category:"autobiographie"},
                    {author:"Zaidi Abdelilah",title:"L'art de la manipulation",category:"psychologie"},

                ];

rout.get("/",(req,res) =>{
  res.redirect("/static/search.html");
});

rout.post("/books/listes", (req,res) => {
  const categoryByName = req.body.selection;
  let list = [];
  livres.forEach(function(element){
    if(element.category === categoryByName){
      list.push({author:element.author , title:element.title , category:element.category});
    }
  });

  res.render("index",{
    list: list,
    categoryNom: categoryByName
  });
});

module.exports = rout;
