/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './style.css';

const LabelCriarCrono = ({htmlFor, value}) => {
	return (
		<div>
			<label htmlFor={htmlFor}>{value}</label> <br />
		</div>
	);
};

export default LabelCriarCrono;
