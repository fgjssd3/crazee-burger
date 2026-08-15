import { useState } from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import styled from 'styled-components';

import { BsPersonCircle } from "react-icons/bs";

import { IoChevronForward } from "react-icons/io5";
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
       

       <div>

        <div  className="input-with-icon">
        
        <BsPersonCircle  className="icon"  />

        <input type="text" placeholder='Entrez votre prenom' onChange={(e) => setNom(e.target.value)} value={nom} required/>
         </div>


         

       <button className="button-with-icon">

        <span>Acceder a mon espace</span>
        <IoChevronForward className="icon" />
       </button>
         
         


</div>

       

    </LoginFormStyled>
  )
}

export default Login




const LoginFormStyled = styled.form`



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



.input-with-icon{

background-color: #fff;
border-radius: 5px;
display: flex;
align-items: center;
padding: 18px 24px;
margin:18px 0;



  .icon{
font-size: 15px;
margin-right: 8px;
color:#93a2b1;
  }


  input{
    
    border:none;
    font-size:15px;
    color:#17661a;
    width: 100%;
  }

&::placeholder{
  background:white;
  color: lightgrey;
}
}

.button-with-icon{

width: 100%;
border :1px solid red ;
display:inline-flex;
justify-content: center;
align-items: center;
position: relative;
white-space: nowrap;
text-decoration: none;
line-height: 1;






padding: 18px 24px;
border-radius: 5px;
font-size: 15px;
font-weight: 800;
color:white;
background-color: #ff9f1b;
border : 1px solid #ff9f1b;





&:hover:not(:disabled){
  background-color: white;
  color: #ff9f1b;
  border : 1px solid #ff9f1b;
  transition: all 200ms ease-out;

}

&:active{
 color:white;
 background-color: #ff9f1b;
 border : 1px solid #ff9f1b;

}
&:disabled{
  opacity: 0.6;
  cursor: not-allowed;
}

.icon{
display : flex;
justify-content: center;
align-items: center;
font-size: 15px;
margin-left: 10px;

}





}





 
 
  
`;
