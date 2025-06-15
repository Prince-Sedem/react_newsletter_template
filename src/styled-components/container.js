import styled from "styled-components";
import { Link } from 'react-router-dom';



//Home Page

export const Container = styled.div`
max-width: 650px; /* increased to accommodate 2 columns */
height: 70vh;
display: grid;
background: #fff;
border-radius: 15px;
margin-left: 10rem;
grid-template-columns: 1fr 1fr; /* 👈 two equal columns */
@media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack columns on smaller screens */
    margin: 0;
  }
`
export const Input = styled.input`
font-size: clamp(0.4rem, 1.5vw, 0.7rem);
width: 225px;
padding: 10px;
border-radius: 7px;
border: 1px solid ${props => props.error ? "#ff0000": "#d9d9d6"};
background-color: ${props => props.error ? "#f5afae": ""};
cursor: pointer;
&:-webkit-autofill {
  box-shadow: 0 0 0 1000px white inset !important;
  -webkit-text-fill-color: #000 !important;
}
&::placeholder{font-style: italic;
color:  ${props => props.error ? "#f52b27": ""};
background-color:  ${props => props.error ? "#f52b27": ""};
}
&:focus{
  border-color: ${props => props.error ? "#ff0000": "#07575b"};
  outline: none;


}
&:focus::placeholder {
    color:  ${props => props.error ? "#f5afae": ""};
    background-color:  ${props => props.error ? "#f5afae": ""};
  }



@media (max-width: 768px) {
  width: 90%;
  outline: none;
  }

`
export const Button = styled.button`
font-size: clamp(0.4rem, 1.5vw, 0.7rem);
  padding: 10px;
  width: 250px;
  margin-top: 10px;
  margin-right: 55px;
  border-radius: 7px;
  color: white;
  border: none;
  cursor: pointer;
  background:  #011053;
  transition: background 0.3s ease;
  &:hover {
    background: linear-gradient(135deg, #e01944, #e73a13); /* 👈 Darker on hover */
  }
    @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    margin-right: 35px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`


export const FormConatiner = styled.div`
grid-column: 1;
max-width: 500px;
flex-direction: column;
margin: 1rem;
margin-left: 2rem;
  @media (max-width: 768px) {
    grid-row: 2;
    magrin: 0; /* 👈 Appears second on small screens */
  }

`
export const Form = styled.form`
display: flex;
flex-direction: column;
`
export const ErorMessage = styled.span`
font-size: 12px;
color: "#f52b27";
`
export const FormDetails = styled.div`
align-items: center;
justify-content: center;
margin: auto;
padding: auto 10px;
`
export const Header = styled.p`
font-weight: bold;
font-size: clamp(2rem, 1.5vw, 3rem);
line-height: 1;
color: '#0000';
padding: 0 auto;

`
export const Text = styled.p`
font-size: clamp(0.4rem, 1.5vw, 0.7rem);
line-height: 1;
color: '#1d1918';
width: 280px;
margin: 1rem;
    @media (max-width: 768px) {
    font-size: 14px;
    
  }
`
export const Image = styled.div`
padding: 5px;
margin: 20px;
background-image: url('/images/web-hosting.png');
background-repeat: no-repeat;
background-position: right 30% top 20%;
max-width: 300px;
height: 62vh;
border-radius: 15px;
  @media (max-width: 768px) {
    grid-row: 1; /* 👈 Appears first on small screens */
    max-width: 500px;
    background-position: right 20% bottom 40%;
    padding: 0;
    margin: 0;
    height: 45vh;
    border-radius: 0 0 40px 40px;
  }
`
export const Row = styled.div`
display: flex;
align-items: center;
gap: 20px;

`
export const ImageList = styled.div`
  background-image: url('/images/checked.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 8px;
`
export const TextBox = styled.div`
font-size: clamp(0.4rem, 1.5vw, 0.7rem);
color: #333;
max-width: 500px;
    @media (max-width: 768px) {
    font-size: 14px;
    
  }
`
export const EmailSpan = styled.div`
color: red;
`


export const TextEmail = styled.div`
display: flex;
gap: 6rem;
font-size: clamp(0.4rem, 1.5vw, 0.6rem);
font-weight: semi-bold;
padding: 10px 0;
    @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 14px;
    gap: 11rem;

    
    
  }
  @media (max-width: 480px) {
    margin-top: 10px;
    font-size: 12px;
    gap: 9rem;
    
  }
`


//Success Page

export const SuccessContainer = styled.div`
background: #fff;
display: flex;
flex-direction: column;
float: left;
width: 280px;
height: 40vh;
border-radius: 30px;
padding: 50px;
padding-top: 30px;
padding-bottom: 60px
    @media (max-width: 768px) {
    font-size: 14px;
    padding: 20px;
    margin: 20px;
  }
    @media (max-width: 480px) {
    font-size: 14px;
    padding: 20px;
    margin: 0;
  }

`
export const SuccessImage = styled.div`
background-image: url('/images/checked.png');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width: 40px;
height: 40px;
flex-shrink: 0;
border-radius: 10px;
    @media (max-width: 768px) {
    margin-top: 12vh;
  }
    @media (max-width: 480px) {
    margin-top: 12vh;
  }

`
export const SuccessHeader = styled.div`
font-weight: bold;
text-align: left;          /* 👈 align text to the left */
font-size: clamp(2rem, 2.5vw, 4rem);
margin-bottom: 20px;
margin-top: 20px;
max-width: 300px;
    @media (max-width: 768px) {
    margin-top: 20px;
  }
`
export const SuccessText = styled.div`
font-size: clamp(0.4rem, 1.5vw, 0.7rem);
  line-height: 1.5;
  text-align: left;          /* 👈 align text to the left */
  max-width: 300px;          /* 👈 control width so text wraps */
      @media (max-width: 768px) {
    font-size: 14px;
    max-width: 250px;          /* 👈 control width so text wraps */


  }
`

export const StyledLink = styled(Link)`
  color: white;
  font-weight: semi-bold;
  text-decoration: none;
  cursor: pointer;


`
export const Span = styled.div`
font-weight: bold;
`
export const SuccessButton = styled.div`
font-size: clamp(0.4rem, 1.5vw, 0.7rem);
 padding: 10px;
  width: 250px;
  border-radius: 7px;
  margin: 20px 0;
  margin-bottom: 40px;
  color: white;
  border: none;
  cursor: pointer;
  background:  #011053;
  transition: background 0.3s ease;
  &:hover {
    background: linear-gradient(135deg, #e01944, #e73a13); /* 👈 Darker on hover */
  }
    @media (max-width: 768px) {
    width: 120px
    margin-top: 10px;
  }
    @media (max-width: 480px) {
      width: 120px
      font-size: clamp(0.4rem, 1.5vw, 0.7rem);
    font-size: 14px;
    margin-top: 42vh;
  }
`