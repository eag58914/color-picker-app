import React, { Component } from 'react'
import NavBar from './NavBar'
import ColorBox from './ColorBox'
import './Palette.css'


class Palette extends Component{
    constructor(props){
super(props);
this.state = {level:500}
this.changeLevel = this.changeLevel.bind(this)
    }

    changeLevel(level){
        this.setState({level})
    }
    render(){
        const {colors} = this.props.palette 
        const {level} = this.state
        const colorBoxes =  colors[this.state.level].map(color=>(
            <ColorBox background={color.hex} name={color.name}/>
        ))
        return(
            <div className="Palette">
                <NavBar level={level} changeLevel={this.changeLevel}/>
                {/* NavBar goes here */}
              <div className="Palette-colors">
                {colorBoxes}
            {/* bunch of color palettes */}

             {/* footer*/}
              </div>
             
            </div>
        )
    }
}

export default Palette