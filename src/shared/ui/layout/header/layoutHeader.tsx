import style from './index.module.scss';

export const LayoutHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.navBar}>{children}</ul>
      </nav>
    </header>
  );
};
