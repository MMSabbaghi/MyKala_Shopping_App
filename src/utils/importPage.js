import { lazy } from "react";

export default function importPage(cb) {
  return lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(cb()), 300);
    });
  });
}
