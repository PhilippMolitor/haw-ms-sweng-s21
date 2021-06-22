import { v4 } from 'uuid';
import create from 'zustand';

export type AccountTransaction = {
  id: string;
  amount: number;
  description: string | null;
  category: string | null;
};

export type Account = {
  id: string;
  name: string;
  transactions: AccountTransaction[];
};

export type AccountStore = {
  accounts: Account[];
  addAccount: (name: string) => Account;
  addTransaction: (
    accountId: string,
    amount: number,
    description: string | null,
    category: string | null
  ) => AccountTransaction;
};

function getInitialAccountState(): Account[] {
  const data = window.localStorage.getItem('accounts');

  if (!data || data === '') {
    return [];
  }

  try {
    const parsedData = JSON.parse(data);
    return parsedData.accounts as Account[];
  } catch {
    return [];
  }
}

export const useAccounts = create<AccountStore>((set) => ({
  accounts: getInitialAccountState(),
  // add an account to the array
  addAccount: (name: string) => {
    const account: Account = {
      id: v4(),
      name,
      transactions: [],
    };
    set((prev) => {
      const data = { accounts: [...prev.accounts, account] };
      window.localStorage.setItem('accounts', JSON.stringify(data));
      return data;
    });
    return account;
  },
  // add a transaction to an account and return it
  addTransaction: (
    accountId: string,
    amount: number,
    description: string | null,
    category: string | null
  ) => {
    const transaction: AccountTransaction = {
      id: v4(),
      amount,
      description,
      category,
    };

    // append to the transactions sub-array of the correct account
    set((prev) => {
      const acc = prev.accounts.filter((a) => a.id === accountId)[0]!;
      const data = {
        accounts: [
          ...prev.accounts.filter((a) => a.id !== accountId),
          { ...acc, transactions: [...acc.transactions, transaction] },
        ],
      };
      window.localStorage.setItem('accounts', JSON.stringify(data));
      return data;
    });

    return transaction;
  },
}));
