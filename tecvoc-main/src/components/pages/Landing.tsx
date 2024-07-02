import React from 'react';
import '../../App.css'; 

const Landing = () => {
    return (
        <>

              {/* Navbar Start */}
			  <div className="container-fluid bg-light position-relative shadow">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
          <a href="/" className="navbar-brand font-weight-bold text-secondary" style={{ fontSize: '50px' }}>
            <img src="public/images/logo.png" alt="Logo" style={{ height: '50px' }} />
          </a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav font-weight-bold mx-auto py-0">
              <a href="/" className="nav-item nav-link ">Inicio</a>
              <a href="/nosotros" className="nav-item nav-link">¿Qué es Tecvoc?</a>
              <a href="/instrucciones" className="nav-item nav-link">Instrucciones</a>
            </div>
			<a href="/login" className="btn btn-primary px-3 py-2">Iniciar Sesión</a>
          </div>
        </nav>
      </div>
            {/* Navbar End */}

                {/* Header Start */}
                <div className="container-fluid bg-primary px-0 px-md-5 mb-5">
    <div className="row align-items-center px-3">
        <div className="col-lg-6 text-center text-lg-left">
            <h4 className="text-white mb-4 mt-5 mt-lg-0">Tu Guía Vocacional</h4>
            <h1 className="display-3 font-weight-bold text-white">Descubre Tu Futuro en Tecnología</h1>
            <p className="text-white mb-4">
                Tecvoc te ayuda a explorar tus intereses y habilidades en el mundo de la tecnología.
                Nuestro test vocacional está diseñado específicamente para carreras tecnológicas,
                ayudándote a identificar las áreas donde puedes destacar y crecer profesionalmente.
            </p>
            <a href="/login" className="btn btn-secondary mt-1 py-3 px-5">Iniciar Test</a>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
            <img className="img-fluid mt-5" src="img/header4.png" alt="Estudiante usando computadora" />
        </div>
    </div>
</div>
                {/* Header End */}

            

                {/* About Start */}
                <div className="container-fluid py-5">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-5">
                <img className="img-fluid rounded mb-5 mb-lg-0" src="img/about2.jpg" alt="Estudiantes utilizando tecnología" />
            </div>
            <div className="col-lg-7">
                <p className="section-title pr-5"><span className="pr-2">Conoce Tecvoc</span></p>
                <h1 className="mb-4">La Mejor Guía para Tu Futuro Tecnológico</h1>
                <p>
                    Tecvoc es tu aliado en la búsqueda de tu carrera ideal en el campo de la tecnología. 
                    Nuestro test vocacional utiliza algoritmos avanzados para analizar tus habilidades, 
                    intereses y aptitudes, ayudándote a descubrir las carreras tecnológicas que mejor se 
                    adaptan a tu perfil.
                </p>
                <div className="row pt-2 pb-4">
                    <div className="col-6 col-md-4">
                        <img className="img-fluid rounded" src="img/about1.jpg" alt="Estudiante programando" />
                    </div>
                    <div className="col-6 col-md-8">
                        <ul className="list-inline m-0">
                            <li className="py-2 border-top border-bottom">
                                <i className="fa fa-check text-primary mr-3"></i>Test personalizado basado en IA
                            </li>
                            <li className="py-2 border-bottom">
                                <i className="fa fa-check text-primary mr-3"></i>Análisis de más de 50 carreras tech
                            </li>
                            <li className="py-2 border-bottom">
                                <i className="fa fa-check text-primary mr-3"></i>Asesoramiento profesional incluido
                            </li>
                        </ul>
                    </div>
                </div>
                <a href="/login" className="btn btn-primary mt-2 py-2 px-4">Descubre Más</a>
            </div>
        </div>
    </div>
</div>
                {/* About End */}

                {/* Class Start */}
				<div className="container-fluid pt-5">
    <div className="container">
        <div className="text-center pb-2">
            <p className="section-title px-5"><span className="px-2">Cómo Funciona</span></p>
            <h1 className="mb-4">Tres Pasos para Descubrir Tu Carrera Ideal</h1>
        </div>
        <div className="row">
            <div className="col-lg-4 mb-5">
                <div className="card border-0 bg-light shadow-sm pb-2">
                    <img className="card-img-top mb-2" src="img/paso1.jpg" alt="Registro" />
                    <div className="card-body text-center">
                        <h4 className="card-title">Paso 1: Regístrate</h4>
                        <p className="card-text">Crea tu cuenta en Tecvoc de forma rápida y sencilla. Solo necesitas unos minutos para empezar tu viaje hacia tu carrera tecnológica ideal.</p>
                    </div>
                   
                    <a href="/register" className="btn btn-primary px-4 mx-auto mb-4">Registrarse</a>
                </div>
            </div>
            <div className="col-lg-4 mb-5">
                <div className="card border-0 bg-light shadow-sm pb-2">
                    <img className="card-img-top mb-2" src="img/paso2.jpg" alt="Test Vocacional" />
                    <div className="card-body text-center">
                        <h4 className="card-title">Paso 2: Toma el Test</h4>
                        <p className="card-text">Realiza nuestro test vocacional especializado en tecnología. Diseñado para evaluar tus habilidades, intereses y aptitudes en el campo tech.</p>
                    </div>
                   
                    <a href="/login" className="btn btn-primary px-4 mx-auto mb-4">Iniciar Test</a>
                </div>
            </div>
            <div className="col-lg-4 mb-5">
                <div className="card border-0 bg-light shadow-sm pb-2">
                    <img className="card-img-top mb-2" src="img/paso3.jpg" alt="Resultados y Videos" />
                    <div className="card-body text-center">
                        <h4 className="card-title">Paso 3: Resultados</h4>
                        <p className="card-text">Recibe un análisis detallado de tus resultados y accede a videos relacionados con las carreras tecnológicas que mejor se ajustan a tu perfil.</p>
                    </div>
                   
                    <a href="/login" className="btn btn-primary px-4 mx-auto mb-4">Ver Demo</a>
                </div>
            </div>
        </div>
    </div>
</div>
                

          {/* Team Start */}
<div className="container-fluid pt-5">
    <div className="container">
        <div className="text-center pb-2">
            <p className="section-title px-5"><span className="px-2">Nuestro Equipo</span></p>
            <h1 className="mb-4">Desarrolladores de Tecvoc</h1>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 text-center team mb-5">
                <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%', width: '200px', height: '200px', margin: '0 auto' }}>
                    <img className="img-fluid w-100" src="img/cintia.jpeg" alt="Cintia Maucaylle" />
                    <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                        <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-github"></i></a>
                        <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <h4>Cintia Maucaylle</h4>
                <i>Diseñadora y desarrolladora de software</i>
            </div>
            <div className="col-md-6 col-lg-4 text-center team mb-5">
                <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%', width: '200px', height: '200px', margin: '0 auto' }}>
                    <img className="img-fluid w-100" src="img/ariana.jpg" alt="Ariana Azabache" />
                    <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                        <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-github"></i></a>
                        <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <h4>Ariana Azabache</h4>
                <i>Diseñadora y desarrolladora de software</i>
            </div>
        </div>
    </div>
</div>
{/* Team End */}

				
		{/* Artículos Relacionados start */}
<div className="container-fluid pt-5">
    <div className="container">
        <div className="text-center pb-2">
            <p className="section-title px-5"><span className="px-2">Artículos Relacionados</span></p>
            <h1 className="mb-4">Explora el Mundo Tech</h1>
        </div>
        <div className="row pb-3">
            <div className="col-lg-4 mb-4">
                <div className="card border-0 shadow-sm mb-2">
                    <img className="card-img-top mb-2" src="img/blog1.jpg" alt="Carrera en tecnología" />
                    <div className="card-body bg-light text-center p-4">
                        <h4 className="">Las 5 Carreras Tech Más Demandadas </h4>
                        <div className="d-flex justify-content-center mb-3">
                            <small className="mr-3"><i className="fa fa-user text-primary"></i> Tecvoc Team</small>
                            <small className="mr-3"><i className="fa fa-comments text-primary"></i> 23</small>
                        </div>
                        <p>Descubre las carreras tecnológicas con mayor demanda en el mercado laboral actual y por qué deberías considerarlas para tu futuro profesional...</p>
                        <a href="" className="btn btn-primary px-4 mx-auto my-2">Leer Más</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 mb-4">
                <div className="card border-0 shadow-sm mb-2">
                    <img className="card-img-top mb-2" src="img/blog2.jpg" alt="Futuro de la IA" />
                    <div className="card-body bg-light text-center p-4">
                        <h4 className="">El Impacto de la IA en el Futuro del Trabajo</h4>
                        <div className="d-flex justify-content-center mb-3">
                            <small className="mr-3"><i className="fa fa-user text-primary"></i> Cintia M.</small>
                            <small className="mr-3"><i className="fa fa-comments text-primary"></i> 18</small>
                        </div>
                        <p>La inteligencia artificial está transformando el panorama laboral. Analizamos cómo esta tecnología afectará a las profesiones del futuro y qué habilidades serán cruciales...</p>
                        <a href="" className="btn btn-primary px-4 mx-auto my-2">Leer Más</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 mb-4">
                <div className="card border-0 shadow-sm mb-2">
                    <img className="card-img-top mb-2" src="img/blog3.jpg" alt="Habilidades blandas" />
                    <div className="card-body bg-light text-center p-4">
                        <h4 className="">Habilidades Blandas en el Mundo Tech</h4>
                        <div className="d-flex justify-content-center mb-3">
                            <small className="mr-3"><i className="fa fa-user text-primary"></i> Ariana A.</small>
                            <small className="mr-3"><i className="fa fa-comments text-primary"></i> 27</small>
                        </div>
                        <p>Más allá del código: descubre por qué las habilidades blandas son cruciales en el sector tecnológico y cómo puedes desarrollarlas para destacar en tu carrera...</p>
                        <a href="" className="btn btn-primary px-4 mx-auto my-2">Leer Más</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* Artículos Relacionados end */}

			{/* Blog footer*/}

			<div className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
    <div className="row pt-5">
        <div className="col-lg-3 col-md-6 mb-5">
            <a href="/" className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0" style={{ fontSize: '40px', lineHeight: '40px' }}>
                <i className="fas fa-laptop-code"></i>
                <span className="text-white">Tecvoc</span>
            </a>
            <p>Tecvoc es tu guía vocacional en el mundo de la tecnología. Descubre tu carrera ideal y explora las infinitas posibilidades que el sector tech tiene para ofrecerte.</p>
            <div className="d-flex justify-content-start mt-4">
                <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-linkedin-in"></i></a>
                <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-github"></i></a>
                <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="#"><i className="fab fa-twitter"></i></a>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Contáctanos</h3>
            <div className="d-flex">
                <h4 className="fa fa-map-marker-alt text-primary"></h4>
                <div className="pl-3">
                    <h5 className="text-white">Dirección</h5>
                    <p>123 Calle Tecnológica, Lima, Perú</p>
                </div>
            </div>
            <div className="d-flex">
                <h4 className="fa fa-envelope text-primary"></h4>
                <div className="pl-3">
                    <h5 className="text-white">Email</h5>
                    <p>info@Tecvoc.com</p>
                </div>
            </div>
            <div className="d-flex">
                <h4 className="fa fa-phone-alt text-primary"></h4>
                <div className="pl-3">
                    <h5 className="text-white">Teléfono</h5>
                    <p>+51 123 456 789</p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Enlaces Rápidos</h3>
            <div className="d-flex flex-column justify-content-start">
			<a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Inicio</a>
                <a className="text-white mb-2" href="/noostros"><i className="fa fa-angle-right mr-2"></i>¿Qué es Tecvoc?</a>
                <a className="text-white mb-2" href="/instrucciones"><i className="fa fa-angle-right mr-2"></i>Instrucciones</a>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Suscríbete</h3>
            <form action="">
                <div className="form-group">
                    <input type="text" className="form-control border-0 py-4" placeholder="Tu Nombre"  />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control border-0 py-4" placeholder="Tu Email" />
                </div>
                <div>
                    <button className="btn btn-primary btn-block border-0 py-3" type="submit">Suscribirse Ahora</button>
                </div>
            </form>
        </div>
    </div>
    <div className="container-fluid pt-5" style={{ borderTop: '1px solid rgba(23, 162, 184, .2)' }}>
        <p className="m-0 text-center text-white">
            &copy; <a className="text-primary font-weight-bold" href="#">Tecvoc</a>. Todos los derechos reservados.
        </p>
    </div>
</div>


        </>
    );
};

export default Landing;
