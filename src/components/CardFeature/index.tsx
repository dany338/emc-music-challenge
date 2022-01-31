import React from 'react';
import { Container } from './styled';
import EmcMusic from '../../assets/images/emc-music.jpg';
import Feature from '../../entities/Feature';

const CardFeature: React.FC<Feature> = ({ description, personalUse, familyUse }) => (
  <Container image={EmcMusic}>
    <div className="image">
      <div className="header">
        <div className="textos">
          <h2 className="titulo">{description}</h2>
          <p className="description">{description}</p>
        </div>
        <div className="use">
          {personalUse &&
            <div>
              <span>FOR PERSONAL USE</span>
            </div>
          }
          {familyUse &&
            <div>
              <span>FOR FAMILY USE</span>
            </div>
          }
        </div>
      </div>
    </div>
  </Container>
);

export default CardFeature;
