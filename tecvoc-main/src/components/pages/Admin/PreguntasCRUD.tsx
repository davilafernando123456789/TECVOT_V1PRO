import React, { useState, useEffect } from 'react';
import { IoHelpCircleOutline } from "react-icons/io5";
import TituloSection from "../../ui/TituloSection";
import axios from 'axios';

const PreguntasCRUD = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    texto: '',
    interes: '',
    opciones: [{ texto: '', valor: 0 }]
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPreguntas();
  }, []);

  const fetchPreguntas = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/preguntas');
      setPreguntas(response.data);
    } catch (error) {
      setError('Error al cargar las preguntas');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:3000/api/preguntas/${editingId}`, formData);
      } else {
        await axios.post('http://localhost:3000/api/preguntas', formData);
      }
      fetchPreguntas();
      resetForm();
    } catch (error) {
      setError('Error al guardar la pregunta');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/preguntas/${id}`);
      fetchPreguntas();
    } catch (error) {
      setError('Error al eliminar la pregunta');
    }
  };

  const handleEdit = (pregunta) => {
    setFormData(pregunta);
    setEditingId(pregunta._id);
  };

  const resetForm = () => {
    setFormData({ id: '', texto: '', interes: '', opciones: [{ texto: '', valor: 0 }] });
    setEditingId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOpcionChange = (index, field, value) => {
    const newOpciones = [...formData.opciones];
    newOpciones[index][field] = value;
    setFormData({ ...formData, opciones: newOpciones });
  };

  const addOpcion = () => {
    setFormData({
      ...formData,
      opciones: [...formData.opciones, { texto: '', valor: 0 }]
    });
  };

  const removeOpcion = (index) => {
    const newOpciones = formData.opciones.filter((_, i) => i !== index);
    setFormData({ ...formData, opciones: newOpciones });
  };

  return (
    <div className="container mx-auto px-4">
      <TituloSection
        icon={<IoHelpCircleOutline size={32} />}
        label='Gestión de Preguntas'
      />

      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{error}</div>}

      <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-sm font-medium text-gray-700">ID</label>
          <input type="number" name="id" value={formData.id} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Texto</label>
          <input type="text" name="texto" value={formData.texto} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Interés</label>
          <input type="number" name="interes" value={formData.interes} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Opciones</label>
          {formData.opciones.map((opcion, index) => (
            <div key={index} className="flex space-x-2 mt-2">
              <input
                type="text"
                value={opcion.texto}
                onChange={(e) => handleOpcionChange(index, 'texto', e.target.value)}
                placeholder="Texto de la opción"
                className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <input
                type="number"
                value={opcion.valor}
                onChange={(e) => handleOpcionChange(index, 'valor', e.target.value)}
                placeholder="Valor"
                className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <button type="button" onClick={() => removeOpcion(index)} className="px-2 py-1 bg-red-500 text-white rounded">
                Eliminar
              </button>
            </div>
          ))}
          <button type="button" onClick={addOpcion} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
            Añadir Opción
          </button>
        </div>

        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {editingId ? 'Actualizar Pregunta' : 'Crear Pregunta'}
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lista de Preguntas</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Texto</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interés</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {preguntas.map((pregunta) => (
                <tr key={pregunta._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{pregunta.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{pregunta.texto}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{pregunta.interes}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button onClick={() => handleEdit(pregunta)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                      Editar
                    </button>
                    <button onClick={() => handleDelete(pregunta._id)} className="text-red-600 hover:text-red-900">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PreguntasCRUD;