import PropTypes from 'prop-types';
import { Friend, Name, Online } from './FriendListItem.styled';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Friend>
      <Online $isOnline={isOnline}></Online>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Friend>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
