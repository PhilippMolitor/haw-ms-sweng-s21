import { useState, VFC } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { AppHeader } from '../../components/shared/AppHeader';
import { BlurrableText } from '../../components/shared/BlurrableText';
import { useAccounts } from '../../stores/accounts';

export type AccountOverviewPageProps = {};

export const AccountOverviewPage: VFC<AccountOverviewPageProps> =
  (): JSX.Element => {
    const { accounts, addAccount } = useAccounts();
    const { url } = useRouteMatch();

    const [accountName, setAccountName] = useState('');

    function handleAddAccount() {
      addAccount(accountName);
    }

    return (
      <div>
        <AppHeader title="Accounts" backUrl="/auth" />

        <BlurrableText>Blurrable Text here: $1.000.000</BlurrableText>

        <div>
          <input
            type="text"
            placeholder="account name"
            onChange={(e) => setAccountName(e.target.value)}
          />
          <input
            type="submit"
            value="add account"
            onClick={() => handleAddAccount()}
          />
        </div>

        {accounts.map((a) => (
          <Link key={a.id} to={`${url}/account/${a.id}`}>
            {a.name}
          </Link>
        ))}
      </div>
    );
  };
