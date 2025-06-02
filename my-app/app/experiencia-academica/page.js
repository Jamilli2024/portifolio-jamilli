import Header from '@/componentes/Header/Header.jsx';
import styles from './page.module.css';

export default function ExperienciaAcademica() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1 className="text-2xl font-bold mb-4">Experiência Acadêmica</h1>
        <ul className="list-disc ml-6">
          <li>UNICAP – 3º período de Sistemas para Internet</li>
          <li>Estácio – 3º período de Análise e Desenvolvimento de Sistemas</li>
        </ul>
      </main>
    </>
  );
}
