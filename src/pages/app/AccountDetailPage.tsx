import { useState, VFC } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { AppHeader } from '../../components/shared/AppHeader';
import { BlurrableText } from '../../components/shared/BlurrableText';
import { useAccounts } from '../../stores/accounts';

const AccountDetailPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.body};
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  margin: 24px;
  height: 100vh;
`;

const Amount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 24px;
  width: 100vw;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: 200;
  padding: 24px 0px;
  border-top: 0.5px solid #002b2d;
`;

const FirstCol = styled.div`
  display: flex;
  flex-direction: inline;
  justify-content: space-between;

  > input {
    border-radius: 10px;
    outline: none;
    border: 1px solid;
    border-color: #c4c4c4;
    padding: 6px;
    ::placeholder {
      font-size: 12px;
      padding-left: 6px;
    }
  }

  .description {
    width: 60%;
  }

  .amount {
    width: 30%;
    ::placeholder {
      text-align: right;
      padding-right: 6px;
    }
  }
`;

const SecondCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .category {
    width: 30%;
    border-radius: 10px;
    outline: none;
    border: 1px solid;
    border-color: #c4c4c4;
    padding: 5px;
    ::placeholder {
      font-size: 12px;
      padding-left: 6px;
    }
  }

  .btn {
    width: 60%;
    border: none;
    border-radius: 10px;
    padding: 8px 5px;
    background-color: #002b2d;
    color: #fff;
    font-size: 14px;
  }
`;

const TransactionBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 12px;
  border: 2px solid;
  border-color: #002b2d;
  border-radius: 10px;

  .nameAndAmount {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .cat {
    font-weight: 100;
    font-size: 10px;
    text-color: #002b2d;
  }
`;

const TransactionDisplay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 19px;
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
        <Amount>
          <span>Gesamt: </span>
          <BlurrableText>
            €
            {account.transactions
              .map((t) => t.amount)
              .reduce((total, current) => total + current, 0)}
          </BlurrableText>
        </Amount>
        <ContentWrapper>
          <TransactionDisplay>
            {account.transactions.map((t) => (
              <TransactionBox>
                <div key={t.id}>
                  <div className="nameAndAmount">
                    <span>{t.description} </span>
                    <BlurrableText className="amount">
                      €{t.amount}
                    </BlurrableText>
                  </div>
                  <span className="cat">{t.category}</span>
                </div>
              </TransactionBox>
            ))}
          </TransactionDisplay>
          <Input>
            <FirstCol>
              <input
                className="description"
                type="text"
                placeholder="Name"
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                className="amount"
                type="number"
                placeholder="€"
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </FirstCol>
            <SecondCol>
              <input
                className="category"
                type="text"
                placeholder="category"
                onChange={(e) => setCategory(e.target.value)}
              />

              <input
                className="btn"
                type="submit"
                value="Transaktion hinzufügen"
                onClick={() => handleAddTransaction()}
              />
            </SecondCol>
          </Input>
        </ContentWrapper>
      </AccountDetailPageWrapper>
    );
  };
