const express = require('express')
const mongoose = require('mongoose');
const dotEnv = require('dotenv')

dotEnv.config();

const app = express();
const Projet = require('./models/projets')

mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.post('/api/projet', (req, res, next) => {
    delete req.body._id;
    const projet = new Projet({
        ...req.body
    })
    projet.save()
    .then(()=> res.status(201).json({message: 'Objet enregistré'}))
    .catch(err => res.status(400).json({err}))
})

app.get('/api/projet', (req, res, next) => {
    Projet.find().sort({ _id: -1 })
    .then(projets => res.status(200).json(projets))
    .catch(err => res.status(400).json({err}))
  });

module.exports = app