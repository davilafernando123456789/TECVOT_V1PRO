import React, { useState, useEffect } from 'react';
import { IoStatsChartOutline } from "react-icons/io5";
import TituloSection from "../../ui/TituloSection";
import axios from 'axios';

const ResultadosCRUD = () => {
  const [resultados, setResultados] = useState([]);
  const [formData, setFormData] = useState({
    email: '',
    puntuaciones: {},
    resultado: [],
    fecha: new Date().toISOString().split('T')[0]
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchResultados();
  }, []);

  const fetchResultados = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/resultados');
      setResultados(response.data);
    } catch (error) {
      setError('Error al cargar los resultados');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/resultados/${editingId}`, formData);
      fetchResultados();
      resetForm();
    } catch (error) {
      setError('Error al guardar el resultado');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/resultados/${id}`);
      fetchResultados();
    } catch (error) {
      setError('Error al eliminar el resultado');
    }
  };

  const handleEdit = (resultado) => {
    setFormData({
      ...resultado,
      fecha: new Date(resultado.fecha).toISOString().split('T')[0]
    });
    setEditingId(resultado._id);
  };

  const resetForm = () => {
    setFormData({
      email: '',
      puntuaciones: {},
      resultado: [],
      fecha: new Date().toISOString().split('T')[0]
    });
    setEditingId(null);
  };

  return (
    <div className="container mx-auto px-4">
      <TituloSection
        icon={<IoStatsChartOutline size={32} />}
        label='Gestión de Resultados'
      />

      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{error}</div>}

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lista de Resultados</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Puntuaciones</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resultado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {resultados.map((resultado) => (
                <tr key={resultado._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{resultado.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {Object.entries(resultado.puntuaciones).map(([key, value]) => (
                      <div key={key}>{`${key}: ${value}`}</div>
                    ))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{resultado.resultado.join(', ')}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{new Date(resultado.fecha).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button onClick={() => handleEdit(resultado)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                      Editar
                    </button>
                    <button onClick={() => handleDelete(resultado._id)} className="text-red-600 hover:text-red-900">
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

export default ResultadosCRUD;
