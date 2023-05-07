/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './style.css';

const InputCriarCrono = ({ type, name, id, onChange, value }) => {
	return (
		<div>
			<input
				type={type}
				name={name}
				id={id}
				onChange={onChange}
				value={value}
			/>{' '}
			<br />
		</div>
	);
};

export default InputCriarCrono;
