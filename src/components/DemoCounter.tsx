import { useState, VFC } from 'react';

export type DemoCounterProps = {
  initialValue?: number;
};

export const DemoCounter: VFC<DemoCounterProps> = ({
  initialValue = 0,
}: DemoCounterProps): JSX.Element => {
  const [counter, setCounter] = useState<number>(initialValue);

  return (
    <div>
      <button type="button" onClick={() => setCounter((c) => c - 1)}>
        -
      </button>
      {counter}
      <button type="button" onClick={() => setCounter((c) => c + 1)}>
        +
      </button>
    </div>
  );
};
