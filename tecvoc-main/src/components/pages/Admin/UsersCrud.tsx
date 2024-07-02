import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import TituloSection from "../../ui/TituloSection";
import axios from 'axios';

interface User {
  _id: string;
  email: string;
  role: string;
  name: string;
  surname: string;
  age: number;
  educationLevel: string;
  acceptTerms: boolean;
}

const UsersCRUD = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState<Omit<User, '_id' | 'password'>>({
    email: '',
    role: 'user',
    name: '',
    surname: '',
    age: 0,
    educationLevel: '',
    acceptTerms: false
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/users');
      if (Array.isArray(response.data)) {
        setUsers(response.data);
      } else {
        throw new Error('La respuesta de la API no es una lista de usuarios');
      }
    } catch (error: any) {
      setError(error.message || 'Error al cargar los usuarios');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (editingId) {
      try {
        await axios.put(`http://localhost:3000/api/users/${editingId}`, formData);
        fetchUsers();
        resetForm();
      } catch (error: any) {
        setError('Error al guardar el usuario: ' + error.message);
      }
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${id}`);
      fetchUsers();
    } catch (error: any) {
      setError('Error al eliminar el usuario: ' + error.message);
    }
  };

  const handleEdit = (user: User) => {
    setFormData({
      email: user.email,
      role: user.role,
      name: user.name,
      surname: user.surname,
      age: user.age,
      educationLevel: user.educationLevel,
      acceptTerms: user.acceptTerms
    });
    setEditingId(user._id);
  };

  const resetForm = () => {
    setFormData({
      email: '',
      role: 'user',
      name: '',
      surname: '',
      age: 0,
      educationLevel: '',
      acceptTerms: false
    });
    setEditingId(null);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="container mx-auto px-4">
      <TituloSection
        icon={<IoPersonCircleOutline size={32} />}
        label='Gestión de Usuarios'
      />

      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{error}</div>}

      {editingId && (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-6 rounded-lg shadow-md">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Rol</label>
            <select name="role" value={formData.role} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option value="user">Usuario</option>
              <option value="admin">Administrador</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Apellido</label>
            <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Edad</label>
            <input type="number" name="age" value={formData.age} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Nivel de Educación</label>
            <input type="text" name="educationLevel" value={formData.educationLevel} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
          </div>

          <div className="flex items-center">
            <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleInputChange} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" required />
            <label className="ml-2 block text-sm text-gray-900">
              Acepto los términos y condiciones
            </label>
          </div>

          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Actualizar Usuario
          </button>
        </form>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lista de Usuarios</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edad</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nivel de Educación</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.surname}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.educationLevel}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button onClick={() => handleEdit(user)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                      Editar
                    </button>
                    <button onClick={() => handleDelete(user._id)} className="text-red-600 hover:text-red-900">
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

export default UsersCRUD;
