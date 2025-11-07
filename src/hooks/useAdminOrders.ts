import { useState, useEffect } from 'react';
import { axiosInstance } from '@/lib/apiClient';
import type { Order } from '../../api';

interface AdminOrderOverview {
  totalOrders: number;
  totalProducts: number;
  inStockProducts: number;
  cancelledOrders: number;
}

interface PaginatedOrdersResponse {
  data: Order[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

interface UseAdminOrdersOptions {
  page?: number;
  pageSize?: number;
  status?: string;
}

interface UseAdminOrdersResult {
  orders: Order[];
  overview: AdminOrderOverview | null;
  loading: boolean;
  error: Error | null;
  total: number;
  totalPages: number;
  pageSize: number;
}

export function useAdminOrders(
  options: UseAdminOrdersOptions = {}
): UseAdminOrdersResult {
  const [orders, setOrders] = useState<Order[]>([]);
  const [overview, setOverview] = useState<AdminOrderOverview | null>(null);
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

        const [overviewRes, ordersRes] = await Promise.all([
          axiosInstance.get<AdminOrderOverview>('/order/admin/overview'),
          axiosInstance.get<PaginatedOrdersResponse>(
            '/order/admin/all',
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

          if (ordersRes.data) {
            const result = ordersRes.data as PaginatedOrdersResponse;
            setOrders(result.data || []);
            if (result.pagination) {
              setTotal(result.pagination.total || 0);
              setTotalPages(result.pagination.totalPages || 0);
            }
          }
        }
      } catch (err) {
        if (mounted) {
          setError(
            err instanceof Error ? err : new Error('Failed to fetch orders')
          );
          setOrders([]);
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
    orders,
    overview,
    loading,
    error,
    total,
    totalPages,
    pageSize,
  };
}
