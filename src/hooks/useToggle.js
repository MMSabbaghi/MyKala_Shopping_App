import { useCallback, useState } from "react";

export default function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggleState = useCallback(() => setState((prev) => !prev), []);
  return [state, toggleState];
}
