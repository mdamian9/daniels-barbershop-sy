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
                <li><a href="/gallery"><i className="fas fa-camera" />&nbsp;Gallery</a></li>
                <li><a href="/appointments"><i className="fas fa-clipboard-list" />&nbsp;Appointments</a></li>
                <li><a href="/location"><i className="fas fa-map-marker-alt" />&nbsp;Location</a></li>
                <li><a href="/contact"><i className="fas fa-envelope-square" />&nbsp;Contact</a></li>
                <li>
                    <a href="https://www.instagram.com/danielsbarbershop_/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram" />&nbsp;Instagram
                    </a>
                </li>
                <li>
                    <a href="https://www.yelp.com/biz/daniels-barbershop-san-diego" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-yelp" />&nbsp;Yelp
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default sideDrawer;