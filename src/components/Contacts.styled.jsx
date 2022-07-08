import styled from 'styled-components';

//---------------------------------------------------------------- Contact Profile Styles --------------------------------

export const ContactProfileContainer = styled.div`
position: absolute;
top: 5%;
right: 5%;

display: inline-flex;
align-items: center;
min-width: 500px;

font-size: 24px;

padding: 15px 0px 15px 15px;
`;

//---------------------------------------------------------------- Other Components Styles --------------------------------

export const MainHeaderContainer = styled.div`
margin: 30px;
`;

//---------------------------------------------------------------- Contact List Styles --------------------------------

export const FilterContainer = styled.div`
border: 1px solid black;
padding: 10px 20px 20px 20px;
margin: 30px;
min-width: 270px;
`;

//---------------------------------------------------------------- Contact List Styles --------------------------------

export const stylingDivider = {
  margin: '0', 
  width: '400px', 
  backgroundColor: 'black'
};

export const stylingList = {
  border: '1px solid black',
  margin: '30px',
  padding: '10px 30px 30px 30px',
  minWidth: '400px', 
};

export const stylingListItem = {
  display: 'inline-flex',
  justifyContent: 'space-between', 
  width: '400px',
  fontSize: '12px',
};

export const InfoContainer = styled.div`
max-width: 70%;
`;

export const Info = styled.span`
font-weight: bold;
`;

//---------------------------------------------------------------- Form Styles --------------------------------

export const Form = styled.form`
border: 1px solid black;
min-width: 96%;
padding: 10px 10px 30px 10px;
`;

export const LabelContainer = styled.div`
display: flex;
align-items: center;
:not(:last-child){
  margin-bottom: 20px;
}
`;

export const FormHeader = styled.h2`
text-align: center;
margin-top: 10px
`;

export const ErrorText = styled.p`
margin-left: 20px;
font-size: 16px;
color: red;
`;

//---------------------------------------------------------------- Modal Styles --------------------------------

export const stylingModalIconBtn = {
  position: 'absolute',
  top: '12px',
  right: '12px',
};

export const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,0.5);
`;


export const ModalContent = styled.div`
display: flex;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
max-width: 800px;
padding: 12px;
border-radius: 4px;
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
background-color: white;
padding: 10px;
min-width: 620px;
`;
