import React from "react";
import "./Footer.css"

const footer = (props) => {
    return (
        <div className="footer-component">
            <div className="footer-content">
                (619) 371-8571&ensp;<i class="fas fa-circle dot"></i>&ensp;161 W San Ysidro Blvd, Suite C, San Diego, CA 92173
                &ensp;<i class="fas fa-circle dot"></i>&ensp;&nbsp;
                <a href="https://www.instagram.com/danielsbarbershop_/" target="_blank">
                    <i className="fab fa-instagram"></i>
                </a>&ensp;
                <a href="https://www.yelp.com/biz/daniels-barbershop-san-diego" target="_blank">
                    <i className="fab fa-yelp"></i>
                </a>
            </div>
        </div>
    );
};

export default footer;