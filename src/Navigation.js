import React from 'react';
import classes from "./Navigation.module.css";
import Background from "./images/logov3.png";

class Navigation extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          inputIsActive: false
        }
        this.handleInputButton = this.handleInputButton.bind(this)
      }
    
      handleInputButton() {
        this.setState({
          inputIsActive: !this.state.inputIsActive
        })
      }

    render(){
        return(
            <div className={classes.Container}>
                <div className={classes.Nav}>
                <img src={Background} className={classes.Logo}/>

                <ul className={classes.List}>
                    <li className={classes.ListItem}>Aktualności</li>
                    <li className={classes.ListItem}>Branże</li>
                    <li className={classes.ListItem}>Produkty</li>
                    <li className={classes.ListItem}>Usługi</li>
                    <li className={classes.ListItem}>Referencje</li>
                    <li className={classes.ListItem}>Kontakt</li>
                </ul>

                {this.state.inputIsActive ? <input type="text" className={classes.Input}></input> : null}
                
                <button type="submit" onClick = {this.handleInputButton} className={classes.Searching}></button>
                </div>
            </div>
        )
    }
}

export default Navigation;