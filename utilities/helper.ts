export function isSorted(arr: number[], order: "asc" | "desc" = "asc"): boolean {
  return arr.every((val, i, array) => {
    if (i === 0) return true;
    return order === "asc" ? array[i - 1] <= val : array[i - 1] >= val;
  });
}
