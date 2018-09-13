import React from "react";
import "./SideDrawer.css"

const sideDrawer = (props) => {

    let drawerClasses = "side-drawer";
    if (props.show) {
        drawerClasses = "side-drawer open";
    };

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/gallery">Gallery <i className="fas fa-camera"></i></a></li>
                <li><a href="/appointments">Appointments <i className="fas fa-clipboard-list"></i></a></li>
                <li>
                    <a href="https://www.instagram.com/danielsbarbershop_/" target="_blank">
                        Instagram <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.yelp.com/biz/daniels-barbershop-san-diego" target="_blank">
                        Yelp <i className="fab fa-yelp"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default sideDrawer;