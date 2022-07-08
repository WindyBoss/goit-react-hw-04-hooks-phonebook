import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import { Divider, List, ListItem } from '@mui/material';
import PropTypes, { object } from 'prop-types';

import { InfoContainer, Info, stylingList, stylingListItem, stylingDivider } from "./Contacts.styled";
import { IconBtn } from "./common/IconBtn";

export default function ContactList ({ contacts, onClick, onChoose }){
  return (
    <List sx={stylingList}> 
      <h2>Contacts</h2>
      {contacts.map(({ name, number, id }) => (
        <div key={id}>
          <ListItem sx={stylingListItem}>
            <IconBtn onClick={onChoose} icon={<PersonIcon/>} id={id}/>
            <InfoContainer>
              <p>Name: <Info>{name}</Info></p> 
              <p>Phone: <Info>{number}</Info></p>
            </InfoContainer>
            <IconBtn onClick={onClick} icon={<DeleteIcon/>} id={id}/>
          </ListItem>
          <Divider sx={stylingDivider} variant="inset" component="li" />
         </div>
      ))}
    </List>
  );
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(object).isRequired,
  onClick: PropTypes.func.isRequired,
  onChoose: PropTypes.func.isRequired,
};