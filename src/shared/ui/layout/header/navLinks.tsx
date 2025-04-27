import Link from 'next/link';
import style from './index.module.scss';

const links = [
  {
    title: 'Проекты',
    link: '/projects',
  },
  {
    title: 'Инвесторам',
    link: '/investors',
  },
  {
    title: 'О нас',
    link: '/about',
  },
];

export const NavLinks = () => {
  return (
    <div className={style.navBarLeft}>
      <Link href="/" className={style.logo} />
      <div className={style.navBarLeftList}>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.link}>{link.title}</Link>
          </li>
        ))}
      </div>
    </div>
  );
};
