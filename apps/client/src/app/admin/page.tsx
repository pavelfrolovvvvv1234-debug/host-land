'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

export default function AdminPage() {
  const { user, isAuthenticated, fetchUser } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      fetchUser().catch(() => router.push('/login'));
      return;
    }

    if (user && user.role !== 'ADMIN') {
      router.push('/dashboard');
      return;
    }

    fetchStats();
  }, [isAuthenticated, user]);

  const fetchStats = async () => {
    try {
      // Fetch various stats for admin dashboard
      const [users, servers, invoices, tickets] = await Promise.all([
        api.get('/api/users'),
        api.get('/api/servers'),
        api.get('/api/billing/invoices'),
        api.get('/api/support/tickets'),
      ]);

      setStats({
        users: users.data?.length || 0,
        servers: servers.data?.length || 0,
        invoices: invoices.data?.length || 0,
        tickets: tickets.data?.length || 0,
      });
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !user || user.role !== 'ADMIN') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 border border-border rounded-lg bg-card">
          <h3 className="text-lg font-semibold mb-2">Users</h3>
          <p className="text-3xl font-bold">{stats?.users || 0}</p>
        </div>

        <div className="p-6 border border-border rounded-lg bg-card">
          <h3 className="text-lg font-semibold mb-2">Servers</h3>
          <p className="text-3xl font-bold">{stats?.servers || 0}</p>
        </div>

        <div className="p-6 border border-border rounded-lg bg-card">
          <h3 className="text-lg font-semibold mb-2">Invoices</h3>
          <p className="text-3xl font-bold">{stats?.invoices || 0}</p>
        </div>

        <div className="p-6 border border-border rounded-lg bg-card">
          <h3 className="text-lg font-semibold mb-2">Tickets</h3>
          <p className="text-3xl font-bold">{stats?.tickets || 0}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-6 border border-border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex gap-4">
            <button
              onClick={() => router.push('/admin/users')}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Manage Users
            </button>
            <button
              onClick={() => router.push('/admin/servers')}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Manage Servers
            </button>
            <button
              onClick={() => router.push('/admin/tickets')}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              View Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

