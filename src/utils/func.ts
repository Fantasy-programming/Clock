export function getRandomObjects<T>(data: T[] | undefined, count: number): T[] {
  if (data && data.length > 0) {
    // Fisher-Yates shuffle algorithm
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }

    return data.slice(0, count);
  } else {
    return [];
  }
}
