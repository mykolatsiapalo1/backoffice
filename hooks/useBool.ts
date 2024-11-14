import { useState } from "react";

export function useBool() {
  const [value, setValue] = useState<Record<string, boolean>>({});

  const toggleState = (key: string) => {
    setValue((prev) => ({ ...prev, [key]: !(prev[key] ?? false) }));
  };
  const getState = (key: string) => {
    return value[key] ?? false;
  };
  const changeState = (key: string, value: boolean) => {
    setValue((prev) => ({ ...prev, [key]: value }));
  };
  return {
    toggleState,
    getState,
    changeState,
  };
}
