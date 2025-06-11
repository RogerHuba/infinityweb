"use client";

import { type ReactNode, useEffect, useState } from "react";

interface ClientBodyProps {
  children: ReactNode;
}

export function ClientBody({ children }: ClientBodyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <>{children}</>;
}
