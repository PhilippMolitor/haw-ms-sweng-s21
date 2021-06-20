import { VFC } from 'react';

import { AppHeader } from '../../components/shared/AppHeader';
import { BlurrableText } from '../../components/shared/BlurrableText';

export type AccountOverviewPageProps = {};

export const AccountOverviewPage: VFC<AccountOverviewPageProps> =
  (): JSX.Element => (
    <div>
      <AppHeader title="Accounts" backUrl="/auth" />

      <BlurrableText>Blurrable Text here: $1.000.000</BlurrableText>
    </div>
  );
