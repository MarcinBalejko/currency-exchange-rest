const express = require('express');
const router = express.Router();
const Cantor = require('../models/Cantor');


// ROUTES
// GETS BACK ALL THE CANTORS

router.get('/', async (req, res) => {
    try {
        const cantors = await Cantor.find();
        res.json(cantors);
    } catch (err) {
        res.json({ message: err });
    }
});


// SUBMITS A CANTOR
router.post('/', async (req, res) => {
    const cantor = new Cantor({
        gbp: req.body.gbp,
        eur: req.body.eur,
        usd: req.body.usd,
        czk: req.body.czk,
        pln: req.body.pln
    });
    try {
        const savedCantor = await cantor.save();
        res.json(savedCantor);
    } catch (err) {
        res.json({ message: err });
    }
});

// GETS BACK A SPECIFIC CANTOR
router.get('/:cantorId', async (req, res) => {
    try {
        const cantor = await Cantor.findById(req.params.cantorId);
        res.json(cantor);
    } catch (err) {
        res.json({ message: err });
    }
});

// DELETE A SPECIFIC CANTOR
router.delete('/:cantorId', async (req, res) => {
    try {
        const removedCantor = await Cantor.remove({ _id: req.params.cantorId });
        res.json(removedCantor);
    } catch (err) {
        res.json({ message: err });
    }
});

// UPDATE CANTOR'S INFORMATION
router.patch('/:cantorId', async (req, res) => {
    try {
        const updatedCantor = await Cantor.updateOne(
            { _id: req.params.cantorId },
            {
                $set: {
                    gbp: req.body.gbp,
                    eur: req.body.eur,
                    usd: req.body.usd,
                    czk: req.body.czk,
                    pln: req.body.pln
                },
            }
        );
        res.json(updatedCantor);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;