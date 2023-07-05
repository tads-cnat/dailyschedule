import './style.css';
import Logo from '../../../assets/svg/logo'

const NavBar = () => {
	const idNavbar = localStorage.getItem('token');

	function Logout() {
		localStorage.removeItem('token');
	}
	const Renderiza = () => {
		if (idNavbar == null) {
			return (
				<div className="login">
					<li className="login1">
						<a href="/login">Entrar</a>
					</li>
					<li className="cadastro">
						<a href="/cadastro">Cadastrar</a>
					</li>
				</div>
			);
		} else {
			return (
				<div className="login">
					<li className="login1">
						<a href="/" onClick={() => Logout()}>
							Sair
						</a>
					</li>
				</div>
			);
		}
	};
	return (
		<nav id="navigation">
			<div className="wrapper">
				<div className="logo">
					<a href="/">
						<Logo/>
					</a>
				</div>
				<div className="menu">
					<ul>
						<li>
							<a href="/">Início</a>
						</li>
						<li>
							<a href="#beneficio">Benefícios</a>
						</li>
						<li>
							<a href="/criar-cronograma">Criar cronograma</a>
						</li>
						<div id="pesquisar1">
							<form action="/buscar" method="GET">
								<input
									type="text"
									name="search"
									id="search"
									placeholder="Pesquisar"
								/>
								<input type="submit" className="btns" value="" />
							</form>
						</div>

						{Renderiza()}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
