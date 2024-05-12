import { Profile } from '../Profile';
import { Statistics } from '../Statistics';
import { FriendList } from '../FriendList';
import { TransactionHistory } from '../TransactionHistory';
import userProfile from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';

export function App() {
  const { username, tag, location, avatar, stats } = userProfile;

  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title={'Upload stats'} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
