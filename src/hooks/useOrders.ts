import { useState, useEffect, useMemo } from 'react';
import { vendorApi } from '@/lib/apiClient';
import type { Order, OrderStatus } from '../../api';

interface UseOrdersOptions {
  page?: number;
  size?: number;
  status?: OrderStatus;
  vendorId?: string;
}

interface UseOrdersResult {
  orders: Order[];
  loading: boolean;
  error: Error | null;
  total: number;
  totalPages: number;
  pageSize: number;
}

export function useOrders(options: UseOrdersOptions = {}): UseOrdersResult {
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const { page = 1, size = 10, status, vendorId } = options;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await vendorApi.orderVendorGet(vendorId, status);

        if (response.data) {
          setAllOrders(response.data);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch orders'));
        setAllOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [status, vendorId]);

  // Handle client-side pagination since API doesn't support it
  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const paginatedOrders = allOrders.slice(startIndex, endIndex);
    const totalPages = Math.ceil(allOrders.length / size);

    return {
      orders: paginatedOrders,
      total: allOrders.length,
      totalPages,
    };
  }, [allOrders, page, size]);

  return {
    orders: paginatedData.orders,
    loading,
    error,
    total: paginatedData.total,
    totalPages: paginatedData.totalPages,
    pageSize: size,
  };
}
