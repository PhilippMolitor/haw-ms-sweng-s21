import { useState, VFC } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { AppHeader } from '../../components/shared/AppHeader';
import { BlurrableText } from '../../components/shared/BlurrableText';
import { useAccounts } from '../../stores/accounts';

const AccountDetailPageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export type AccountDetailPageProps = {};

export const AccountDetailPage: VFC<AccountDetailPageProps> =
  (): JSX.Element => {
    const { accountId } = useParams<{ accountId: string }>();
    const { accounts, addTransaction } = useAccounts();
    const account = accounts.filter((a) => a.id === accountId)[0]!;

    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);

    function handleAddTransaction() {
      addTransaction(accountId, amount, description, category);
    }

    return (
      <AccountDetailPageWrapper>
        <AppHeader title={account.name} backUrl="/app" />
        AccountDetailPage for Account &quot;{account.name}&quot; (ID:{' '}
        {accountId})
        <div>
          <input
            type="text"
            placeholder="transaction description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="transaction category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            placeholder="transaction amount"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <input
            type="submit"
            value="add transaction"
            onClick={() => handleAddTransaction()}
          />
        </div>
        <ul>
          {account.transactions.map((t) => (
            <li key={t.id}>
              {t.description} (<BlurrableText>€{t.amount}</BlurrableText>) -
              Kategorie &quot;{t.category}&quot;
            </li>
          ))}
        </ul>
      </AccountDetailPageWrapper>
    );
  };
