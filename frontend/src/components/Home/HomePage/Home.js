import '../../../assets/css/style.css';

import React from 'react';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../Navbar/Navbar/Navbar.js';
import Beneficio from '../BeneficioSection/Beneficio.js';
import Plano from '../PlanoSection/Plano.js';
import Footer from '../Footer/Footer.js';

const Home = () => {
	useEffect(() => {
    const closeButton = document.querySelector('.close-btn');
		const popup = document.querySelector('.popup');

		closeButton.addEventListener('click', () => {
			popup.style.display = 'none';
	});
  }, []);

	return (
		<div id="home">
			<NavBar />
			<div className="popup">
				<div className="popup-content">
					<h2>Bem-vindo ao nosso site!</h2>
					<p>Faça o cadastro ou faça login para aproveitar todos os recursos.</p>
					<div className="buttons">
						<a href="/cadastro" className="btn btn-register">Cadastrar</a>
						<a href="/login" className="btn btn-login">Login</a>
					</div>
					<button className="close-btn">&times;</button>
				</div>
			</div>
			<div className="wrapper">
				<header>
					<h1>Daily Schedule</h1>
					<p>
						Cronograma de estudos é uma ferramenta de planejamento que auxilia o
						estudante na organização do tempo disponível para os estudos, para
						que seja possível ver todo o conteúdo necessário de uma forma mais
						organizada.
					</p>

					

					<div className="content">
						<Link to="criar-cronograma" className="button">
							Criar meu cronograma
							<svg
								width="33"
								height="23"
								viewBox="0 0 33 23"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M32.055 12.5607C32.6408 11.9749 32.6408 11.0251 32.055 10.4393L22.509 0.893398C21.9233 0.307612 20.9735 0.307612 20.3877 0.893398C19.8019 1.47918 19.8019 2.42893 20.3877 3.01472L28.873 11.5L20.3877 19.9853C19.8019 20.5711 19.8019 21.5208 20.3877 22.1066C20.9735 22.6924 21.9233 22.6924 22.509 22.1066L32.055 12.5607ZM0.994324 13H30.9943V10H0.994324V13Z"
									fill="white"
								/>
							</svg>
						</Link>
					</div>
				</header>
			</div>
			<Beneficio />
			<Plano />
			<Footer />
		</div>
	);
};

export default Home;
