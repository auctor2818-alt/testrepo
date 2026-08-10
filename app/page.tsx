'use client';

import {
  Bot,
  Plus,
  RefreshCw,
  GitPullRequest,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Search,
  Filter,
  Sparkles
} from 'lucide-react';
import JobList from '@/components/JobList';

// Reusable Stat Card Component for cleaner code
const StatCard = ({ title, value, icon: Icon, colorClass }) => (
  <div className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-hover)] hover:shadow-sm transition-all duration-200 group">
    <div className={`flex items-center justify-between ${colorClass} mb-3`}>
      <span className="text-sm font-medium">{title}</span>
      <Icon size={18} className="opacity-70 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-200" />
    </div>
    <p className="text-3xl font-bold tracking-tight">{value}</p>
  </div>
);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Top navigation bar */}
      <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-accent-cyan)] flex items-center justify-center shadow-md">
              <Bot size={22} className="text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-lg font-extrabold tracking-tight gradient-text">ReviewBot</span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[var(--color-surface-hover)] text-[var(--color-foreground-muted)] border border-[var(--color-border)]">
                  Beta v1.0
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Live status badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-accent-emerald)]/10 border border-[var(--color-accent-emerald)]/20 text-xs text-[var(--color-accent-emerald)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-emerald)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent-emerald)]"></span>
              </span>
              <span className="font-semibold tracking-wide">SYSTEM LIVE</span>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-lg border border-[var(--color-border)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-foreground)] transition-all text-[var(--color-foreground-muted)] group"
            >
              <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-500" />
              <span>Sync Data</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <section className="mb-8 rounded-2xl border border-[var(--color-accent-blue)]/20 bg-gradient-to-r from-[var(--color-accent-blue)]/15 via-[var(--color-surface)] to-[var(--color-accent-cyan)]/10 p-6 shadow-lg shadow-[var(--color-accent-blue)]/5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-[var(--color-accent-blue)]/15 p-3 text-[var(--color-accent-cyan)]">
                <Sparkles size={22} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-accent-cyan)]">
                  Review cockpit
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
                  Ship cleaner pull requests with AI triage.
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-foreground-muted)]">
                  Prioritize risky changes, watch review progress, and keep merge queues moving from one focused dashboard.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm md:min-w-64">
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-4">
                <p className="text-[var(--color-foreground-muted)]">Avg. review time</p>
                <p className="mt-1 text-2xl font-bold text-[var(--color-foreground)]">6m</p>
              </div>
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-4">
                <p className="text-[var(--color-foreground-muted)]">Queue health</p>
                <p className="mt-1 text-2xl font-bold text-[var(--color-accent-emerald)]">92%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[var(--color-foreground)] tracking-tight">PR Reviews</h1>
            <p className="text-sm text-[var(--color-foreground-muted)] mt-1.5">
              Monitor AI-powered code reviews and automated analysis across your repositories.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-cyan)] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[var(--color-accent-blue)]/20 hover:-translate-y-0.5 transition-all"
          >
            <Plus size={18} />
            <span>New Review</span>
          </button>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <StatCard 
            title="Total Reviews" 
            value="128" 
            icon={GitPullRequest} 
            colorClass="text-[var(--color-foreground-muted)]" 
          />
          <StatCard 
            title="Passed" 
            value="114" 
            icon={CheckCircle2} 
            colorClass="text-[var(--color-accent-emerald)]" 
          />
          <StatCard 
            title="In Progress" 
            value="3" 
            icon={Clock} 
            colorClass="text-[#f59e0b]" 
          />
          <StatCard 
            title="Issues Detected" 
            value="11" 
            icon={AlertTriangle} 
            colorClass="text-[#f43f5e]" 
          />
        </div>

        {/* Reviews Job List Section */}
        <div className="flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm overflow-hidden">
          
          {/* List Toolbar (New Addition) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 border-b border-[var(--color-border)] bg-[var(--color-surface-hover)]/30">
            <div className="relative w-full sm:max-w-xs">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-foreground-muted)]" />
              <input 
                type="text" 
                placeholder="Search reviews or PRs..." 
                className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)]/50 transition-all text-[var(--color-foreground)]"
              />
            </div>
            <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-[var(--color-border)] hover:bg-[var(--color-surface-hover)] transition-colors text-[var(--color-foreground)]">
              <Filter size={16} />
              <span>Filter</span>
            </button>
          </div>

          {/* Actual List */}
          <div className="p-1">
            <JobList />
          </div>
          
        </div>
      </div>
    </main>
  );
}
