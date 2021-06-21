import { VFC } from 'react';
import { useParams } from 'react-router-dom';

import { AppHeader } from '../../components/shared/AppHeader';
import { useAccounts } from '../../stores/accounts';

export type AccountDetailPageProps = {};

export const AccountDetailPage: VFC<AccountDetailPageProps> =
  (): JSX.Element => {
    const { accountId } = useParams<{ accountId: string }>();
    const { accounts } = useAccounts();
    const account = accounts.filter((a) => a.id === accountId)[0]!;

    return (
      <div>
        <AppHeader title={account.name} backUrl="/app" />
        AccountDetailPage for Account &quot;{account.name}&quot; (ID:{' '}
        {accountId})
      </div>
    );
  };
