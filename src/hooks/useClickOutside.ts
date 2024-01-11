import { useEffect } from 'react'

export default function useClickOutside(
  outsideRef: React.RefObject<HTMLDivElement>,
  itemRef: React.RefObject<any>,
  close: () => void
) {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        !outsideRef.current?.contains(e.target as Node) &&
        !itemRef.current.contains(e.target as Node)
      )
        close()
    }

    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])
}
