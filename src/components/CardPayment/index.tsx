import React from 'react';
import { Container } from './styled';
import StartYellowIcon from '../../assets/icons/star-yellow.svg';
import StartGreyIcon from '../../assets/icons/star-grey.svg';
import DefaultAvatarMale from '../../assets/images/default_avatar_male.jpg';
import EmcMusic from '../../assets/images/emc-music.jpg';
import { IPayment } from '../../entities/Payment';
import format from '../../utils/format';

const CardPayment: React.FC<IPayment> = ({ planId, createDate, firstName, lastName, outsideUS, city, postalCode, phoneNumber, paymentType, total }) => (
  <Container image={EmcMusic}>
    <div className="image">
      <div className="header">
        <div>
          <span>${total}/usd</span>
        </div>
        <img
          src={planId === 1 ? StartYellowIcon : StartGreyIcon  }
          alt='Star...'
        />
      </div>
    </div>
    <div className="textos">
      <h2 className="titulo">{`${firstName} ${lastName}`}</h2>
		  <p className="description">Outside US: ${outsideUS ? 'Yes' : 'No'}</p>
    </div>
    <div className="line" />
    <div className="footer">
      <div>
        <img
          src={DefaultAvatarMale}
          alt='User...'
        />
        <span>{`${postalCode} ${phoneNumber}`}</span>
      </div>
      <div>
        <span>{paymentType} {format(new Date(createDate), 'es', {year: 'numeric', month: 'short', day: '2-digit'})}</span>
      </div>
    </div>
  </Container>
);

export default CardPayment;
