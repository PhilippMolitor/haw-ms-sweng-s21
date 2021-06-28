import { useState, VFC } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import { AppHeader } from '../../components/shared/AppHeader';
import { BlurrableText } from '../../components/shared/BlurrableText';
import { useAccounts } from '../../stores/accounts';

export type AccountOverviewPageProps = {};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  margin: 0 30px;
  font-family: ${({ theme }) => theme.fonts.body};
  position: relative;
  overflow: hidden;
`;

const AccountDisplay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 19px;
  overflow: hidden;
`;

const Amount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 0px;
`;

const AccountList = styled.div`
  display: flex;
  flex-direction: column;
  height: 65%;
  gap: 0.5rem;
  padding-bottom: 24px;
  overflow: auto;
`;

const AccountBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: #002b2d;
  border-radius: 10px;

  > a {
    text-decoration: none;
    color: #fff;
  }
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  background-color: #fff;
  bottom: 0;
  gap: 0.5rem;
  padding: 24px 0px 40px;

  .inputField {
    border-radius: 10px;
    outline: none;
    border: 1px solid;
    border-color: #c4c4c4;
    padding: 5px;
  }
  .btn {
    border: none;
    border-radius: 10px;
    padding: 5px;
    background-color: #c4c4c4 30;
  }
`;

export const AccountOverviewPage: VFC<AccountOverviewPageProps> =
  (): JSX.Element => {
    const { accounts, addAccount } = useAccounts();
    const { url } = useRouteMatch();

    const [accountName, setAccountName] = useState('');

    function handleAddAccount() {
      addAccount(accountName);
      setAccountName('');
    }

    return (
      <div>
        <AppHeader title="Konten" backUrl="/auth" />
        <PageWrapper>
          <AccountDisplay>
            <Amount>
              <span>Gesamt: </span>
              <BlurrableText>
                €
                {accounts
                  .map((a) =>
                    a.transactions
                      .map((t) => t.amount)
                      .reduce((total, current) => total + current, 0)
                  )
                  .reduce((total, current) => total + current, 0)}
              </BlurrableText>
            </Amount>
            <AccountList>
              {accounts.map((a) => (
                <AccountBox>
                  <Link key={a.id} to={`${url}/account/${a.id}`}>
                    {a.name}
                  </Link>
                </AccountBox>
              ))}
            </AccountList>
          </AccountDisplay>
          <Input>
            <input
              className="inputField"
              type="text"
              placeholder="Accountname"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
            />
            <input
              className="btn"
              type="submit"
              value="Neues Konto hinzufügen"
              onClick={() => handleAddAccount()}
            />
          </Input>
        </PageWrapper>
      </div>
    );
  };
