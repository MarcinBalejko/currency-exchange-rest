const mongoose = require('mongoose');

const CantorSchema = mongoose.Schema({
    gbp: {
        type: Number,
        required: true
    },
    eur: {
        type: Number,
        required: true
    },
    usd: {
        type: Number,
        required: true
    },
    czk: {
        type: Number,
        required: true
    },
    pln: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Cantors', CantorSchema);