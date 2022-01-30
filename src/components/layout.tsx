import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ location, title, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    const isRootPath = location.pathname === rootPath;
    let header;

    if (isRootPath) {
        header = (
            <h3 className="main-heading">
                <Link to="/">{title}</Link>
            </h3>
        );
    } else {
        header = (
            <Link className="header-link-home" to="/">
                {title}
            </Link>
        );
    }

    return (
        <div className="global-wrapper" data-is-root-path={isRootPath}>
            <header className={isRootPath ? "global-header" : "post-header"}>{header}</header>
            <main>{children}</main>
            <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
        </div>
    );
};

export default Layout;
