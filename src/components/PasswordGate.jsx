import { useState } from 'react';

const PasswordGate = ({ onSuccess, correctPasswords }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const entered = password.trim();

    if (correctPasswords.some((valid) => valid === entered)) {
      setError('');
      onSuccess();
      return;
    }

    setError('Incorrect password. Please try again.');
    setPassword('');
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 px-6 py-10 text-center">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl text-white">
        <h1 className="mb-4 text-4xl font-bold">Password Protected</h1>
        <p className="mb-6 text-sm text-gray-300">
          Enter the password.
          Password is the name of your favourite sweet dish followed by @ and your age.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-left text-sm font-medium text-gray-200" htmlFor="site-password">
            Password
          </label>
          <input
            id="site-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30"
            placeholder="Enter password"
            autoFocus
          />

          {error && <div className="text-sm text-red-300">{error}</div>}

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:brightness-110"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordGate;
