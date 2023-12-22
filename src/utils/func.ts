import { SessionConfig } from "./types";

export function getRandomObjects<T>(data: T[] | undefined, count: number): T[] {
  if (data && data.length > 0) {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }

    return data.slice(0, count);
  }
  return [];
}

export const getStoredSessionConfig = (): SessionConfig => {
  const storedSessionConfig = localStorage.getItem("sessionConfig");
  return storedSessionConfig ? JSON.parse(storedSessionConfig) : null;
};
