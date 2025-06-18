import React from 'react';

const kpis = [
  { id: 1, label: 'Revenue', value: '$12,340', delta: 5 },
  { id: 2, label: 'Orders',  value: '187',     delta: -3 },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="mb-6 text-2xl font-bold">Business Snapshot</h1>
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.id} className="rounded-lg bg-white p-6 shadow hover:shadow-lg transition">
            <p className="text-sm text-gray-500">{k.label}</p>
            <p className="mt-1 text-3xl font-semibold">{k.value}</p>
            <p className={k.delta >= 0 ? 'text-green-600' : 'text-red-600'}>
              {k.delta}%
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
