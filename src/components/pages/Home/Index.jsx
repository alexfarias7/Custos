import styles from './style.module.css'
import savings from '../../../img/savings.svg'

import LinkButton from '../../layout/LinkButton/Index'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar projeto" />
      <img src={savings} alt="Savings" />
    </section>
  )
}

export default Home
