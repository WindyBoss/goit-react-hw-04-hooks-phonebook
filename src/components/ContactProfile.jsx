import PersonIcon from '@mui/icons-material/Person';
import PropTypes from 'prop-types';
import { IconBtn } from "./common/IconBtn";
import { InfoContainer, Info, ContactProfileContainer } from "./Contacts.styled";

export const ContactProfile = ({contact}) => {
    return (
        <ContactProfileContainer>
            <IconBtn addBtnStyle={addBtnStyle} icon={<PersonIcon fontSize='large' />} avatarAddStyle={avatarAddStyle}/>
            <InfoContainer>
              <p>Name: <Info>{contact[0].name}</Info></p> 
              <p>Phone: <Info>{contact[0].number}</Info></p>
            </InfoContainer>
        </ContactProfileContainer>
    );
};

const avatarAddStyle = {
    width: 56, 
    height: 56,
};

const addBtnStyle = {
    marginRight: '20px',
};

ContactProfile.propTypes = {
    contact: PropTypes.array.isRequired,
  };