'use client';

import { Bot, Zap, Plus, RefreshCw, GitPullRequest, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import JobList from '@/components/JobList';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Top navigation bar */}
      <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-accent-cyan)] flex items-center justify-center shadow-sm">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <span className="text-lg font-bold gradient-text">ReviewBot</span>
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-[var(--color-surface-hover)] text-[var(--color-foreground-muted)] border border-[var(--color-border)]">
                v1.0
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Live status badge */}
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[var(--color-accent-emerald)]/10 border border-[var(--color-accent-emerald)]/20 text-xs text-[var(--color-accent-emerald)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-emerald)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent-emerald)]"></span>
              </span>
              <span className="font-medium">Live</span>
            </div>

            <button
              type="button"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border border-[var(--color-border)] hover:bg-[var(--color-surface-hover)] transition-colors text-[var(--color-foreground-muted)]"
            >
              <RefreshCw size={13} />
              <span>Sync</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[var(--color-foreground)] tracking-tight">PR Reviews</h1>
            <p className="text-sm text-[var(--color-foreground-muted)] mt-1">
              Monitor AI-powered code reviews and automated analysis across your repositories
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-accent-blue)] text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
            >
              <Plus size={16} />
              <span>Trigger Review</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="flex items-center justify-between text-[var(--color-foreground-muted)] mb-2">
              <span className="text-xs font-medium">Total Reviews</span>
              <GitPullRequest size={16} />
            </div>
            <p className="text-2xl font-bold">128</p>
          </div>

          <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="flex items-center justify-between text-[var(--color-accent-emerald)] mb-2">
              <span className="text-xs font-medium">Passed</span>
              <CheckCircle2 size={16} />
            </div>
            <p className="text-2xl font-bold">114</p>
          </div>

          <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="flex items-center justify-between text-[var(--color-accent-amber,#f59e0b)] mb-2">
              <span className="text-xs font-medium">In Progress</span>
              <Clock size={16} />
            </div>
            <p className="text-2xl font-bold">3</p>
          </div>

          <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="flex items-center justify-between text-[var(--color-accent-rose,#f43f5e)] mb-2">
              <span className="text-xs font-medium">Issues Detected</span>
              <AlertTriangle size={16} />
            </div>
            <p className="text-2xl font-bold">11</p>
          </div>
        </div>

        {/* Reviews Job List */}
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <JobList />
        </div>
      </div>
    </main>
  );
}