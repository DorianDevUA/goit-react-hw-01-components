import PropTypes from 'prop-types';
import {
  Avatar,
  Name,
  ProfileCard,
  StatCounter,
  StatItem,
  Stats,
  UserInfo,
} from './Profile.styled';

export function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileCard>
      <UserInfo>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </UserInfo>

      <Stats>
        <StatItem>
          <span>Followers</span>
          <StatCounter>{followers}</StatCounter>
        </StatItem>
        <StatItem>
          <span>Views</span>
          <StatCounter>{views}</StatCounter>
        </StatItem>
        <StatItem>
          <span>Likes</span>
          <StatCounter>{likes}</StatCounter>
        </StatItem>
      </Stats>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
