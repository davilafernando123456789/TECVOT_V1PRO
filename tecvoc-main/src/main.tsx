import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import Landing from "./components/pages/Landing";
import Dashboard from "./components/layouts/Dashboard";
import InicioDashboard from "./components/pages/Dashboard/InicioDashboard";
import TestDashboard from "./components/pages/Dashboard/TestDashboard";
import ResultadoDashboard from "./components/pages/Dashboard/ResultadoDashboard";
import VideosDashboard from "./components/pages/Dashboard/VideosDashboard";
import UserRegister from "./components/pages/Register/UserRegister";
import Login from "./components/pages/Login/Login";
import ResultadosObtenidos from "./components/ResultadosObtenidos";
import Nosotros from './components/pages/Nosotros';  
import Instrucciones from './components/pages/Instrucciones';  
import PreguntasCRUD from "./components/pages/Admin/PreguntasCRUD";
import ResultadosCRUD from "./components/pages/Admin/ResultadosCRUD";
import UsersCRUD from "./components/pages/Admin/UsersCrud";

ReactDOM.createRoot(document.getElementById("cintia")!).render(
<React.StrictMode>
	<UserProvider>
	<BrowserRouter>
		<Routes>
		<Route path='/' element={<Landing />} />
		<Route path='/login' element={<Login />} />
		<Route path='/register' element={<UserRegister />} />
		<Route path="/nosotros" element={<Nosotros />} /> 
				<Route path="/instrucciones" element={<Instrucciones />} />  
		<Route path='/dashboard/*' element={<Dashboard />}>
			<Route index element={<InicioDashboard />} />
			<Route path='test' element={<TestDashboard />} />
			<Route path='resultados' element={<ResultadoDashboard />} />
			<Route path='videos' element={<VideosDashboard carreras={[]} />} />
			<Route path="resultados-obtenidos" element={<ResultadosObtenidos />} />
			<Route path='preguntas' element={<PreguntasCRUD />} />
			<Route path='usuarios' element={<UsersCRUD />} />
			<Route path='resultadosObtenidos' element={<ResultadosCRUD />} />
		</Route>
		</Routes>
	</BrowserRouter>
	</UserProvider>
</React.StrictMode>
);
