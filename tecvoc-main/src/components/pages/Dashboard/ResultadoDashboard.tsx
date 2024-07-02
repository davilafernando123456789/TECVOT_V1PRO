import React, { useEffect, useState } from 'react';
import { useUser } from '../../../context/userContext';
import { jsPDF } from 'jspdf';
import VideosDashboard from './VideosDashboard'; // Asegúrate de que la ruta es correcta

interface Resultado {
    email: string;
    puntuaciones: { [carrera: string]: number };
    resultado: string[];
    fecha: string;
}

const ResultadoDashboard: React.FC = () => {
    const { user } = useUser();
    const [resultados, setResultados] = useState<Resultado[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResultados = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/test/resultados/${user?.email}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setResultados(data);
            } catch (error) {
                console.error('Error fetching results:', error);
            } finally {
                setLoading(false);
            }
        };

        if (user?.email) {
            fetchResultados();
        }
    }, [user?.email]);

    const downloadPDF = () => {
        const doc = new jsPDF();
        let yPosition = 20;

        doc.text("Resultados del Test Vocacional", 20, yPosition);
        yPosition += 10;

        const puntuacionesTotales: { [carrera: string]: number } = {};

        resultados.forEach((resultado) => {
            for (const [carrera, puntuacion] of Object.entries(resultado.puntuaciones)) {
                if (puntuacionesTotales[carrera]) {
                    puntuacionesTotales[carrera] += puntuacion;
                } else {
                    puntuacionesTotales[carrera] = puntuacion;
                }
            }
        });

        const carrerasOrdenadas = Object.entries(puntuacionesTotales).sort((a, b) => b[1] - a[1]);

        doc.text("Carreras sugeridas ordenadas por puntuación:", 20, yPosition);
        yPosition += 10;

        carrerasOrdenadas.forEach(([carrera, puntuacion], index) => {
            doc.text(`${index + 1}. ${carrera} - ${puntuacion}`, 20, yPosition);
            yPosition += 10;
        });

        doc.save("resultados_test_vocacional.pdf");
    };

    if (loading) {
        return <div className="text-center py-10">Cargando...</div>;
    }

    const topCarreras = resultados.map((resultado) => {
        const carreras = Object.entries(resultado.puntuaciones)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 3);
        return { ...resultado, puntuaciones: Object.fromEntries(carreras) };
    });

    const carrerasParaVideos = Object.keys(topCarreras.reduce((acc, resultado) => {
        Object.keys(resultado.puntuaciones).forEach(carrera => {
            acc[carrera] = true;
        });
        return acc;
    }, {}));

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4">Resultados del Test Vocacional</h1>
            <button onClick={downloadPDF} className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
                Descargar PDF
            </button>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Fecha</th>
                            <th className="px-4 py-2">Top 3 Carreras Sugeridas y Puntuaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topCarreras.map((resultado, index) => (
                            <tr key={index} className="bg-gray-100 even:bg-white">
                                <td className="border px-4 py-2">{resultado.email}</td>
                                <td className="border px-4 py-2">{new Date(resultado.fecha).toLocaleString()}</td>
                                <td className="border px-4 py-2">
                                    <ul>
                                        {Object.entries(resultado.puntuaciones).map(([carrera, puntuacion], i) => (
                                            <li key={i}>{carrera} - {puntuacion}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-8">
                <VideosDashboard carreras={carrerasParaVideos} />
            </div>
        </div>
    );
};

export default ResultadoDashboard;
