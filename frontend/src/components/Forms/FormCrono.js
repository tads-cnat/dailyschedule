/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './style.css';

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
            id="datas"
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

export default FormCrono;
