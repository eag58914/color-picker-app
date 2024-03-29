import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete"

const styles = {
root: {

    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover $deleteIcon":{
        color:"white",
        transform:"scale(1.5)"
    }
},
boxContent: {
    position: "absolute",
    width: "100%",
    left:"0px",
    bottom:"0px",
    padding:"10px",
    color:"rgba(0,0,0,0.5)",
    letterSpacing: "1px",
    textTransform:"uppercase",
    fontSize:"12px",
    display: "flex",
    justifyContent:"space-between"
},
deleteIcon: {
  transition: "all 0.3s ease-in-out"
}
}

function DraggableColorBox(props){
    const {classes , handleClick, name, color} = props
    return <div 
    className={props.classes.root} 
    style={{backgroundColor: color}} 
    >
    <div className={classes.boxContent}>
        <span>
        {name}
        </span>
        <span>
            <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
        </span>
    </div></div>
}

export default withStyles(styles)(DraggableColorBox)