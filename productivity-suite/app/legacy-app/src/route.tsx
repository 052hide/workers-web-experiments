import { getBus } from "piercing-library";
import { createContext,  useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RouteContext = createContext<undefined>(undefined);

export function RouteProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  useEffect(() => {
    return getBus().listen("href", (v: string) => {
      console.log({
        key: 'href',
        v
      })
      navigate(v);
    });
  }, []);

  return <RouteContext.Provider value={undefined}>{children}</RouteContext.Provider>;
}
