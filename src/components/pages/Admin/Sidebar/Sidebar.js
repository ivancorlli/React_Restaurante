import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#adminSidebar"
          aria-controls="adminSidebar"
        >
          MENU
        </button>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="adminSidebar"
          aria-labelledby="adminSidebarLabel"
        >
          <div className="offcanvas-header border border-bottom bg-info">
            <h5 className="offcanvas-title" id="adminSidebarLabel">
              Configuracion
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="mt-3">
              <ul className="flex-column">
                <li className="text-center nav-link" >
                  <NavLink to="/admin" className="" data-bs-dismiss="offcanvas" aria-label="Close">
                    Incio
                  </NavLink>
                </li>
                <li className="text-center nav-link">
                  <NavLink to="/admin/menus" className="" data-bs-dismiss="offcanvas" aria-label="Close">
                    Menus
                  </NavLink>
                </li>
                <li className="text-center nav-link ">
                  <NavLink to="/admin/usuarios" className="" data-bs-dismiss="offcanvas" aria-label="Close">
                    Usuarios
                  </NavLink>
                </li>
                <li className="text-center nav-link">
                  <NavLink to="/admin/mensajeria" className="" data-bs-dismiss="offcanvas" aria-label="Close">
                    Mensajeria
                  </NavLink>
                </li>
                <li className="text-center nav-link">
                  <NavLink to="/admin/config" className="" data-bs-dismiss="offcanvas" aria-label="Close">
                    Mi cuenta
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  );
};
