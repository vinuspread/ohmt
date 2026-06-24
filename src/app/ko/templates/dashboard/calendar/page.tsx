'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react'
import { DashboardLayout } from '../_components/layout/DashboardLayout'
import { PageHeader } from '../_components/common/PageHeader'
import { events, eventCategoryMeta, type CalendarEvent } from '../data/calendar-data'

const DAYS = ['월', '화', '수', '목', '금', '토', '일']
const MONTHS = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1)
  const startOffset = (firstDay.getDay() + 6) % 7
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const days: (number | null)[] = []
  for (let i = 0; i < startOffset; i++) days.push(null)
  for (let d = 1; d <= daysInMonth; d++) days.push(d)
  return days
}

function getEventsForDate(dateKey: string) {
  return events.filter((e) => e.date === dateKey)
}

function formatDateKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

function MiniCalendar({ year, month, onNavigate }: { year: number; month: number; onNavigate: (d: number) => void }) {
  const days = getMonthDays(year, month)
  const todayKey = new Date().toISOString().slice(0, 10)

  return (
    <div className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]">
      <div className="flex items-center justify-between mb-3">
        <button onClick={() => onNavigate(-1)} className="p-1 rounded-[var(--radius-sm)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] transition-colors">
          <ChevronLeft size={16} strokeWidth={1.5} />
        </button>
        <span className="text-sm font-medium text-[var(--color-text)]">{MONTHS[month]} {year}</span>
        <button onClick={() => onNavigate(1)} className="p-1 rounded-[var(--radius-sm)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] transition-colors">
          <ChevronRight size={16} strokeWidth={1.5} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[10px] text-[var(--color-text-muted)] font-medium py-1">{d}</div>
        ))}
        {days.map((day, i) => {
          const dateKey = day ? formatDateKey(year, month, day) : ''
          const isToday = dateKey === todayKey
          const dayEvents = dateKey ? getEventsForDate(dateKey) : []
          return (
            <div
              key={i}
              className={`text-center py-1 text-xs rounded-[var(--radius-sm)] relative ${day ? 'text-[var(--color-text)]' : ''} ${isToday ? 'bg-[var(--color-primary-muted)] text-[var(--color-primary)] font-medium' : ''}`}
            >
              {day}
              {dayEvents.length > 0 && (
                <div className="flex justify-center gap-0.5 mt-0.5">
                  {dayEvents.slice(0, 3).map((ev) => (
                    <div key={ev.id} className="w-1 h-1 rounded-full" style={{ backgroundColor: eventCategoryMeta[ev.category].color }} />
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function EventPanel({ date, events, onClose }: { date: string; events: CalendarEvent[]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.2 }}
      className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium text-[var(--color-text)]">
          {new Date(date + 'T00:00:00').toLocaleDateString('ko-KR', { month: 'long', day: 'numeric', year: 'numeric' })}
        </h4>
        <button onClick={onClose} className="p-1 rounded-[var(--radius-sm)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] transition-colors">
          <X size={14} strokeWidth={1.5} />
        </button>
      </div>
      <div className="space-y-2">
        {events.map((ev) => (
          <div key={ev.id} className="flex items-start gap-3 p-3 rounded-[var(--radius-md)] bg-[var(--color-bg-surface)]">
            <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: eventCategoryMeta[ev.category].color }} />
            <div className="min-w-0">
              <p className="text-sm font-medium text-[var(--color-text)]">{ev.title}</p>
              <p className="text-xs text-[var(--color-text-muted)]">{ev.time}</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{ev.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function CalendarPage() {
  const today = new Date()
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const days = getMonthDays(viewYear, viewMonth)
  const todayKey = new Date().toISOString().slice(0, 10)

  const selectedEvents = selectedDate ? getEventsForDate(selectedDate) : []

  function navigateMonth(delta: number) {
    const newMonth = viewMonth + delta
    if (newMonth < 0) { setViewYear((y) => y - 1); setViewMonth(11) }
    else if (newMonth > 11) { setViewYear((y) => y + 1); setViewMonth(0) }
    else setViewMonth(newMonth)
  }

  const upcomingEvents = useMemo(() => {
    return [...events].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 5)
  }, [])

  return (
    <DashboardLayout title="캘린더">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-3"
      >
        <PageHeader
          title="Calendar"
          action={
            <button className="flex items-center gap-1.5 px-3 py-2 bg-[var(--color-primary)] text-white text-sm font-medium rounded-[var(--radius-md)] hover:bg-[var(--color-primary-hover)] transition-colors">
              <Plus size={16} strokeWidth={1.5} />
              일정 추가
            </button>
          }
        />

        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-3 space-y-4">
            <MiniCalendar year={viewYear} month={viewMonth} onNavigate={navigateMonth} />

            <div className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]">
              <h4 className="text-sm font-medium text-[var(--color-text)] mb-3">다가오는 일정</h4>
              <div className="space-y-3">
                {upcomingEvents.map((ev) => (
                  <div key={ev.id} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: eventCategoryMeta[ev.category].color }} />
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-[var(--color-text)] truncate">{ev.title}</p>
                      <p className="text-[10px] text-[var(--color-text-muted)]">{ev.date} {ev.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]">
              <h4 className="text-sm font-medium text-[var(--color-text)] mb-3">카테고리</h4>
              <div className="space-y-2">
                {Object.entries(eventCategoryMeta).map(([key, meta]) => (
                  <div key={key} className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                    <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: meta.color }} />
                    {meta.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <div className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]">
              <div className="flex items-center justify-between mb-4">
                <button onClick={() => navigateMonth(-1)} className="p-1.5 rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] transition-colors">
                  <ChevronLeft size={20} strokeWidth={1.5} />
                </button>
                <h3 className="text-lg font-[var(--font-heading)] font-semibold text-[var(--color-text)]">
                  {MONTHS[viewMonth]} {viewYear}
                </h3>
                <button onClick={() => navigateMonth(1)} className="p-1.5 rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] transition-colors">
                  <ChevronRight size={20} strokeWidth={1.5} />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-0">
                {DAYS.map((d) => (
                  <div key={d} className="text-center text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)] font-medium py-2 border-b border-[var(--color-border)]">
                    {d}
                  </div>
                ))}
                {days.map((day, i) => {
                  if (day === null) return <div key={`empty-${i}`} />
                  const dateKey = formatDateKey(viewYear, viewMonth, day)
                  const isToday = dateKey === todayKey
                  const isSelected = dateKey === selectedDate
                  const dayEvents = getEventsForDate(dateKey)
                  const dayOfWeek = new Date(viewYear, viewMonth, day).getDay()
                  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

                  return (
                    <button
                      key={dateKey}
                      onClick={() => setSelectedDate(isSelected ? null : dateKey)}
                      className={`min-h-[80px] p-1.5 border-b border-[var(--color-border)] text-left transition-colors relative ${
                        isWeekend ? 'bg-[var(--color-bg-hover)]' : ''
                      } ${isSelected ? 'bg-[var(--color-primary-muted)]' : 'hover:bg-[var(--color-bg-hover)]'}`}
                    >
                      <span className={`text-xs inline-flex items-center justify-center w-6 h-6 rounded-full ${
                        isToday ? 'bg-[var(--color-primary)] text-white font-medium' : 'text-[var(--color-text)]'
                      }`}>
                        {day}
                      </span>
                      <div className="mt-1 space-y-0.5">
                        {dayEvents.slice(0, 3).map((ev) => (
                          <div
                            key={ev.id}
                            className="text-[10px] px-1 py-0.5 rounded-sm truncate font-medium"
                            style={{ backgroundColor: `${eventCategoryMeta[ev.category].color}20`, color: eventCategoryMeta[ev.category].color }}
                          >
                            {ev.title}
                          </div>
                        ))}
                        {dayEvents.length > 3 && (
                          <span className="text-[10px] text-[var(--color-text-muted)]">+{dayEvents.length - 3} more</span>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <AnimatePresence mode="wait">
              {selectedDate ? (
                <EventPanel key={selectedDate} date={selectedDate} events={selectedEvents} onClose={() => setSelectedDate(null)} />
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)] flex flex-col items-center justify-center text-center min-h-[200px]"
                >
                  <p className="text-sm text-[var(--color-text-muted)]">날짜를 선택하면 일정을 확인할 수 있습니다</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  )
}
