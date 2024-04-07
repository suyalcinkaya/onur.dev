'use client'

import { useSyncExternalStore } from 'react'

const emptySubscribe = () => () => {}

export function ClientOnly({ fallback = null, children }) {
  const isServer = useSyncExternalStore(
    emptySubscribe,
    () => false,
    () => true
  )

  return isServer ? <>{fallback}</> : <>{children}</>
}
