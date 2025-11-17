import { useState, useEffect } from 'react';
import { customersApi } from '@/lib/apiClient';
import type { CustomersAdminOverviewGet200Response } from '../../api-client';

interface UseAdminCustomersOverviewResult {
  overview: CustomersAdminOverviewGet200Response | null;
  loading: boolean;
  error: Error | null;
}

interface UseAdminCustomersOverviewOptions {
  days?: number;
}

export function useAdminCustomersOverview(
  options?: UseAdminCustomersOverviewOptions
): UseAdminCustomersOverviewResult {
  const [overview, setOverview] = useState<CustomersAdminOverviewGet200Response | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const days = options?.days;

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await customersApi.customersAdminOverviewGet(days);

        if (response.data) {
          setOverview(response.data);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch overview'));
        setOverview(null);
      } finally {
        setLoading(false);
      }
    };

    fetchOverview();
  }, [days]);

  return {
    overview,
    loading,
    error,
  };
}
