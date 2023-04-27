import React from 'react';
import {pages} from '../../pages/routesList'
import {NavLink, Outlet} from "react-router-dom";

const Nav = () => {
    return (
        <div className="container">
            <ul className="nav">
                {pages.map(page => (
                        <li key={page.id}>
                            <NavLink to={page.rout}>
                                {page.title}
                            </NavLink>
                        </li>
                    ))}
            </ul>
            <Outlet />
        </div>
    );
};

export default Nav;