import React from 'react';
import {
  Container,
  Wrapper,
} from './styled';
export interface IToggleSwitchProps {
  checked: boolean;
  name: string;
  optionLabels: string[];
  onChange: (e: any, type: string) => void;
}

const ToggleSwitch: React.FC<IToggleSwitchProps> = ({ checked, name, optionLabels, onChange }) => {
  const handleKeyPress = (e: any) => {
    if (e.keyCode !== 32) return;

    e.preventDefault();
    onChange(e, 'radio');
  };

  return (
    <Container>
      <Wrapper>
        <div className="toggle-switch">
          <input
            title="Toggle Switch"
            type="checkbox"
            className="toggle-switch-checkbox"
            name={name}
            id={name}
            checked={checked}
            onChange={(e) => onChange(e, 'radio')}
            disabled={false}
          />
          <label
            className="toggle-switch-label"
            tabIndex={1}
            onKeyDown={(e) => handleKeyPress(e)}
            htmlFor={name}
          >
            <span
              className="toggle-switch-inner"
              data-yes={optionLabels[0]}
              data-no={optionLabels[1]}
              tabIndex={-1}
            />
            <span
              className="toggle-switch-switch"
              tabIndex={-1}
            />
          </label>
        </div>
      </Wrapper>
    </Container>
  );
};

export default ToggleSwitch;
