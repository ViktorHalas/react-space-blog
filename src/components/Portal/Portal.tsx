import { memo, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

export const Portal = memo(({ children }: PortalProps) => {
  const container = document.getElementById("modal") as HTMLElement;
  return createPortal(children, container);
});
