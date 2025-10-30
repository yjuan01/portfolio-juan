import  styles from './App.module.css'

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
      <section>
        <h2>sessao 1</h2>
      </section>

       <section>
        <h2>sessao 2</h2>
      </section>

       <section>
        <h2>sessao 3</h2>
      </section>

       <section>
        <h2>sessao 4</h2>
      </section>

   </main>
  </>
  )
}

export default App
