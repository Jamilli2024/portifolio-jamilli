import Header from '@/componentes/Header/Header.jsx';
import styles from './page.module.css';

export default function Sobre() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1 className="text-2xl font-bold mb-4">Sobre o Projeto</h1>
        <p>
          Este portfólio foi criado com React, Next.js e Tailwind CSS para entrega da disciplina de Programação Front-End.
        </p>
      </main>
    </>
  );
}
