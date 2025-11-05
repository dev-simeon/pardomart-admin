import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Skeleton } from "@/components/ui/skeleton";

export const ProtectedRoute = () => {
  const { token, loading } = useAuth();

  if (loading) {
    // You can show a loading spinner here
    return <Skeleton className="h-screen w-full" />;
  }

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};
