import React, { useState } from 'react';
import { addUser } from '../api/userApi';
import { User } from '../types/userTypes';

const SignUp: React.FC = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    

    const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            const user: User = { name, email  };
            
            try {
                console.log('User data:', user);
                await addUser(user);
                alert('User added successfully');
                setName('');
                setEmail('');
            } catch (error: any) {
                console.error('Error adding user - Message:', error.message);
                console.error('Error adding user - Response:', error.response);
                console.error('Error adding user - Request:', error.request);
                alert('Failed to add user');
            }
    };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <br></br>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      
      <br></br>
      <button type="submit">Add User</button>
    </form>
  );
};

export default SignUp;
