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
          kulusima2001
        </NavLink>
        <nav className="site-nav" aria-label="主导航">
          <NavLink to="/">首页</NavLink>
          <NavLink to="/about">关于</NavLink>
          <a href="https://github.com/kulusima2001" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <span>© 2026 kulusima2001</span>
        <a href="https://github.com/kulusima2001" target="_blank" rel="noreferrer">
          github.com/kulusima2001
        </a>
      </footer>
    </div>
  );
}
