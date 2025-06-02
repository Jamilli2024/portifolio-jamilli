import Header from '@/componentes/Header/Header.jsx';
import styles from './page.module.css';

export default function ExperienciaProfissional() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1 className="text-2xl font-bold mb-4">Experiência Profissional</h1>
        <ul className="list-disc ml-6">
          <li>6 anos como técnica em eletrônica – manutenção e correção de equipamentos de fibra óptica</li>
          <li>5 anos com gerenciamento de redes de dispositivos móveis</li>
        </ul>
        <p className="mt-4">Atualmente em transição de carreira para o mercado de TI.</p>
      </main>
    </>
  );
}
