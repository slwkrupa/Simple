import React from 'react';
import classes from "./ShowSideMenu.module.css";

const ShowSideMenu = () => {
    return(
        <div className={classes.Container}>
            <ul className={classes.ListMenu}>
                <li>Menu</li>
                <li className={classes.dotted}></li>
                <li>Aktualności</li>
                <li>Branże</li>
                <li>Produkty</li>
                <li>Usługi</li>
                <li>Referencje</li>
                <li>Kontakt</li>
                <li className={classes.dotted}></li>
                <li>O firmie</li>
                <li>Nagrody</li>
                <li>Relacje inwestorskie</li>
                <li>Partnerzy</li>
                <li>Kariera</li>
                <li className={classes.dotted}></li>
                <li className={classes.Facebook}></li>
                <li className={classes.Linkedin}></li>
            </ul>
        </div>
    )
}

export default ShowSideMenu;