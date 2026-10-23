"use client";

import { useState } from "react";
import {
  Sparkles,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  Globe,
  SearchX,
  Layers,
  Loader2,
} from "lucide-react";

type UIState = "success" | "loading" | "error" | "empty";
type Direction = "ltr" | "rtl";

const stateOptions: {
  id: UIState;
  label: string;
  desc: string;
  activeColor: string;
  dotColor: string;
}[] = [
  {
    id: "success",
    label: "1. Loaded State (Data Ready)",
    desc: "Renders structured data with RTL/LTR support",
    activeColor: "border-emerald-500/60 bg-emerald-500/10 text-white",
    dotColor: "bg-emerald-400",
  },
  {
    id: "loading",
    label: "2. Skeleton Loading State",
    desc: "Prevents layout shift (CLS) while fetching API",
    activeColor: "border-cyan-500/60 bg-cyan-500/10 text-white",
    dotColor: "bg-cyan-400",
  },
  {
    id: "error",
    label: "3. Error State & Recovery",
    desc: "Graceful fallback with retry action handler",
    activeColor: "border-rose-500/60 bg-rose-500/10 text-white",
    dotColor: "bg-rose-400",
  },
  {
    id: "empty",
    label: "4. Empty / Not-Found Filter",
    desc: "Clear user feedback when zero results match",
    activeColor: "border-amber-500/60 bg-amber-500/10 text-white",
    dotColor: "bg-amber-400",
  },
];

export default function FrontendLab() {
  const [uiState, setUiState] = useState<UIState>("success");
  const [dir, setDir] = useState<Direction>("ltr");

  const content = {
    ltr: {
      serviceTitle: "Passport Issuance & Renewal",
      category: "Civil & Travel Services",
      authority: "Passports & Immigration Authority",
      time: "3 - 5 Business Days",
      steps: [
        "Verify national ID validity and residency status",
        "Upload 4 recent biometric photographs (white background)",
        "Complete online payment & schedule branch pickup",
      ],
      loadingText: "Fetching official service requirements from API...",
      errorTitle: "Failed to Load Service Data (503)",
      errorDesc:
        "Network timeout while connecting to the repository abstraction layer.",
      retry: "Retry Connection",
      emptyTitle: "No Matching Services Found",
      emptyDesc:
        "No government services matched your current filter criteria. Try resetting the filter.",
      reset: "Reset Filters & Show Data",
    },
    rtl: {
      serviceTitle: "إصدار وتجديد جواز السفر المميكن",
      category: "خدمات الجوازات والهجرة",
      authority: "الإدارة العامة للجوازات والهجرة والجنسية",
      time: "٣ - ٥ أيام عمل",
      steps: [
        "التحقق من سريان بطاقة الرقم القومي والموقف التجنيدي",
        "تجهيز ٤ صور شخصية حديثة بخلفية بيضاء",
        "سداد الرسوم إلكترونياً وتحديد موعد الاستلام من الفرع",
      ],
      loadingText: "جاري جلب متطلبات الخدمة الرسمية من الخادم...",
      errorTitle: "تعذر الاتصال بقاعدة البيانات (503)",
      errorDesc: "حدث انقطاع مؤقت أثناء جلب البيانات من طبقة الـ Repository.",
      retry: "إعادة المحاولة الآن",
      emptyTitle: "لا توجد خدمات مطابقة للبحث",
      emptyDesc:
        "لم نتمكن من العثور على نتائج تطابق التصفية الحالية. يمكنك إعادة ضبط الفلتر.",
      reset: "إعادة ضبط الفلتر وعرض البيانات",
    },
  }[dir];

  return (
    <section
      id="frontend-lab"
      className="scroll-mt-20 border-t border-slate-800/60 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header & RTL/LTR Toggle */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-cyan-400 uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              Interactive Architecture Demo
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Frontend Engineering in Action
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              Click any state below to test how I engineer resilient UI
              components:{" "}
              <span className="font-semibold text-slate-200">
                Loaded Data, Skeleton Loading, Error Recovery, and Empty States
              </span>{" "}
              with live{" "}
              <span className="font-semibold text-cyan-300">
                English (LTR) &amp; Arabic (RTL)
              </span>{" "}
              switching.
            </p>
          </div>

          {/* Direction Switcher */}
          <div className="flex items-center gap-2 self-start rounded-xl border border-slate-700 bg-slate-900 p-1.5">
            <button
              type="button"
              onClick={() => setDir("ltr")}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold transition ${
                dir === "ltr"
                  ? "bg-cyan-500 text-slate-950 shadow-md"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Globe className="h-3.5 w-3.5" />
              English (LTR)
            </button>
            <button
              type="button"
              onClick={() => setDir("rtl")}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold transition ${
                dir === "rtl"
                  ? "bg-cyan-500 text-slate-950 shadow-md"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Globe className="h-3.5 w-3.5" />
              العربية (RTL)
            </button>
          </div>
        </div>

        {/* Interactive Control Bar + Live Preview Card */}
        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          {/* Left Column: 4 State Control Buttons */}
          <div className="flex flex-col justify-between space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 lg:col-span-4">
            <p className="mb-2 text-xs font-bold tracking-wider text-cyan-400 uppercase">
              Select UI State to Simulate:
            </p>

            {stateOptions.map((item) => {
              const isSelected = uiState === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setUiState(item.id)}
                  className={`w-full cursor-pointer rounded-xl border p-4 text-left transition duration-200 ${
                    isSelected
                      ? item.activeColor
                      : "border-slate-800 bg-slate-950/90 text-slate-200 hover:border-slate-600 hover:bg-slate-900"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold sm:text-sm">
                      {item.label}
                    </span>
                    <span
                      className={`h-3 w-3 shrink-0 rounded-full ${
                        isSelected
                          ? `${item.dotColor} ring-4 ring-white/10`
                          : "bg-slate-700"
                      }`}
                    />
                  </div>
                  <p className="mt-1.5 text-xs text-slate-400">{item.desc}</p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Component Canvas */}
          <div className="flex min-h-[360px] flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 lg:col-span-8">
            {/* Top Status Bar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4 font-mono text-xs text-slate-300">
              <span className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-cyan-400" />
                &lt;ServiceCard dir=&quot;{dir}&quot; status=&quot;{uiState}
                &quot; /&gt;
              </span>
              <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-semibold text-cyan-300">
                Active State: {uiState.toUpperCase()}
              </span>
            </div>

            {/* Dynamic State Rendering (Notice w-full here so nothing collapses) */}
            <div dir={dir} className="my-auto w-full">
              {/* 1. SKELETON LOADING STATE */}
              {uiState === "loading" && (
                <div className="w-full rounded-xl border border-cyan-500/30 bg-slate-950 p-6 shadow-inner">
                  <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-cyan-400">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>{content.loadingText}</span>
                  </div>

                  <div className="animate-pulse space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-6 w-36 rounded-full bg-slate-700" />
                      <div className="h-5 w-24 rounded-md bg-slate-800" />
                    </div>
                    <div className="h-8 w-3/4 rounded-lg bg-slate-700" />
                    <div className="h-4 w-1/2 rounded bg-slate-800" />
                    <div className="space-y-3 border-t border-slate-800 pt-4">
                      <div className="h-4 w-full rounded bg-slate-700/80" />
                      <div className="h-4 w-5/6 rounded bg-slate-700/80" />
                      <div className="h-4 w-2/3 rounded bg-slate-700/80" />
                    </div>
                  </div>
                </div>
              )}

              {/* 2. ERROR STATE */}
              {uiState === "error" && (
                <div className="w-full rounded-xl border border-rose-500/40 bg-rose-950/30 p-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/20 text-rose-400">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {content.errorTitle}
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-slate-300">
                    {content.errorDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => setUiState("success")}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-rose-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-rose-500/20 transition hover:bg-rose-400"
                  >
                    <RefreshCw className="h-4 w-4" />
                    {content.retry}
                  </button>
                </div>
              )}

              {/* 3. EMPTY / NOT-FOUND STATE */}
              {uiState === "empty" && (
                <div className="w-full rounded-xl border border-amber-500/30 bg-slate-950 p-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
                    <SearchX className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {content.emptyTitle}
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-slate-400">
                    {content.emptyDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => setUiState("success")}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/15 px-5 py-2.5 text-xs font-bold text-amber-300 transition hover:bg-amber-500 hover:text-slate-950"
                  >
                    {content.reset}
                  </button>
                </div>
              )}

              {/* 4. SUCCESS / LOADED STATE */}
              {uiState === "success" && (
                <div className="w-full rounded-xl border border-emerald-500/30 bg-slate-950 p-6 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-300">
                      {content.category}
                    </span>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                      ⏱ {content.time}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white">
                    {content.serviceTitle}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    {content.authority}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-slate-800 pt-4">
                    {content.steps.map((step, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 text-xs text-slate-200 sm:text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
