import { useState, useEffect } from 'react';
import { orderApi } from '@/lib/apiClient';

export interface Order {
  id: string;
  vendorId?: string;
  status: string;
  createdAt: string;
  [key: string]: any;
}

interface UseVendorOrdersResult {
  orders: Order[];
  loading: boolean;
  error: Error | null;
  totalCount: number;
}

interface UseVendorOrdersOptions {
  vendorId?: string;
}

export function useVendorOrders(options: UseVendorOrdersOptions = {}): UseVendorOrdersResult {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [totalCount, setTotalCount] = useState(0);

  const { vendorId } = options;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await orderApi.orderVendorGet(vendorId);

        if (response.data) {
          const ordersList = Array.isArray(response.data) ? response.data : [];
          setOrders(ordersList);
          setTotalCount(ordersList.length);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch orders'));
        setOrders([]);
        setTotalCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [vendorId]);

  return {
    orders,
    loading,
    error,
    totalCount,
  };
}
