import {useNavigate,useLocation} from 'react-router-dom';


function OrderPage() {

    const nom = useLocation().state.nom;


    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    }


    return (

       <div>
         <h1>Bienvenue sur la page de commande !</h1>
         <p>Bonjour, {nom}!</p>
         <button    onClick={handleLogout}>Déconnexion</button>
       </div>
    )

}

export default OrderPage
