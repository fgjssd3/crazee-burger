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
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>   
       
       <div>
       <h1>bienvenues chez nous !</h1>

       <hr />
           
       <h2>Connectez vous</h2>      
       </div>
       
        <input type="text" placeholder='Entrez votre prenom' onChange={(e) => setNom(e.target.value)} value={nom} required/>
         
       <button>Acceder a mon espace</button>


       

    </LoginFormStyled>
  )
}

export default Login




const LoginFormStyled = styled.div`

background: green;

text-align: center;
max-width: 500px;
min-width: 400px;
margin: 0px auto;
padding:2.5rem 2rem;
border-radius:5px;
font-family: 'Amatic SC', cursive;


hr{
  border: 1.5px solid #f56a2c;
  margin-bottom:40px;
}

h1{
  color:white;
  font-size:40px;
}

h2{
  color:#8e8b8b;
  margin:20px 10px 10px;
  color:white;
  font-size:36px;


}


 
  
`;
