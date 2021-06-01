import { VFC } from 'react';

import { DemoCounter } from './components/DemoCounter';

export type AppProps = {};

export const App: VFC<AppProps> = (): JSX.Element => <DemoCounter />;
