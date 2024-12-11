import { useState } from 'react';
import Button from './Button';

export default function BillShare({ friends, onBillPaid }) {
  const [bill, setBill] = useState('');
  const [friend, setFriend] = useState('');

  function submitBill(event) {
    event.preventDefault();
    const singleFriend = friends.find((fr) => +friend === +fr.id);
    const billDetails = { friendId: friend, name: singleFriend.name, bill };
    onBillPaid(billDetails);
  }
  return (
    <div className='bg-slate-300	'>
      <h3 className='text-pink-500 font-bold'>Share Bill Details</h3>
      <form onSubmit={submitBill}>
        <div>
          <label className='text-gray-500 font-bold'>Select Friend Who paid the bill</label>
          <select value={friend} onChange={(e) => setFriend(e.target.value)}>
            <option value="" className='text-blue-500 font-bold'>Select Friend</option>
            {friends.map((friend) => (
              <option className='text-green-500 font-bold' value={friend.id} key={friend.id}>
                {friend.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className='text-orange-500 font-bold'>Bill Amount</label>
          <input type="text" value={bill} onChange={(e) => setBill(e.target.value)} />
        </div>

        <div>
          <Button className='text-blue-500 font-bold'>Add Bill</Button>
        </div>
      </form>
    </div>
  );
}