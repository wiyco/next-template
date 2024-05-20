/**
 * Convert number to short string.
 * * 1000 -> 1K
 * * 1234 -> 1.2K
 * * 12345 -> 12.3K
 * * 123456 -> 123K
 * * 10^6 -> 1M
 * * 10^9 -> 1B
 * * 10^12 -> 1T
 * * 100 * 10^12 -> 100T
 * @param num - Number to convert
 * @returns Short string representation of the number
 */
function numToShortString(num: number): string {
  const numLength = num.toString().length;
  switch (numLength) {
    case 4:
    case 5:
      return `${(num / 1000).toFixed(1)}K`;
    case 6:
      return `${(num / 1000).toFixed(0)}K`;
    case 7:
    case 8:
      return `${(num / 1000000).toFixed(1)}M`;
    case 9:
      return `${(num / 1000000).toFixed(0)}M`;
    case 10:
    case 11:
      return `${(num / 1000000000).toFixed(1)}B`;
    case 12:
      return `${(num / 1000000000).toFixed(0)}B`;
    case 13:
    case 14:
      return `${(num / 1000000000000).toFixed(1)}T`;
    case 15:
      return `${(num / 1000000000000).toFixed(0)}T`;
    default:
      // Prevents overflow
      if (numLength > 15) return num.toExponential();
      // numLength < 4
      return num.toString();
  }
}

export { numToShortString };
