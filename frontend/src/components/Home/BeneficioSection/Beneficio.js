import './style.css'
import concentracao from '../../../assets/images/concentracao.png'
import confianca from '../../../assets/images/confianca.jpg'
import tempo from '../../../assets/images/tempo.jpg'
import compro from '../../../assets/images/compro.jpg'

const Beneficio = () => {
  return (
    <div id="beneficios">
      <div className="wrapper">
        <div className="beneficio">
          <div className="bnfc">
            <img src={concentracao} alt="concentração"/>
            <h2>Aumento de concentração</h2>
            <p>Com os assuntos mapeados e organizados com horário e dentro da sua rotina, você vai perceber que o cronograma de estudos tornará mais fácil assimilar as informações, já que terá dias específicos para cada assunto. Além de contribuir, principalmente, para a melhorar sua concentração.</p>
          </div>
          <div className="bnfc">
            <h2>Aumento de confiança</h2>
            <p>Quando você começa a estudar com um cronograma de estudos e ter resultados melhores nas provas, automaticamente, vai se sentir mais confiante. É essa confiança que precisamos para te ajudar a ficar menos ansioso (a) na hora das provas, evitando aquele famoso branco. Quem nunca?!</p>
            <img src={confianca} alt="confiança"/>
          </div>
          <div className="bnfc">
            <img src={tempo} alt="tempo"/>
            <h2>Gerencia de tempo</h2>
            <p>O cronograma de estudos tem como função ajudar a estabelecer prioridades. Portanto, ao planejar tudo que você vai estudar todos os dias e com a quantidade certa de matérias, dificilmente vai se perder entre os conteúdos ou esquecer algo. </p>
          </div>
          <div className="bnfc">
            <h2>Comprometimento e responsabilidade</h2>
            <p>Um cronograma de estudos vai te ajudar a cumprir suas obrigações com seu aprendizado de maneira organizada já que você pode olhar diariamente todos os seus compromissos para o dia. Ah e sem precisar colocar vários lembretes na agenda do seu celular.</p>
            <img src={compro} alt="Comprometimento"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Beneficio;
