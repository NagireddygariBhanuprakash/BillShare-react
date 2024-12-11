export default function FriendsList({ friends, selectedFriend }) {
    function onFriendSelected(friend) {
      selectedFriend(friend);
    }
  
    return (
      <div className="bg-amber-200">
        <h3 className='text-blue-500 font-bold'>Friends Details</h3>
        <ul>
          {friends.map((friend) => (
            <li key={friend.id} onClick={() => onFriendSelected(friend)}>
              {friend.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }