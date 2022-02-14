const express = require('express');
const router = express.Router();



router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Ursula will rule the world'
    })
})

router.post('/', (req, res, next) => {
    const score = {
        fatorDeRisco: req.body.fator,
        doencasAgrupadas: req.body.doencas
    };

    res.status(201).send({
        mensagem: 'Usando o post no score deu certo',
        score: score
    })
})

module.exports = router;