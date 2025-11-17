import { useEffect, useMemo, useState } from 'react';
import { customersApi } from '@/lib/apiClient';
import type { Transaction } from '../../api-client';

export interface UseCustomerTransactionsOptions {
  customerId: string;
  vendorId?: string;
  limit?: number;
}

export interface UseCustomerTransactionsResult {
  transactions: Transaction[];
  loading: boolean;
  error: Error | null;
}

export function useCustomerTransactions(options: UseCustomerTransactionsOptions): UseCustomerTransactionsResult {
  const { customerId, vendorId, limit = 5 } = options;
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await customersApi.customersCustomerIdTransactionsGet(customerId, vendorId);
        const data = Array.isArray(res.data) ? res.data : [];
        // sort by createdAt desc and take last N
        const sorted = [...data].sort((a, b) => {
          const tA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const tB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return tB - tA;
        });
        if (mounted) setTransactions(sorted.slice(0, limit));
      } catch (e) {
        if (mounted) {
          setError(e instanceof Error ? e : new Error('Failed to fetch transactions'));
          setTransactions([]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };
    if (customerId) run();
    return () => {
      mounted = false;
    };
  }, [customerId, vendorId, limit]);

  return { transactions, loading, error };
}
