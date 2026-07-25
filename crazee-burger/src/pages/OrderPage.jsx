import {useNavigate,useLocation, useParams} from 'react-router-dom';


function OrderPage() {

    //const nom = useLocation().state.nom;
    const {username}=useParams()


    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    }


    return (

       <div>
         <h1>Bienvenue sur la page de commande !</h1>
         <p>Bonjour, {username}!</p>
         <button    onClick={handleLogout}>Déconnexion</button>
       </div>
    )

}

export default OrderPage
