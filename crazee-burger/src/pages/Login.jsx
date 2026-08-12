import { useState } from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import styled from 'styled-components';




function Login() {

    const [nom,setNom]= useState('');
    const navigate = useNavigate();
  



const handleSubmit = (e) => {
    e.preventDefault()
     
   
   if (nom.trim() != '') {
   // alert(`Bonjour, ${nom}!`);
     setNom('');


    navigate(`/OrderPage/${nom}`);
  
    

   }


}

  return (
    <div>   
       <h1>bienvenues chez nous !</h1>
           
       <form action="submit" onSubmit={handleSubmit}>

         <input type="text" placeholder='Entrez votre prenom' onChange={(e) => setNom(e.target.value)} value={nom} required/>
         <button>Acceder a mon espace</button>


       </form>

    </div>
  )
}

export default Login





