'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.css';

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/experiencia-academica', label: 'Experiência Acadêmica' },
    { href: '/experiencia-profissional', label: 'Experiência Profissional' },
    { href: '/jogo', label: 'Jogo da Senha' },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}




