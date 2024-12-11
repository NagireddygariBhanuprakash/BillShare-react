export default function BillDetails({ friend }) {
    return (
      <div>
        <h3 className='text-pink-500 font-bold'> {friend.name} Your details regarding  bill are below</h3>
        <ul>
          {friend.billDetails.map((bill) => (
            <li key={bill.friendId}>
              You need to pay {bill.price} to {bill.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }