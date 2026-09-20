'use client';

import React, { useEffect, useState } from 'react';
import { activitySeed } from '@/data/site';
import { CheckCircle2, Clock, PlusCircle, Shield, AlertCircle } from 'lucide-react';

type Row = {
  date: string;
  event: string;
  type: string;
  role: string;
  status: string;
  student: string;
};

export function Logger() {
  const [rows, setRows] = useState<Row[]>([]);
  const [filter, setFilter] = useState('All');
  const [form, setForm] = useState({
    event: '',
    date: '',
    type: 'Tech',
    role: 'Participant',
    proof: '',
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem('sait-activities');
    if (raw) {
      try {
        setRows(JSON.parse(raw));
      } catch (e) {
        setRows(
          activitySeed.map((x) => ({
            date: x[0],
            event: x[1],
            type: x[2],
            role: x[3],
            status: x[4],
            student: x[5],
          }))
        );
      }
    } else {
      setRows(
        activitySeed.map((x) => ({
          date: x[0],
          event: x[1],
          type: x[2],
          role: x[3],
          status: x[4],
          student: x[5],
        }))
      );
    }
  }, []);

  const save = (next: Row[]) => {
    setRows(next);
    localStorage.setItem('sait-activities', JSON.stringify(next));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.event || !form.date) return;
    const newRow: Row = {
      date: form.date,
      event: form.event,
      type: form.type,
      role: form.role,
      status: 'Pending',
      student: 'You',
    };
    save([newRow, ...rows]);
    setForm({
      event: '',
      date: '',
      type: 'Tech',
      role: 'Participant',
      proof: '',
    });
    setSubmittedMessage(true);
    setTimeout(() => setSubmittedMessage(false), 4000);
  };

  const visible = filter === 'All' ? rows : rows.filter((r) => r.type === filter);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      
      {/* 01. Submit Activity Form */}
      <section className="lg:col-span-5">
        <div className="bg-[#FAF8F3] border border-[#D4CEBF] p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-[#D4CEBF]">
            <span className="mono text-[10px] font-bold tracking-[0.2em] uppercase text-[#315F9F]">
              01 · LOG RECORD
            </span>
            <span className="mono text-[9px] uppercase text-[#071A33]/50">
              Student Desk
            </span>
          </div>

          <h2 className="display text-3xl font-medium tracking-tight text-[#071A33] mt-4">
            Record Activity
          </h2>
          <p className="text-xs text-[#071A33]/70 mt-1 leading-relaxed">
            Record competitions, projects, workshops, and student representation. Data is stored locally in your browser.
          </p>

          <form onSubmit={submit} className="space-y-4 mt-6">
            <div>
              <label className="block mono text-[10px] uppercase font-semibold text-[#071A33]/70 mb-1">
                Activity / Event Title *
              </label>
              <input
                className="input text-sm"
                placeholder="e.g. SAIT Website Redesign Challenge"
                value={form.event}
                onChange={(e) => setForm({ ...form, event: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mono text-[10px] uppercase font-semibold text-[#071A33]/70 mb-1">
                  Date *
                </label>
                <input
                  className="input text-sm"
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block mono text-[10px] uppercase font-semibold text-[#071A33]/70 mb-1">
                  Category
                </label>
                <select
                  className="input text-sm"
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                >
                  {['Tech', 'Competition', 'Community', 'Career', 'Academic'].map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block mono text-[10px] uppercase font-semibold text-[#071A33]/70 mb-1">
                Your Role
              </label>
              <input
                className="input text-sm"
                placeholder="e.g. Team Lead, Participant, Speaker"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
              />
            </div>

            <div>
              <label className="block mono text-[10px] uppercase font-semibold text-[#071A33]/70 mb-1">
                Proof Link (GitHub, Certificate URL)
              </label>
              <input
                className="input text-sm"
                placeholder="https://..."
                value={form.proof}
                onChange={(e) => setForm({ ...form, proof: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-navy w-full mt-2 py-3">
              <PlusCircle size={15} />
              <span>Submit Activity for Verification</span>
            </button>

            {submittedMessage && (
              <div className="p-3 bg-[#EDE9DF] border border-[#315F9F] mono text-xs text-[#071A33] flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#315F9F]" />
                <span>Activity logged successfully! Appended to your history.</span>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* 02. Activity History Table */}
      <section className="lg:col-span-7">
        <div className="bg-[#FAF8F3] border border-[#D4CEBF] p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#D4CEBF]">
            <span className="mono text-[10px] font-bold tracking-[0.2em] uppercase text-[#315F9F]">
              02 · YOUR LOGS
            </span>
            <span className="mono text-[10px] uppercase bg-[#071A33]/5 px-2 py-0.5 text-[#071A33]">
              {rows.length} Total Records
            </span>
          </div>

          <h2 className="display text-3xl font-medium tracking-tight text-[#071A33] mt-4">
            Submission History
          </h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[#071A33] mono text-[10px] uppercase text-[#071A33]/70">
                  <th className="py-3 pr-4">Date</th>
                  <th className="py-3 pr-4">Activity & Role</th>
                  <th className="py-3 pr-4">Type</th>
                  <th className="py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D4CEBF]">
                {rows.map((r, i) => (
                  <tr key={i} className="hover:bg-[#EDE9DF]/50 transition-colors">
                    <td className="py-4 pr-4 mono text-[10px] text-[#071A33]/70 whitespace-nowrap">
                      {r.date}
                    </td>
                    <td className="py-4 pr-4">
                      <div className="font-medium text-sm text-[#071A33]">{r.event}</div>
                      <div className="mono text-[10px] text-[#315F9F] mt-0.5">{r.role} · by {r.student}</div>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="mono text-[9px] uppercase px-2 py-0.5 border border-[#D4CEBF] bg-[#EDE9DF]">
                        {r.type}
                      </span>
                    </td>
                    <td className="py-4 whitespace-nowrap">
                      {r.status === 'Verified' ? (
                        <span className="inline-flex items-center gap-1 mono text-[9px] uppercase px-2 py-0.5 bg-[#071A33] text-[#F5F2EA]">
                          <CheckCircle2 size={10} /> Verified
                        </span>
                      ) : r.status === 'Rejected' ? (
                        <span className="inline-flex items-center gap-1 mono text-[9px] uppercase px-2 py-0.5 border border-red-800 text-red-800">
                          <AlertCircle size={10} /> Rejected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 mono text-[9px] uppercase px-2 py-0.5 border border-[#315F9F] text-[#315F9F]">
                          <Clock size={10} /> Pending
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 03. Department Verified Feed */}
      <section className="lg:col-span-12 pt-8 border-t border-[#D4CEBF]">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <span className="mono text-[10px] font-bold tracking-[0.2em] uppercase text-[#315F9F]">
              03 · VERIFIED FEED
            </span>
            <h2 className="display text-3xl sm:text-4xl font-medium tracking-tight text-[#071A33] mt-1">
              Department Activity Index
            </h2>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Tech', 'Competition', 'Community', 'Career'].map((x) => (
              <button
                key={x}
                onClick={() => setFilter(x)}
                className={`mono text-[9px] uppercase px-3 py-1.5 border transition-all cursor-pointer ${
                  filter === x
                    ? 'border-[#071A33] bg-[#071A33] text-[#F5F2EA]'
                    : 'border-[#D4CEBF] bg-[#FAF8F3] text-[#071A33] hover:border-[#071A33]'
                }`}
              >
                {x}
              </button>
            ))}
          </div>
        </div>

        {/* Verified Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible
            .filter((r) => r.status === 'Verified')
            .slice(0, 6)
            .map((r, i) => (
              <article
                key={i}
                className="bg-[#FAF8F3] border border-[#D4CEBF] p-6 hover:shadow-editorial transition-all"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#D4CEBF]">
                  <span className="mono text-[10px] text-[#071A33]/60">{r.date}</span>
                  <span className="mono text-[9px] uppercase text-[#315F9F] font-semibold flex items-center gap-1">
                    <Shield size={11} /> Verified
                  </span>
                </div>
                <h3 className="display text-xl font-medium text-[#071A33] mt-4">
                  {r.event}
                </h3>
                <div className="mt-4 pt-3 border-t border-[#D4CEBF]/60 flex items-center justify-between mono text-[10px]">
                  <span className="text-[#315F9F] uppercase">{r.type}</span>
                  <span className="text-[#071A33]/70">{r.role} · {r.student}</span>
                </div>
              </article>
            ))}
        </div>
      </section>

    </div>
  );
}
