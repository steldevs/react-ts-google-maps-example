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
        let newScript = document.createElement("script");
        newScript.src = src;
        newScript.async = true;
        newScript.setAttribute("data-status", "loading");
        document.body.appendChild(newScript);

        const setAttributeFromEvent = (event:any) => {
          newScript.setAttribute(
            "data-status",
            event.type === "load" ? "ready" : "error"
          );
        };
        newScript.addEventListener("load", setAttributeFromEvent);
        newScript.addEventListener("error", setAttributeFromEvent);
        script = newScript;
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
    [src] 
  );
  return status;
}
