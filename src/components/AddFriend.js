import { useState } from 'react';
import Button from './Button';

export default function AddFriend({ onAddFriend }) {
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function addFriend(event) {
    event.preventDefault();
    if (!name.trim()) {
      setErrorMessage('Please enter a friend name');
      return; // Prevent further execution if the input is empty
    }
    onAddFriend(name);
    setName('');
    setErrorMessage(''); // Clear the error message on successful addition
  }

  return (
    <div className='bg-rose-100' >
      <form onSubmit={addFriend}>
        <h1 className='text-blue-500 font-bold'>Add Friend</h1>
        <div>
          <label className='text-blue-500 font-bold'>Friend Name</label>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border bg-fuchsia-400	'
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
        <div>
          <Button>Add Friend</Button>
        </div>
      </form>
    </div>
  );
}