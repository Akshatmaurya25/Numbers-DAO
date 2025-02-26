import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react"; // Added Loader2 for the spinner

interface User {
  wallet?: {
    address?: string;
  };
}

interface AuthButtonProps {
  authenticated: boolean;
  login: () => void; // Updated to return a Promise for async handling
  logout: () => Promise<void>; // Updated to return a Promise for async handling
  user?: User | null;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  authenticated,
  login,
  logout,
  user,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Added loading state

  const walletAddress = user?.wallet?.address;
  const displayAddress = walletAddress
    ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`
    : "Logout";

  // Handle login with loading state
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await login(); // Call the passed-in login function
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false); // Reset loading state regardless of success or failure
    }
  };

  // Handle logout with loading state
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout(); // Call the passed-in logout function
      setIsDropdownOpen(false); // Close dropdown after logout
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <>
      {!authenticated ? (
        <Button
          onClick={handleLogin}
          disabled={isLoading} // Disable button while loading
          className="rounded-full items-center justify-center bg-black px-6 py-2 text-white hover:bg-black/90 md:inline-flex"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Logging in...
            </>
          ) : (
            <>
              Start Building
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      ) : (
        <div className="relative">
          <Button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            disabled={isLoading} // Disable button while loading
            className="flex items-center justify-center rounded-full bg-black px-6 py-2 text-white hover:bg-black/90 md:inline-flex"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                {displayAddress}
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <button
                  onClick={() => {
                    // Add dashboard navigation logic here
                    setIsDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  disabled={isLoading} // Disable logout button while loading
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {isLoading ? "Logging out..." : "Logout"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default AuthButton;