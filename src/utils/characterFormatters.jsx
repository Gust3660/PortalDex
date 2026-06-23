export const statusStyles = {
  Alive: {
    label: 'Vivo',
    dot: 'bg-emerald-400',
    badge: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
  },
  Dead: {
    label: 'Muerto',
    dot: 'bg-rose-400',
    badge: 'border-rose-400/20 bg-rose-400/10 text-rose-300',
  },
  unknown: {
    label: 'Desconocido',
    dot: 'bg-slate-400',
    badge: 'border-slate-400/20 bg-slate-400/10 text-slate-300',
  },
}

export function getStatusStyle(status) {
  return statusStyles[status] ?? statusStyles.unknown
}

export function getEpisodeNumber(episodeUrl) {
  return episodeUrl.split('/').at(-1)
}
