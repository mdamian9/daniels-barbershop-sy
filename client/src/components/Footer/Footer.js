import React from "react";
import "./Footer.css"

const footer = (props) => {
    return (
        <div className="footer-component">
            <div className="footer-content text-center">
                (619) 371-8571&ensp;&ensp;<i className="fas fa-circle dot" />&ensp;&ensp;
                <a
                    href="https://www.google.com/maps/place/Daniel's+Barbershop/@32.5534624,-117.0466422,15z/data=!4m5!3m4!1s0x0:0x7db518c49d92580b!8m2!3d32.5534624!4d-117.0466422"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    161 W San Ysidro Blvd, Suite C<br />San Diego, CA 92173
                </a>
                &ensp;&ensp;<i className="fas fa-circle dot" />&ensp;&ensp;
                <a href="https://www.instagram.com/danielsbarbershop_/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" />
                </a>&ensp;&ensp;
                <a href="https://www.yelp.com/biz/daniels-barbershop-san-diego" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-yelp" />
                </a>
            </div>
        </div>
    );
};

export default footer;