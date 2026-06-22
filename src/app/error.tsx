'use client';
import ErrorOverlay from "@/components/ui/ErrorOverlay";

export default function Error({ reset }: { reset: () => void }) {

  return <ErrorOverlay reset={reset} />;
  
}