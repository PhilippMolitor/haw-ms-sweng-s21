/* eslint-disable no-alert */
import React, { FC, useState } from 'react';
import styled from 'styled-components';

export interface PinProps {
  btnText: string;
  onVerify(pin: string): void;
}

const Button = styled.button`
  cursor: pointer;
  justify-content: center;
  background: #002b2d;
  color: #fff;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
`;

// Issue for Prop-Validation: https://github.com/yannickcr/eslint-plugin-react/issues/2353

export const PinInput: FC<PinProps> = ({ btnText, onVerify }: PinProps) => {
  const [pin, setPin] = useState('');

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!pin) {
      alert('Please enter pin');
      setPin('');
      return;
    }
    if (Number(pin) < 1000 || Number(pin) > 9999) {
      alert('Der Pin muss 4 Stellen haben');
      setPin('');
      return;
    }

    onVerify(pin);

    setPin('');
  };

  return (
    <form>
      <div className="verificationWrapper">
        <input
          type="number"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
      </div>
      <div>
        <Button type="submit" onClick={onSubmit}>
          {btnText}
        </Button>
      </div>
    </form>
  );
};
