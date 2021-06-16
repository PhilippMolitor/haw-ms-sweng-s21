import { VFC } from 'react';
import { useParams } from 'react-router-dom';

export type AccountDetailPageProps = {};

export const AccountDetailPage: VFC<AccountDetailPageProps> =
  (): JSX.Element => {
    const { accountId } = useParams<{ accountId: string }>();

    return <div>AccountDetailPage for Account {accountId}</div>;
  };
