'use client'

import { type ComponentProps, useEffect, useState } from 'react'
import { ResponsiveContainer } from 'recharts'

type SafeResponsiveContainerProps = ComponentProps<typeof ResponsiveContainer>

export function SafeResponsiveContainer({ children, ...props }: SafeResponsiveContainerProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div aria-hidden="true" style={{ width: props.width ?? '100%', height: props.height ?? '100%' }} />
  }

  return <ResponsiveContainer {...props}>{children}</ResponsiveContainer>
}
