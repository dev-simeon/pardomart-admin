import { useState, useEffect } from 'react';
import { vendorApi } from '@/lib/apiClient';

export interface Vendor {
  id: string;
  userId: string;
  name: string;
  email: string;
  tagline?: string;
  details?: string;
  image?: string;
  address?: string;
  longitude?: number;
  latitude?: number;
  timezone?: string;
  isVerified: boolean;
  isPublished: boolean;
  meta?: any;
  createdAt: string;
  updatedAt: string;
  cartItemCount?: number;
  rating?: {
    average: number;
    count: number;
  };
}

interface UseVendorStoresResult {
  stores: Vendor[];
  loading: boolean;
  error: Error | null;
  totalCount: number;
  totalPages: number;
  pageSize: number;
}

interface UseVendorStoresOptions {
  userId: string;
  page?: number;
  size?: number;
}

export function useVendorStores(options: UseVendorStoresOptions): UseVendorStoresResult {
  const [stores, setStores] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [pagination, setPagination] = useState({
    totalCount: 0,
    totalPages: 0,
    pageSize: 10,
  });

  const { userId, page = 1, size = 10 } = options;

  useEffect(() => {
    const fetchStores = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await vendorApi.vendorsGet(
          undefined,  // name
          undefined,  // latitude
          undefined,  // longitude
          userId,     // userId - filter by vendor owner
          page,       // page
          size        // size
        );

        if (response.data) {
          setStores(response.data.data || []);
          setPagination({
            totalCount: response.data.totalCount || 0,
            totalPages: response.data.totalPages || 0,
            pageSize: response.data.pageSize || size,
          });
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch stores'));
        setStores([]);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchStores();
    }
  }, [userId, page, size]);

  return {
    stores,
    loading,
    error,
    totalCount: pagination.totalCount,
    totalPages: pagination.totalPages,
    pageSize: pagination.pageSize,
  };
}
