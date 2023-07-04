/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import PropTypes from 'prop-types';

const LabelCriarCrono = ({htmlFor, value}) => {
	return (
		<div>
			<label htmlFor={htmlFor}>{value}</label> <br />
		</div>
	);
};
<<<<<<< HEAD
=======

LabelCriarCrono.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
>>>>>>> 92-testes-de-cobertura

LabelCriarCrono.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default LabelCriarCrono;