'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

interface Server {
  id: string;
  name: string;
  status: string;
  specs: any;
  ipAddress?: string;
  createdAt: string;
}

export default function ServersPage() {
  const { user, isAuthenticated, fetchUser } = useAuth();
  const router = useRouter();
  const [servers, setServers] = useState<Server[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', cpu: 2, ram: 4, disk: 20 });

  useEffect(() => {
    if (!isAuthenticated) {
      fetchUser().catch(() => router.push('/login'));
      return;
    }
    fetchServers();
  }, [isAuthenticated]);

  const fetchServers = async () => {
    try {
      const response = await api.get('/api/servers');
      setServers(response.data);
    } catch (error) {
      console.error('Failed to fetch servers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateServer = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/api/servers', {
        name: formData.name,
        specs: {
          cpu: formData.cpu,
          ram: formData.ram,
          disk: formData.disk,
        },
      });
      setShowCreateForm(false);
      setFormData({ name: '', cpu: 2, ram: 4, disk: 20 });
      fetchServers();
    } catch (error) {
      console.error('Failed to create server:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Servers</h1>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          {showCreateForm ? 'Cancel' : 'Create Server'}
        </button>
      </div>

      {showCreateForm && (
        <div className="mb-8 p-6 border border-border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Create New Server</h2>
          <form onSubmit={handleCreateServer} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Server Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-background border border-input rounded-md"
                required
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">CPU (cores)</label>
                <input
                  type="number"
                  value={formData.cpu}
                  onChange={(e) => setFormData({ ...formData, cpu: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">RAM (GB)</label>
                <input
                  type="number"
                  value={formData.ram}
                  onChange={(e) => setFormData({ ...formData, ram: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Disk (GB)</label>
                <input
                  type="number"
                  value={formData.disk}
                  onChange={(e) => setFormData({ ...formData, disk: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md"
                  min="1"
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Create Server
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servers.map((server) => (
          <div key={server.id} className="p-6 border border-border rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-2">{server.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Status: <span className="font-medium">{server.status}</span>
            </p>
            {server.ipAddress && (
              <p className="text-sm text-muted-foreground mb-4">
                IP: {server.ipAddress}
              </p>
            )}
            <div className="text-sm text-muted-foreground">
              <p>CPU: {server.specs?.cpu || 'N/A'} cores</p>
              <p>RAM: {server.specs?.ram || 'N/A'} GB</p>
              <p>Disk: {server.specs?.disk || 'N/A'} GB</p>
            </div>
          </div>
        ))}
      </div>

      {servers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No servers found. Create your first server!</p>
        </div>
      )}
    </div>
  );
}

