import React from 'react';
import Plan from '../../entities/Plan';
import usePlan from '../../hooks/usePlan';
import TextButton from '../TextButton';
import {
  ContainerButtons,
  WrapperButtons,
} from './styled';


const ButtonsPlan = () => {
  const [ , , , plans, , , , onSelectPlan, ] = usePlan();
  if (!plans) return null;

  return (
    <ContainerButtons>
      <WrapperButtons>
        {(plans.length > 0) && (
          plans.map((plan: Plan) => (
            <TextButton width="18.438" key={plan.id} text={plan.name} type="button" onClick={() => onSelectPlan(plan)} />
          ))
        )}
      </WrapperButtons>
    </ContainerButtons>
  );
};

export default ButtonsPlan;
