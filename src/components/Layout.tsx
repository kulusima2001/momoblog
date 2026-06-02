import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink to="/" className="site-brand">
          MomoBlog
        </NavLink>
        <nav className="site-nav" aria-label="[Navigation placeholder]">
          <NavLink to="/">[MomoBlog]</NavLink>
          <NavLink to="/about">[About Momo]</NavLink>
          <a href="https://github.com/kulusima2001" target="_blank" rel="noreferrer">
            [Github Link]
          </a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <span>Momo2026</span>
        <a href="https://github.com/kulusima2001" target="_blank" rel="noreferrer">
          https://github.com/kulusima2001
        </a>
      </footer>
    </div>
  );
}
