import { useState, useEffect } from 'react';
import { userApi } from '@/lib/apiClient';

export interface User {
  id: string;
  name?: string;
  email: string;
  mobileNumber?: string;
  profileImage?: string;
  [key: string]: any;
}

interface UseUserResult {
  user: User | null;
  loading: boolean;
  error: Error | null;
}

interface UseUserOptions {
  userId: string;
}

export function useUser(options: UseUserOptions): UseUserResult {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const { userId } = options;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await userApi.usersIdGet(userId);

        if (response.data) {
          setUser(response.data);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch user'));
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  return {
    user,
    loading,
    error,
  };
}
