import React, { FC, useState } from 'react';

export interface PinProps {
  btnText: string;
  onVerify(pin: string): void;
}
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
      <div>
        <input
          type="number"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" onClick={onSubmit}>
          {btnText}
        </button>
      </div>
    </form>
  );
};
