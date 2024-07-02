// backend/controllers/preguntaController.js
const Pregunta = require('../models/Pregunta');

exports.createPregunta = async (req, res) => {
    try {
        const pregunta = new Pregunta(req.body);
        await pregunta.save();
        res.status(201).json(pregunta);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getPreguntas = async (req, res) => {
    try {
        const preguntas = await Pregunta.find();
        res.status(200).json(preguntas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPreguntaById = async (req, res) => {
    try {
        const pregunta = await Pregunta.findById(req.params.id);
        if (!pregunta) {
            return res.status(404).json({ message: 'Pregunta no encontrada' });
        }
        res.status(200).json(pregunta);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatePregunta = async (req, res) => {
    try {
        const pregunta = await Pregunta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!pregunta) {
            return res.status(404).json({ message: 'Pregunta no encontrada' });
        }
        res.status(200).json(pregunta);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePregunta = async (req, res) => {
    try {
        const pregunta = await Pregunta.findByIdAndDelete(req.params.id);
        if (!pregunta) {
            return res.status(404).json({ message: 'Pregunta no encontrada' });
        }
        res.status(200).json({ message: 'Pregunta eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
