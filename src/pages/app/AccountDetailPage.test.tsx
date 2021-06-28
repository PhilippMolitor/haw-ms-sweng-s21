/*
import { render } from 'enzyme';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';

import { Account } from '../../stores/accounts';
import { Theme } from '../../utils/Theme';
import { AccountDetailPage } from './AccountDetailPage';
*/

export {};
describe('<AccountDetailPage>', () => {
  it('has no implementation yet', () => {
    expect(true).toBe(true);
  });

  /*
  beforeAll(() => {
    jest
      .spyOn(localStorage, 'getItem')
      .mockImplementation((key: string): string | null => {
        console.log(`HIER   ${key}`);
        if (key === 'accounts') {
          return JSON.stringify({
            accounts: [
              {
                id: 'account-a',
                name: 'Unit Test Account',
                transactions: [
                  {
                    amount: 100,
                    category: 'Test Category',
                    description: 'Test Description #1',
                    id: 'trans-a',
                  },
                ],
              },
            ],
          } as { accounts: Account[] });
        }

        return null;
      });
  });

  afterAll(() => {
    window.localStorage.getItem = originalLocalStorageGet;
  });

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter initialEntries={['/app/account/account-a']}>
        <Route path="/app/account/:accountId">
          <Theme>
            <AccountDetailPage />
          </Theme>
        </Route>
      </MemoryRouter>,
      div
    );
  });

  it('shows the account name', () => {
    const component = render(
      <MemoryRouter initialEntries={['/app/account/account-a']}>
        <Theme>
          <Route path="/app/account/:accountId">
            <AccountDetailPage />
          </Route>
        </Theme>
      </MemoryRouter>
    );
  });
  */
});
