import React, {Component} from 'react'
import TarjetasPs from './TarjetasPs'
import axios from 'axios'
class Buscador extends Component{
    constructor(props){
        super(props)
        this.state={
            pokemones:[ ],
            algunosPokemon: [ ],
            urlsPokemon: [ ],
            caractPokemones: undefined,
            
    
        }
        this.handleChangeBusca=this.handleChangeBusca.bind(this)
        this.busquedaPokemon=this.busquedaPokemon.bind(this)
        //this.evolucionPok=this.evolucionPok.bind(this)
        
    }
    handleChangeBusca=(evento)=>{
        const nomTempPok=evento.target.value;
       
        if(nomTempPok!==''){
            this.busquedaPokemon(evento.target.value)
        }
        else{
            this.pedirAlgunosPokemon();
        }
        
    }
    busquedaPokemon=(busqueda)=>{
        const resultadoBusqueda=this.state.pokemones.filter((pokemon)=>{
          return pokemon.name.toLowerCase().indexOf(busqueda.toLowerCase()) !=-1  
        });
        this.setState({algunosPokemon:resultadoBusqueda})
    }
    pedirPokemones=async()=>{
        await axios.get('https://pokeapi.co/api/v2/pokemon?&limit=964')
        .then((resultado)=>{
            const{results} =resultado.data;
            this.setState({
                pokemones:results,
            })
            return results
        })
    }
        
       
    
  
  

    pedirAlgunosPokemon=async()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?&limit=25')
        .then(resultado=>{
            const{results}=resultado.data;
            this.setState({
                algunosPokemon:results
            })
        })
        
    }
 /*   arregloNombres=()=>{
        var arrNom=[]
        this.state.pokemones.map(arr=>{
            return arrNom.push(arr.name)
        })
        this.setState({

        })
    }
   
    evolucionPok=(numId)=>{
        
        
        if(numId%3 || numId%2){
            return arrNom[numId-1]
             
        }
        else {
            return ' '
        }
    }
   */
        
    componentWillMount(){
      //this.pedirPokemones()
     this.pedirAlgunosPokemon()
    
    }
   

    render(){

        console.log(this.state.pokemones)
        return(
            
            <div className="row">
                <form>
                    <input value={this.nombrePokemon} onChange={this.handleChangeBusca}/>
                </form>
            { 
            this.state.algunosPokemon.map((pok,ind)=>{
                let urlPok=pok.url;
                let nomPok=pok.name;
                let numPok=ind+1;
               // let evoP=this.evolucionPok(numPok)
                
                return(
                    <TarjetasPs key={numPok} nombre={nomPok} numero={numPok} url={urlPok} />
                );
            })}
            </div>
        )
    }
}
export default Buscador;