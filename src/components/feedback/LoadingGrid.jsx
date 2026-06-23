export function LoadingGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }, (_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900"
        >
          <div className="aspect-square animate-pulse bg-slate-800" />
          <div className="space-y-3 p-5">
            <div className="h-3 w-20 animate-pulse rounded bg-slate-800" />
            <div className="h-6 w-4/5 animate-pulse rounded bg-slate-800" />
            <div className="h-4 w-full animate-pulse rounded bg-slate-800" />
            <div className="h-10 w-full animate-pulse rounded-xl bg-slate-800" />
          </div>
        </div>
      ))}
    </div>
  )
}
