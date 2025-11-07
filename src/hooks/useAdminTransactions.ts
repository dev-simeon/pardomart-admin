import { useState, useEffect, useMemo } from 'react';
import { axiosInstance } from '@/lib/apiClient';
import type { Transaction } from '../../api';

interface AdminOverviewData {
  totalTransactions: number;
  totalIncome: number;
  totalExpenses: number;
  totalRevenue: number;
}

interface PaginatedTransactionsResponse {
  data: Transaction[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

interface UseAdminTransactionsOptions {
  page?: number;
  pageSize?: number;
  status?: string;
}

interface UseAdminTransactionsResult {
  transactions: Transaction[];
  overview: AdminOverviewData | null;
  loading: boolean;
  error: Error | null;
  total: number;
  totalPages: number;
  pageSize: number;
}

export function useAdminTransactions(
  options: UseAdminTransactionsOptions = {}
): UseAdminTransactionsResult {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [overview, setOverview] = useState<AdminOverviewData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const { page = 1, pageSize = 10, status } = options;

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [overviewRes, transactionsRes] = await Promise.all([
          axiosInstance.get<AdminOverviewData>('/transactions/admin/overview'),
          axiosInstance.get<PaginatedTransactionsResponse>(
            '/transactions/admin/all',
            {
              params: {
                page,
                pageSize,
                ...(status ? { status } : {}),
              },
            }
          ),
        ]);

        if (mounted) {
          setOverview(overviewRes.data);

          if (transactionsRes.data) {
            const result = transactionsRes.data as PaginatedTransactionsResponse;
            setTransactions(result.data || []);
            if (result.pagination) {
              setTotal(result.pagination.total || 0);
              setTotalPages(result.pagination.totalPages || 0);
            }
          }
        }
      } catch (err) {
        if (mounted) {
          setError(
            err instanceof Error ? err : new Error('Failed to fetch transactions')
          );
          setTransactions([]);
          setOverview(null);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [page, pageSize, status]);

  return {
    transactions,
    overview,
    loading,
    error,
    total,
    totalPages,
    pageSize,
  };
}
