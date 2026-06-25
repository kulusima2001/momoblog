import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

type ScrollLocationState = {
  preserveScroll?: boolean;
  restoreScrollY?: number;
};

export function ScrollToTop() {
  const { pathname, state } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const locationState = state as ScrollLocationState | null;

    if (locationState?.preserveScroll) {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: locationState.restoreScrollY ?? 0, left: 0, behavior: "auto" });
      });

      return;
    }

    if (navigationType !== "PUSH") {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [navigationType, pathname, state]);

  return null;
}
