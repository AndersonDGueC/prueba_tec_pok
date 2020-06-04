import React, {Component} from 'react'
import axios from 'axios';

class TarjetasPs extends Component {
    
    constructor(props){
        super(props);
        this.state={
            abilities1:[ ],
            height1:undefined,
            sprites1:undefined,
            types1:[ ],
            weight1:undefined
        }
        
    }

    getCharacPok=async()=>{
        await axios.get(this.props.url)
        .then((resultado)=>{
            const {abilities, height, sprites, types, weight}=resultado.data
            //console.log(abilities)
            this.setState({
                abilities1:abilities, 
                height1:height, 
                sprites1:sprites.front_default,
                types1: types,
                weight1: weight
            })

        })
    }
    

    componentDidMount(){
        this.getCharacPok()
       
        
    }

    render(){
        let {abilities1,height1,sprites1,types1,weight1}=this.state
        
        
       
        
    return(
    <div className="column" >
    <div className="card">
        <div className="card-image">
            <figure className="image is-2by1">
           <img src={sprites1} width="100" height="100"  alt="Placeholder image"/>
           
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
    <p className="title is-4">{this.props.nombre}</p>
    <p className="subtitle is-4">{this.props.numero}</p>
    <p className="subtitle is-4">{this.props.tipo_s}</p>
    
    <ul>
    {types1.map(
        (arr,index)=>{
            return(
                <li key={index}>{arr.type.name}</li>
            )
        } 
    )}
    </ul>
                </div>
            </div>

            <div className="content">
                
                <a>Clickme</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>
            </div>
        </div>
    </div>
</div>
    
)
    }
}

export default TarjetasPs;