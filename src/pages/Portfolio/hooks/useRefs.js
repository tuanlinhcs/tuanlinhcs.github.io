import { useRef } from "react";

export function useMyCustomHook() {
  const myElementRef = useRef(null);

  return myElementRef;
}
