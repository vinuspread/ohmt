export function formatWon(value: number) {
  return `${Math.round(value * 1000).toLocaleString("ko-KR")}원`;
}
