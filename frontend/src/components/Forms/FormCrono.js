/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef*/
/* eslint-disable react/prop-types */
import '../CriarCronograma/style.css'
import PropTypes from 'prop-types';
import LabelCriarCrono from './LabelFormCrono';
import InputCriarCrono from './InputFormCrono';

const FormCrono = ({
	onSubmit,
	valueLabel,
	onChangeTitulo,
	onChangeDesc,
	onChangeHora,
	onChangeDate,
	valueTitulo,
	valueDesc,
	valueHora,
	valueDate,
}) => {
	return (
		<div>
			<form onSubmit={onSubmit} className={`crono-info1`} method="post">
				<div className="info">
					<LabelCriarCrono htmlFor="aulas" value={valueLabel} />
					<InputCriarCrono
						type="text"
						name="aulas"
						id="titulo"
						onChange={onChangeTitulo}
						value={valueTitulo}
					/>
				</div>
				<div className="info">
					<LabelCriarCrono htmlFor="descricao" value="Descrição" />
					<InputCriarCrono
						type="text"
						name="descricao"
						id="descricao"
						onChange={onChangeDesc}
						value={valueDesc}
					/>
				</div>
				<div className="info">
					<LabelCriarCrono htmlFor="horario" value="Horário" />
					<InputCriarCrono
						type="time"
						name="horario"
						id="horario"
						onChange={onChangeHora}
						value={valueHora}
					/>
				</div>
				<div className="info">
					<LabelCriarCrono htmlFor="datas" value="Data" />
					<InputCriarCrono
						type="datetime"
						name="datas"
						id="data"
						onChange={onChangeDate}
						value={valueDate}
					/>
				</div>
				<button className="btncont" type="submit">
					Salvar
				</button>
			</form>
		</div>
	);
};

FormCrono.propTypes = {
  onSubmit: PropTypes.func,
  valueLabel: PropTypes.string,
  onChangeTitulo: PropTypes.func,
  onChangeDesc: PropTypes.func,
  onChangeHora: PropTypes.func,
  onChangeDate: PropTypes.func,
  valueTitulo: PropTypes.string,
  valueDesc: PropTypes.string,
  valueHora: PropTypes.string,
  valueDate: PropTypes.string,
};


export default FormCrono;