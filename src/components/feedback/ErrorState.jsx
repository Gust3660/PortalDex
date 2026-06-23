import { WifiOff } from 'lucide-react'

export function ErrorState({ message }) {
  return (
    <div className="rounded-3xl border border-rose-400/20 bg-rose-400/5 px-6 py-20 text-center">
      <WifiOff className="mx-auto text-rose-400" size={50} />
      <h2 className="mt-5 text-xl font-black text-white">Portal desconectado</h2>
      <p className="mt-2 text-sm text-slate-400">{message}</p>
    </div>
  )
}
