/* eslint-disable no-alert */
import React, { FC, useState } from 'react';
import styled from 'styled-components';

export interface PinProps {
  btnText: string;
  onVerify(pin: string): void;
}

const VerifyForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;
  background: #fafafa;
  border-radius: 10px;

  @media only screen and (max-device-width: 450px) {
    width: 80vw;
    height: 140px;
  }

  @media (min-device-width: 451px) {
    width: 300px;
    height: 140px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  width: 80%;
  height: 40px;
  border: none;
  border-radius: 12px;
  flex-shrink: 1;
  justify-content: center;
  background: #002b2d;
  color: #fff;
  font-size: 1rem;
  font-weight: 200;
  font-family: 'Poppins', sans-serif;
  padding: 6px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  background: #fafafa;
  font-family: sans-serif;
  width: 80%;
  text-align: center;
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
    <VerifyForm>
      <Input
        type="number"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <Button type="submit" onClick={onSubmit}>
        {btnText}
      </Button>
    </VerifyForm>
  );
};
