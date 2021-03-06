import React from "react";
import Radium from "radium";

function Col(props) {
    const styles = {
        base: {
            padding: '25px 25px 25px 25px',
            background: 'transparent',
            textAlign: 'center',
            fontColor: 'black',
            height: 'auto',
            borderRadius: '5px 5px 5px 5px'
        }
    }
    return <div className="col" style={styles.base}>{props.children}</div>;
}

export default Radium(Col);