import { useEffect } from "react";

export function News() {
  useEffect(() => {
    return () => {
      // @ts-ignore
      window.e = window._$HY = null;

      // @ts-ignore
      window.t = function () {};
    };
  });

  return (
    <div>
      <piercing-fragment-outlet fragment-id="news" />
    </div>
  );
}
