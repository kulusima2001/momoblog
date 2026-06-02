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
          [Name placeholder]
        </NavLink>
        <nav className="site-nav" aria-label="[Navigation placeholder]">
          <NavLink to="/">[Home placeholder]</NavLink>
          <NavLink to="/about">[Info placeholder]</NavLink>
          <a href="https://github.com/kulusima2001" target="_blank" rel="noreferrer">
            [Link placeholder]
          </a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <span>[Footer placeholder]</span>
        <a href="https://github.com/kulusima2001" target="_blank" rel="noreferrer">
          [Link placeholder]
        </a>
      </footer>
    </div>
  );
}
