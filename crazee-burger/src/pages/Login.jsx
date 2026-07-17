import { useState } from "react";


function Login() {

    const [nom,setNom]= useState('');



const handleSubmit = (e) => {
    e.preventDefault()
     
   
    if (nom.trim() === '') {
        window.alert('Veuillez entrer votre prénom.');
        
        document.getElementById('zone').innerHTML ='please fill in this field';
        return;
      }
    


    setNom('');



   


}




  return (
    <div>   
       <h1>bienvenues chez nous !</h1>

       <h2>connectez-vous</h2>
       

       <form action="submit" onSubmit={handleSubmit}>

        <input type="text" placeholder='Entrez votre prenom' onChange={(e) => setNom(e.target.value)} value={nom} />
        <span id='zone'> </span>
        
         <button>Accedez a votre espace</button>


       </form>

    </div>
  )
}

export default Login
