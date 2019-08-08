import qs from "qs";

export function what(s: string) {
  console.log(qs.stringify({ x: s }));
}
