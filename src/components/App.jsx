import { Profile } from "components/Profile/Profile";
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from "components/FriendList/FriendList";
import { TransactionList } from 'components/TransactionHistory/TransactionList/TransactionList';
import user from 'user.json'
import data from 'data.json'
import friends from 'friends.json'
import transactions from 'transactions.json'
import 'modern-normalize';

export const App = () => {
  return (
  <>
    <div
      style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101'
    }}
    >
      <Profile user={user}/>
    </div>
    <div
      style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101',
    }}
    >
      <Statistics title="Upload stats" stats={data}/>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FriendList friends={friends} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <TransactionList items={transactions} />
      </div>
  </>
)
}
