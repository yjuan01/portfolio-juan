import  styles from './App.module.css'
import fotoPerfil from '../public/juan.jpg'

function App() {
  
//javascript

  return (
  <>
   <nav className={styles.meu}>
    <a href="#s1">Home</a>
    <a href="#s2">Cards</a>
    <a href="#s3">Video</a>
    <a href="#s4">Contato</a>
   </nav>
   <main>
      <section className={styles.s1} id='s1'>
        <div className={styles.left}> 
          <img className={styles.imgPerfil} src={fotoPerfil} alt="Foto perfil" />
        </div>
        <div className='right'>
          <h2 className={styles.title}>Juan Soares</h2>
          <p className={styles.paragraph}>Estudante, aluno de desenvolvimento de sistema FIEP e Administração (ADM).  </p>
        </div>
      </section>

       <section id='s2'>
        <h2>sessao 2</h2>
      </section>

       <section id='s3'>
        <h2>sessao 3</h2>
      </section>

       <section id='s4'>
        <h2>sessao 4</h2>
      </section>

   </main>
  </>
  )
}

export default App
