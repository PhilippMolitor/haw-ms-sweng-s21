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
  color: #000;
  font-family: 'Poppins', sans-serif;
  padding: 15px 0px 20px 0px;
  height: fit-content;

  @media only screen and (max-device-width: 450px) {
    width: 80vw;
    min-height: 140px;
  }

  @media (min-device-width: 451px) {
    width: 300px;
    min-height: 140px;
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
  padding: 6px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  background: #fafafa;
  width: 80%;
  text-align: center;
`;

const Alert = styled.div`
  background: #f28b8b;
  color: #fff;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-size: 14px;
  border-radius: 8px;
  width: 80%;
  font-weight: 200;

  .subtitle {
    font-size: 12px;
  }
`;

// Issue for Prop-Validation: https://github.com/yannickcr/eslint-plugin-react/issues/2353

export const PinInput: FC<PinProps> = ({ btnText, onVerify }: PinProps) => {
  const [pin, setPin] = useState('');
  const [noEnteredPin, setNoEnteredPin] = useState(false);
  const [pinLengthError, setPinLengthError] = useState(false);

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!pin) {
      setPinLengthError(false);
      setNoEnteredPin(true);
      setPin('');
      return;
    }
    if (pin.length === 4) {
      setNoEnteredPin(false);
      setPinLengthError(true);
      setPin('');
      return;
    }
    setNoEnteredPin(false);
    setPinLengthError(false);
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
      {noEnteredPin && (
        <Alert>
          <span>Bitte geben Sie einen Pin ein.</span>
        </Alert>
      )}
      {pinLengthError && (
        <Alert>
          <p>Ihr Pin muss aus 4 Nummern bestehen.</p>
          <p className="subtitle">Überprüfen Sie ihre Eingabe.</p>
        </Alert>
      )}
      <Button type="submit" onClick={onSubmit}>
        {btnText}
      </Button>
    </VerifyForm>
  );
};
