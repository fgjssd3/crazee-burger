import { useNavigate } from "react-router-dom";


function Introuvable() {

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  }

  return (
    <div>
      <h1>Page qui n'existe pas</h1>
      <button onClick={handleReturn}>Retour à l'accueil</button>
    </div>
  )
}

export default Introuvable