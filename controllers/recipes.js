const fs = require('fs')
const data = require('../data.json')
const Intl = require('intl')
//const { age, date } = require("../utils")

exports.index = function(req, res){
  return res.render("admin/recipes/manager", { items: data.recipes })
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

  
  return res.render('admin/recipes/details', { recipe })
}

exports.create = function(req,res){
  return res.render('admin/recipes/create')
}

exports.edit = function(req,res){
  const { id } = req.params

  const foundRecipe = data.recipes.find(function(recipe){
    return id == recipe.id
  })

  if (!foundRecipe) return res.send("Recipe not found!")

  const recipe = {
    ...foundRecipe
  }

  return res.render('admin/recipes/edit', { recipe })
}