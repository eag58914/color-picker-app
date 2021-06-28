import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import Navbar from "./NavBar"
import PaletteFooter from './PaletteFooter'

class SingleColorPalette extends Component {
    constructor(props){
        super(props)
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.state = {format: "hex"}
        this.changeFormat = this.changeFormat.bind(this)
    }
    gatherShades(palette, colorToFilterBy){
        //return all shades of given color 
        let shades = [];
        let allColors = palette.colors
        for (let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id ===  colorToFilterBy)
            )
        }
        return shades.slice(1)
    }

    changeFormat(val){
        this.setState({format:val})
    }
    render() {
        const {paletteName,emoji} = this.props.palette 
        const {format} = this.state 
        const colorBoxes = this._shades.map(color=>{
           return  <ColorBox key={color.id} name={color.name} background={color[format]} showLink={false} />
        })
        
        return (
            <div className='Palette'>
                <Navbar  handleChange={this.changeFormat} showingAllColors={false}  />
                <h1>Single Color Palette</h1>
                <div className="Palette-colors" >{colorBoxes}</div>
                <PaletteFooter  paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default SingleColorPalette