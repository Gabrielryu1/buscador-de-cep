import{useState}from 'react';
import{FiAlertOctagon, FiSearch} from 'react-icons/fi'
import'./styles.css';

import api from './services/api';

function App() {

const [input,setinput] = useState('');

const [cep, setCep] = useState({});
 


async function handlesearch(){
 // 34003536/json/

 if(input==''){
  alert('coloque algo')
  return;
 }

 try{
  const response = await api.get(`${input}/json`);
 setCep(response.data)
 setinput('')


 }catch{
  alert('erro ao buscar');
  setinput('')

 }

}


  return (
    <div className="container">
    <h1 className="title"> achar cep</h1>

   <div className="containerinput">
    <input
    type="text"
    placeholder="digite seu cep..."
    value={input}
    onChange={(e) => setinput(e.target.value)}

     />

     <button className="buttonsearch" onClick={handlesearch}>
       <FiSearch size={25} color='#654'/>
    
     </button>
   </div>


   {Object.keys(cep).length > 0 &&(
        <main className='main'>

        <h2>cep: {cep.cep}</h2>
      
      <span>{cep.logradouro}</span>
      <span>completemento: {cep.complemento}</span>
      <span>{cep.bairro}</span>
      <span>{cep.localidade}- {cep.uf} </span>

  </main>   
   )}

   


    </div>
  );
}

export default App;
