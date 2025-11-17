import { useEffect, useState } from 'react';
import { customersApi } from '@/lib/apiClient';
import type { Transaction } from '../../api-client';

export interface UseAdminCustomerTransactionsOptions {
  customerId: string;
  page?: number;
  size?: number;
}

export interface UseAdminCustomerTransactionsResult {
  transactions: Transaction[];
  loading: boolean;
  error: Error | null;
  pagination?: {
    page: number;
    size: number;
    total?: number;
  };
}

export function useAdminCustomerTransactions(
  options: UseAdminCustomerTransactionsOptions
): UseAdminCustomerTransactionsResult {
  const { customerId, page = 1, size = 10 } = options;
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    const run = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await customersApi.customersAdminCustomerIdTransactionsGet(customerId, page, size);
        const data = Array.isArray(res.data) ? res.data : [];
        
        if (mounted) {
          setTransactions(data);
        }
      } catch (e) {
        if (mounted) {
          setError(e instanceof Error ? e : new Error('Failed to fetch transactions'));
          setTransactions([]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    if (customerId) {
      run();
    }

    return () => {
      mounted = false;
    };
  }, [customerId, page, size]);

  return {
    transactions,
    loading,
    error,
    pagination: {
      page,
      size,
    },
  };
}
