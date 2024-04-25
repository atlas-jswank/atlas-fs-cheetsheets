import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <h3>FS Cheetsheets</h3>
        <ul>
          <SidebarLink to="/webpack">Webpack</SidebarLink>
          <SidebarLink to="/jsx">JSX</SidebarLink>
          <SidebarLink to="/react-components">Components</SidebarLink>
          <SidebarLink to="/react-hooks">Hooks</SidebarLink>
          <SidebarLink to="/react-state">State</SidebarLink>
        </ul>
      </div>
    </>
  );
}

function SidebarLink({ to, children }) {
  const { pathname } = useLocation();

  return (
    <li className={pathname === to ? "selected" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
