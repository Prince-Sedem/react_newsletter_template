import styled from "styled-components";



//Home Page

export const Container = styled.div`
max-width: 850px; /* increased to accommodate 2 columns */
height: 90vh;
display: grid;
background: #fff;
border-radius: 15px;
margin-left: 10rem;
grid-template-columns: 1fr 1fr; /* 👈 two equal columns */
@media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack columns on smaller screens */
  }
`
export const Input = styled.input`
border-raduis: 4px;
width: 225px;
padding: 10px;
border-radius: 7px;
border: 1px solid gray;
cursor: pointer;
&::placeholder{font-style: italic; }
    @media (max-width: 768px) {
    width: 300px;
  };
`
export const Button = styled.button`
  padding: 10px;
  margin: 10px 0;
  width: 250px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
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
  }
`


export const FormConatiner = styled.div`
grid-column: 1;
max-width: 500px;
flex-direction: column;
margin: auto 2rem;
  @media (max-width: 768px) {
    grid-row: 2;
    magrin: 0; /* 👈 Appears second on small screens */
  }

`
export const Form = styled.form`
display: flex;
flex-direction: column;
`
export const FormDetails = styled.div`
align-items: center;
justify-content: center;
margin: auto;
padding: auto 10px;
`
export const Header = styled.p`
font-weight: bold;
font-size: clamp(2.5rem, 2.5vw, 4rem);
line-height: 1.5;
color: '#0000';
padding: 0 auto;
`
export const Text = styled.p`
font-size: clamp(0.8rem, 2.5vw, 1rem);
line-height: 1.5;
color: '#1d1918';
padding: 0 auto;
`
export const Image = styled.div`
padding: 5px;
margin: 20px;
background-color: red;
background-repeat: no-repeat;
max-width: 500px;
height: 80vh;
border-radius: 8px;
  @media (max-width: 768px) {
    grid-row: 1; /* 👈 Appears first on small screens */
    width: 100%;
    padding: 0;
    margin: 0;
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
font-size: 1rem;
color: #333;
max-width: 500px;
`
export const TextEmail = styled.div`
font-weight: semi-bold;
margin-right: 15rem;
padding: 10px 0;
`


//Success Page

export const SuccessContainer = styled.div`
background: #fff;
display: flex;
flex-direction: column;
float: left;
width: 350px;
height: 40vh;
border-radius: 10px;
padding: 50px;

`
export const SuccessImage = styled.div`
background-image: url('/images/checked.png');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width: 30px;
height: 30px;
flex-shrink: 0;
border-radius: 8px;
`
export const SuccessHeader = styled.div`
font-weight: bold;
font-size: 35px;
margin-bottom: 20px;
margin-top: 20px;
`
export const SuccessText = styled.div`
line-height: 1.5;


`

export const Span = styled.div`
font-weight: bold;
`
export const SuccessButton = styled.div`
 padding: 10px;
  width: 250px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  margin: 20px;
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
  }
`