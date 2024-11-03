// components/EmailSubscription.js
import { useState } from 'react';

export default function EmailSubscription() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    // If valid, show a success message
    setMessage('Thank you for subscribing!');
    setEmail(''); // Clear the input field
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-2">Subscribe to our newsletter</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-2 mb-2 border border-gray-300 rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
    </div>
  );
}
