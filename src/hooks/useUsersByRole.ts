import { useQuery } from "@tanstack/react-query";
import { userApi } from "@/lib/apiClient";
import type { Role, PaginatedUsers, User } from "../../api";

export type UseUsersByRoleResult = {
  users: User[];
  totalCount: number;
  totalPages: number;
  page: number;
  size: number;
  isLoading: boolean;
  refetch: () => void;
};

export function useUsersByRole(role: Role, page = 1, size = 20): UseUsersByRoleResult {
  const query = useQuery({
    queryKey: ["usersByRole", role, page, size],
    queryFn: async () => {
      const res = await userApi.usersGet(undefined, undefined, role, undefined, page, size);
      return res.data as PaginatedUsers;
    },
    staleTime: 30_000,
    refetchOnWindowFocus: false,
  });

  const paged = query.data;
  return {
    users: paged?.data ?? [],
    totalCount: paged?.totalCount ?? 0,
    totalPages: paged?.totalPages ?? 1,
    page,
    size,
    isLoading: query.isLoading || query.isFetching,
    refetch: () => query.refetch(),
  };
}
