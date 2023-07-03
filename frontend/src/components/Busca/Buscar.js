/* eslint-disable no-undef */
import './style.css';
import React, {useState, useEffect} from 'react';
import NavBar from '../Navbar/Navbar/Navbar.js';

function Buscar() {
	const [searchTerm, setSearchTerm] = useState([]);
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		const loadData = async () =>
			await fetch(`http://localhost:8000/api/cronogramas/`)
				.then((response) => response.json())
				.then((data) => {
					setSearchResults(data);
					setSearchTerm(data);
				})
				.catch((err) => {
					console.error(err);
				});
		loadData()
		.catch((err) => {
			console.error(err);
		});
	}, []);

	const handleChange = ({target}) => {
		if (!target.value) {
			setSearchResults(searchTerm);
			return;
		}

		const filterCrono = searchResults.filter((crono) =>
			crono.titulo.includes(target.value),
		);
		setSearchResults(filterCrono);
	};

	return (
		<div>
			<NavBar />
			<header className="header">
				<h2>Buscar cronogramas</h2>
			</header>
			<div className="buscaInfo">
				<form className="busca">
					<input type="text" placeholder="Search..." onChange={handleChange} />
				</form>{' '}
				<br />
				<br />
				{searchResults.map((result) => (
					<div className="buscaCrono" key={result.id}>
						<a href={`/Visualizar/${result.id}`}> {result.titulo} </a>
					</div>
				))}
			</div>
		</div>
	);
}

export default Buscar;
