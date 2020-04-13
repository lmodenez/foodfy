const fs = require('fs')
const data = require('../data.json')
const Intl = require('intl')
//const { age, date } = require("../utils")

exports.index = function(req, res){
  const banner = {
      title: "As melhores receitas",
      subtitle: "Aprenda a construir os melhores pratos com receitas criadas por profissionais do mundo inteiro."
  }
  return res.render("users/home", { items: data.recipes, banner })
}

exports.list = function(req,res){
  return res.render("users/receitas", { items: data.recipes })
}

exports.show = function (req,res){
  const { id } = req.params

  const foundRecipe = data.recipes.find(function(recipe){
    return id == recipe.id
  })

  if (!foundRecipe) return res.send("Recipe not found!")

  const recipe = {
    ...foundRecipe
  }
  return res.render("users/recipe", { recipe })
}