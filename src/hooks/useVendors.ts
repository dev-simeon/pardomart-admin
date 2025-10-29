import { useState, useEffect } from 'react';
import { vendorApi } from '@/lib/apiClient';
import type { PaginatedVendors, VendorListItem } from '../../api';

interface UseVendorsOptions {
  page?: number;
  size?: number;
  name?: string;
}

interface UseVendorsResult {
  vendors: VendorListItem[];
  loading: boolean;
  error: Error | null;
  total: number;
  totalPages: number;
  pageSize: number;
}

export function useVendors(options: UseVendorsOptions = {}): UseVendorsResult {
  const [vendors, setVendors] = useState<VendorListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [pagination, setPagination] = useState({
    total: 0,
    totalPages: 0,
    pageSize: 10,
  });

  const { page = 1, size = 10, name = '' } = options;

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await vendorApi.vendorsGet(
          name || undefined,
          undefined,
          undefined,
          undefined,
          page,
          size
        );
        
        if (response.data) {
          setVendors(response.data.data || []);
          setPagination({
            total: response.data.totalCount || 0,
            totalPages: response.data.totalPages || 0,
            pageSize: response.data.pageSize || size,
          });
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch vendors'));
        setVendors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, [page, size, name]);

  return {
    vendors,
    loading,
    error,
    total: pagination.total,
    totalPages: pagination.totalPages,
    pageSize: pagination.pageSize,
  };
}
