import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type Props = { children?: React.ReactNode };

/** Always scroll to the top on route (pathname) change */
export default function ScrollToTop({ children }: Props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return <>{children}</>;
}