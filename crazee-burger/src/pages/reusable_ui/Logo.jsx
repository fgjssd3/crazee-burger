import styled from 'styled-components';

export default function Logo() {
  return (
    <LogoStyled>
     <h1>Crazee </h1>
     <img src="src/assets/logo.png" alt="logo" />
     <h1>Burger</h1>


    </LogoStyled>
  )
}




const LogoStyled = styled.div`


display:flex;
align-items:center;
transform: scale(2.5);
margin-bottom: 50px;



h1{
   display:inline;
   text-align:center;
   color:#ffa01b;
   font-size:15px;
   line-height: 1em;
   font-weight: 700;
   text-transform: uppercase;
   letter-spacing: 1.5em;
   font-family: 'Amatic SC', cursive;


}

img{
  object-fit: contain;
  object-position: center;  
  height: 60px;
  width:80px;
  margin: 0 5px;
}


`;

