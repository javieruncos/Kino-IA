import { useSyncExternalStore } from "react";

function subscribeDesktop(callback, queryText = "(min-width: 1024px)") {
  const query = window.matchMedia(queryText);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getDesktopSnapshot(queryText = "(min-width: 1024px)") {
  return window.matchMedia(queryText).matches;
}

export default function useIsDesktop(
  queryText = "(min-width: 1024px)",
) {
  return useSyncExternalStore(
    (callback) => subscribeDesktop(callback, queryText),
    () => getDesktopSnapshot(queryText),
    () => false,
  );
}
