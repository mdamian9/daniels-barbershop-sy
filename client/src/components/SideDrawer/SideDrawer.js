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
                <li><a href="/gallery"><i className="fas fa-camera"></i>&nbsp;Gallery</a></li>
                <li><a href="/appointments"><i className="fas fa-clipboard-list"></i>&nbsp;Appointments</a></li>
                <li><a href="/location"><i class="fas fa-map-marker-alt"></i>&nbsp;Location</a></li>
                <li><a href="/contact"><i class="fas fa-envelope-square"></i>&nbsp;Contact</a></li>
                <li>
                    <a href="https://www.instagram.com/danielsbarbershop_/" target="_blank">
                        <i className="fab fa-instagram"></i>&nbsp;Instagram
                            </a>
                </li>
                <li>
                    <a href="https://www.yelp.com/biz/daniels-barbershop-san-diego" target="_blank">
                        <i className="fab fa-yelp"></i>&nbsp;Yelp
                            </a>
                </li>
            </ul>
        </nav>
    );
};

export default sideDrawer;