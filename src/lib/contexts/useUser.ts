// 'use client';
// import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
// import { usePrivy } from "@privy-io/react-auth";
// import axios from "axios";
// import { Context } from "vm";

// interface User {
//   privyData: any; 
//   backendData: any; 
// }

// interface UserContextType {
//   user: User | null;
//   loading: boolean;
//   error: string | null;
// }
// interface UserProviderProps {
//   children: ReactNode;
// }


// const UserContext = createContext<UserContextType | undefined>(undefined);
// export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
//   const { authenticated, user: privyUser } = usePrivy();
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchBackendData = async () => {
//       if (!authenticated || !privyUser) {
//         setUser(null);
//         setLoading(false);
//         return;
//       }

//       setLoading(true);
//       try {
//         const response = await axios.get("/api/user-data", {
//           params: { userId: privyUser.id },
//         });

//         setUser({
//           privyData: privyUser,
//           backendData: response.data,
//         });
//         setError(null);
//       } catch (err) {
//         console.error("Failed to fetch backend data:", err);
//         setError("Failed to load user data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBackendData();
//   }, [authenticated, privyUser]);


//   const contextValue: UserContextType = { user, loading, error };
//   const Context = UserContext.Provider;
//   return (
//     <UserContext.Provider value={contextValue}>
//       {children}
//     </UserContext.UserProvider>

//   );
// };

// export const useUser = (): UserContextType => {``
//   const context = useContext(UserContext);
//   if (context === undefined) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// };