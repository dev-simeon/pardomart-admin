import { useState, useEffect } from 'react';
import { productApi } from '@/lib/apiClient';

export interface Product {
  id: string;
  name: string;
  description?: string;
  [key: string]: any;
}

interface UseUserProductsResult {
  products: Product[];
  loading: boolean;
  error: Error | null;
  totalCount: number;
}

interface UseUserProductsOptions {
  userId: string;
}

export function useUserProducts(options: UseUserProductsOptions): UseUserProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [totalCount, setTotalCount] = useState(0);

  const { userId } = options;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await productApi.productUserUserIdGet(userId);

        if (response.data) {
          const productsList = Array.isArray(response.data) ? response.data : [];
          setProducts(productsList);
          setTotalCount(productsList.length);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch products'));
        setProducts([]);
        setTotalCount(0);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchProducts();
    }
  }, [userId]);

  return {
    products,
    loading,
    error,
    totalCount,
  };
}
