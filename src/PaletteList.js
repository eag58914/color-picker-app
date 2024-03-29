import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

const styles = {
 root:{
     backgroundColor:"blue",
     height: "100vh",
     display:"flex",
     alignItems: "flex-start",
     justifyContent: "center"
 },
 container:{
    width: "50%",
    display:"flex",
    alignItems:"flex-start",
    flexDirection: "column",
    flexWrap:"wrap"
 },
 nav:{
display:"flex",
width: "100%",
justifyContent: "space-between",
alignItems: "center",
color: "white",
"& a": {
    color: "white"
    
}
 },
 palettes:{
boxSizing: "border-box",
width:"100%",
display:"grid",
gridTemplateColumns:"repeat(3,30%)",
gridGap: "5%"

 }
}

class PaletteList extends Component {
    goToPalette(id){
        this.props.history.push(`/palette/${id}`)
    }
    
    render() {
        const {palettes, classes } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                    <h1>React Colors</h1>
                    <Link to="palette/new">Create New Palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                    {palettes.map(palette=>(
                    <p>
                    <MiniPalette {...palette} handleClick= {()=>this.goToPalette(palette.id)}/>
                    </p>
                ))}
                    </div>
                </div>
                

            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)