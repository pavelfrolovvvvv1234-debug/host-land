'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '@/lib/api';

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading, fetchUser, logout } = useAuth();
  const router = useRouter();
  const [balance, setBalance] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      fetchUser().catch(() => {
        router.push('/login');
      });
    } else if (user) {
      fetchDashboardData();
    }
  }, [isAuthenticated, isLoading, user]);

  const fetchDashboardData = async () => {
    try {
      const [balanceRes, serversRes, invoicesRes] = await Promise.all([
        api.get('/api/billing/balance'),
        api.get('/api/servers'),
        api.get('/api/billing/invoices'),
      ]);

      setBalance(balanceRes.data);
      setStats({
        servers: serversRes.data?.length || 0,
        invoices: invoicesRes.data?.length || 0,
      });
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex gap-4">
          {user.role === 'ADMIN' && (
            <Link
              href="/admin"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Admin Panel
            </Link>
          )}
          <button
            onClick={() => {
              logout();
              router.push('/login');
            }}
            className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 border border-border rounded-lg bg-card">
          <h3 className="text-lg font-semibold mb-2">Account Balance</h3>
          <p className="text-3xl font-bold">
            ${balance?.balance?.toFixed(2) || '0.00'}
          </p>
        </div>

        <div className="p-6 border border-border rounded-lg bg-card">
          <h3 className="text-lg font-semibold mb-2">Active Servers</h3>
          <p className="text-3xl font-bold">{stats?.servers || 0}</p>
        </div>

        <div className="p-6 border border-border rounded-lg bg-card">
          <h3 className="text-lg font-semibold mb-2">Invoices</h3>
          <p className="text-3xl font-bold">{stats?.invoices || 0}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-6 border border-border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/servers"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Manage Servers
            </Link>
            <Link
              href="/support/tickets"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Support Tickets
            </Link>
            <Link
              href="/billing"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Billing & Invoices
            </Link>
          </div>
        </div>

        <div className="p-6 border border-border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">User Information</h2>
          <div className="space-y-2">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Email Verified:</strong> {user.isEmailVerified ? 'Yes' : 'No'}</p>
            <p><strong>2FA Enabled:</strong> {user.twoFactorEnabled ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
