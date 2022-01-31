import React from 'react';
import { Container } from './styled';
import StartYellowIcon from '../../assets/icons/star-yellow.svg';
import StartGreyIcon from '../../assets/icons/star-grey.svg';
import DefaultAvatarMale from '../../assets/images/default_avatar_male.jpg';
import EmcMusic from '../../assets/images/emc-music.jpg';
import { IUser } from '../../entities/User';

const CardUser: React.FC<IUser> = ({ id, role, name, alias, avatarUrl, notifications, email }) => (
  <Container image={EmcMusic}>
    <div className="image">
      <div className="header">
        <div>
          <span>${role}</span>
        </div>
        <img
          src={notifications > 0 ? StartYellowIcon : StartGreyIcon  }
          alt='Star...'
        />
      </div>
    </div>
    <div className="textos">
      <h2 className="titulo">{name}</h2>
		  <p className="description">BTC: ${notifications}</p>
    </div>
    <div className="line" />
    <div className="footer">
      <div>
        <img
          src={avatarUrl}
          alt='User...'
        />
        <span>{email}</span>
      </div>
      <div>
        <span>{alias}</span>
      </div>
    </div>
  </Container>
);

export default CardUser;
