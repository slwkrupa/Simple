import React from 'react';
import classes from "./SideMenu.module.css";
import ShowSideMenu from "./ShowSideMenu.js";

class SideMenu extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          menuIsActive: true
        }
        this.handleHideMenu = this.handleHideMenu.bind(this)
      }

      handleHideMenu() {
        this.setState({
            menuIsActive: !this.state.menuIsActive
        })
      }

    render(){

        return(
            <div className={classes.Container}>

                {this.state.menuIsActive ?
                <div className={classes.ShowMenu}>
                    <ShowSideMenu/>
                    <button type="submit" className={classes.ActiveMenuButton} onClick={this.handleHideMenu}></button>
                </div>
                : 
                <div className={classes.HideMenu}>
                    <button type="submit" className={classes.InactiveMenuButton} onClick={this.handleHideMenu}></button>
                    <p>Menu</p> 
                </div>}

            </div> 
        )
    }
}

export default SideMenu;