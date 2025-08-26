/**
 * Your function must create a new array with all X last bits of the given array of 8 bits arrays
 * For instance, for X=2 and this input:
 * [[1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 1, 0, 1]]
 * Your output should be:
 * [                   0, 0,                     0, 1]
 * If the number of last bits to extract is greater than 8, it should just concat all 8-bits arrays
 * @param bitsArrays is a 2D array containing all 8-bits arrays to extract last bits from
 * @param extractCount is the number of last bits to extract
 * @returns an array of extracted bits
 */

export default function (
  bitsArrays: (1 | 0)[][],
  extractCount: number
): (1 | 0)[] {
  const extractedBits: (1 | 0)[] = [];
  return extractedBits;
}
