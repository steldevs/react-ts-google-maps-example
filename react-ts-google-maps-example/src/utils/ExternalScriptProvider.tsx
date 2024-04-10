import { useEffect, useState } from "react";
import { IGMapsApiStatus } from "../types";

export const useScript = (src: string) => {
  const [status, setStatus] = useState<IGMapsApiStatus>(src ? {status: "loading" }: {status: "idle" });
  useEffect(
    () => {
      if (!src) {
        setStatus({status: "loading" });
        return;
      }

      let script: any = document.querySelector(`script[src="${src}"]`);
      if (!script) {
        script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.setAttribute("data-status", "loading");
        document.body.appendChild(script);

        const setAttributeFromEvent = (event:any) => {
          script.setAttribute(
            "data-status",
            event.type === "load" ? "ready" : "error"
          );
        };
        script.addEventListener("load", setAttributeFromEvent);
        script.addEventListener("error", setAttributeFromEvent);
      } else {
        setStatus(script.getAttribute("data-status"));
      }

      const setStateFromEvent = (event:any) => {
        setStatus(event.type === "load" ? {status: "ready"} : {status :"error"});
      };

      script.addEventListener("load", setStateFromEvent);
      script.addEventListener("error", setStateFromEvent);

      return () => {
        if (script) {
          script.removeEventListener("load", setStateFromEvent);
          script.removeEventListener("error", setStateFromEvent);
        }
      };
    },
    [src, status] 
  );
  return status;
}
