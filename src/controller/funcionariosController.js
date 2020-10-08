const funcionarios = require('../models/funcionarios.json');
const fs = require('fs');

////Lista com todos os funcionários:
const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(funcionarios);
};

const getById = (req, res) => {
    const id = req.params.id;
  
    res.status(200).send(funcionarios.find((funcionario) => funcionario.id == id));
  };

////Cadastro de novos funcionários:
const postFuncionarios = (req, res) => {
    console.log(req.body)
    const { id, name, position, age, accessToTheSystem } = req.body;
    funcionarios.push({ id, name, position, age, accessToTheSystem });
  
    fs.writeFile("./src/models/funcionarios.json", JSON.stringify(funcionarios), 'utf8', function(err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Arquivo atualizado com sucesso!");
    });
  
    res.status(201).send(funcionarios)
  };

module.exports = { getAll, getById, postFuncionarios }