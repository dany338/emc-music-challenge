import React from 'react';
import { useAtom } from 'jotai';
import creditCardType, {
  getTypeInfo,
  types as CardType,
} from "credit-card-type";

import { cardPreviewAtom } from '../../atoms/payment';
import {
  Container,
} from './styled';
import useImage from '../../hooks/useImage';

const CreditCardPreview = () => {
  const [ cardPreview, ] = useAtom(cardPreviewAtom);
  const fileName = creditCardType(cardPreview ? cardPreview.cardNumber : '');
  const type = fileName ? (fileName[0]?.type ? fileName[0].type : '') : '';
  const [ loading, error, image ] = useImage(type);

  if (!cardPreview) return null;
  if (error) return null;

  return (
    <Container>
      <div className="title">Credit card preview</div>
      <div className="card">
        <div className="card-content">
          <div className="card-content--info">
            <span className="card-number">{cardPreview.cardNumber}</span>
            <span className="card-expiry">VALID THRU {cardPreview.cardExpiryDate}</span>
            <span className="card-name">{cardPreview.cardName}</span>
          </div>
          <div className="card-content--logo">
            {loading ? <div>loading...</div> : ( <img src={image} alt="Credit card" /> )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreditCardPreview;
