import React from 'react';
import { Container } from './styled';
import StartYellowIcon from '../../assets/icons/star-yellow.svg';
import StartGreyIcon from '../../assets/icons/star-grey.svg';
import DefaultAvatarMale from '../../assets/images/default_avatar_male.jpg';
import EmcMusic from '../../assets/images/emc-music.jpg';
import { IPlan } from '../../entities/Plan';

const CardPlan: React.FC<IPlan> = ({ id, name, price, active }) => (
  <Container data-testid="card-container" image={EmcMusic}>
    <div className="image">
      <div className="header">
        <div>
          <span>${price}/usd</span>
        </div>
        <img
          src={active ? StartYellowIcon : StartGreyIcon  }
          alt='Star...'
        />
      </div>
    </div>
    <div className="textos">
      <h2 className="titulo">{name}</h2>
		  <p className="description">BTC: ${name}</p>
    </div>
    <div className="line" />
    <div className="footer">
      <div>
        <img
          src={DefaultAvatarMale}
          alt='User...'
        />
        <span>{name}</span>
      </div>
      <div>
        <span>{name}</span>
      </div>
    </div>
  </Container>
);

export default CardPlan;
