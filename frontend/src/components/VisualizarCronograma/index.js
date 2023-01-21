import './style.css'
import SideBar from '../Navbar/Sidebar/index.js'

const Visualizar = () => {
  return (
    <div>
      <SideBar />
      <header class="header">
        <h2>Meus cronogramas</h2>
        <h3>Nome do cronograma</h3>
      </header>

      <section class="visualizar">
        <table>
          <thead>
            <tr>
              <td class="diasemana">Segunda</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="tarefas">Tarefa</th>
              <th class="horarios">Horário</th>
            </tr>
            <tr>
              <td class="tbTitulo">EDL - Pilhas</td>
              <td class="tbHora">7:00</td>
            </tr>
          </tbody>
        </table>

        <div class="optbtn">
          <a href="/">Compartilhar</a>
          <a id="Hab" href="/">Editar</a>
          <a href="/#">Baixar</a>
        </div>
      </section>
    </div>
  )
}

export default Visualizar;
