import { useQuery } from "@tanstack/react-query";
import { userApi } from "@/lib/apiClient";
import type { Role } from "../../api";

export function useUsersCount(role: Role) {
  return useQuery({
    queryKey: ["usersTotal", role],
    queryFn: async () => {
      const res = await userApi.usersGet(undefined, undefined, role, undefined, 1, 1);
      const total = res.data.totalCount ?? 0;
      return total;
    },
    staleTime: 60_000,
    refetchOnWindowFocus: false,
  });
}
