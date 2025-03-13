'use client';
import { FaTwitter } from 'react-icons/fa';

const TwitterLoginButton = () => {
  const handleLogin = () => {
    window.location.href = '/api/twitter/auth';
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center gap-2 bg-[#1DA1F2] text-white px-4 py-2 rounded-lg hover:bg-[#1a8cd8] transition-colors"
    >
      <FaTwitter className="text-xl" />
      Connect Twitter
    </button>
  );
};

export default TwitterLoginButton;
