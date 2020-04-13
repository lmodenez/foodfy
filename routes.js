const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/recipes')
const users = require('./controllers/users')

//ROUTERS FOR USERS
routes.get('/', users.index)
routes.get('/sobre', function(req, res) {
  return res.render('users/sobre')
})
routes.get('/receitas', users.list)
routes.get('/recipe/:id', users.show); // Exibir detalhes de uma receita

//ROUTERS FOR ADMIN
routes.get('/admin', (req, res) => res.redirect('/admin/recipes'))
routes.get("/admin/recipes", recipes.index) // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show) // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

// routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
// routes.put("/admin/recipes", recipes.put); // Editar uma receita
// routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

module.exports = routes