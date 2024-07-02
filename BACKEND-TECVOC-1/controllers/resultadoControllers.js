// backend/controllers/resultadoController.js

const Resultado = require('../models/Resultado');

exports.createResultado = async (req, res) => {
    try {
        const resultado = new Resultado(req.body);
        await resultado.save();
        res.status(201).json(resultado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getResultados = async (req, res) => {
    try {
        const resultados = await Resultado.find();
        res.status(200).json(resultados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getResultadoById = async (req, res) => {
    try {
        const resultado = await Resultado.findById(req.params.id);
        if (!resultado) {
            return res.status(404).json({ message: 'Resultado no encontrado' });
        }
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateResultado = async (req, res) => {
    try {
        const resultado = await Resultado.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!resultado) {
            return res.status(404).json({ message: 'Resultado no encontrado' });
        }
        res.status(200).json(resultado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteResultado = async (req, res) => {
    try {
        const resultado = await Resultado.findByIdAndDelete(req.params.id);
        if (!resultado) {
            return res.status(404).json({ message: 'Resultado no encontrado' });
        }
        res.status(200).json({ message: 'Resultado eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
