export const photoRows = [4, 3, 4];

export const photos: string[] = Array.from(
  { length: 11 },
  (_, i) => `/photos/z${i + 1}.jpg`,
);
