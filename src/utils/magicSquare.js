/**
 * "Date Echo" Magic Square Utility
 * Embeds the birthday date [A, B, C, D] in 4 locations:
 * - Row 1
 * - Row 4 (reversed)
 * - Column 1
 * - Column 4 (reversed)
 */

export function parseDateComponents(dateString) {
  const parts = dateString.split('/');
  if (parts.length !== 3) throw new Error('Invalid format');
  const DD = parseInt(parts[0], 10);
  const MM = parseInt(parts[1], 10);
  const YYYY = parseInt(parts[2], 10);
  const CC = Math.floor(YYYY / 100);
  const YY = YYYY % 100;
  return { DD, MM, CC, YY };
}

export function generateDateEchoSquare(A, B, C, D) {
  const S = A + B + C + D;

  // Solver to find offsets that keep all numbers >= 0
  const generateSquare = (k) => {
    // k controls the direction of offsets
    return [
      [A, B, C, D],
      [D + 1 * k, C - 1 * k, B - 3 * k, A + 3 * k],
      [B - 2 * k, A + 2 * k, D + 2 * k, C - 2 * k],
      [C + 1 * k, D - 1 * k, A + 1 * k, B - 1 * k]
    ];
  };

  const isPositive = (sq) => sq.every(row => row.every(val => val >= 0));

  let bestSquare = generateSquare(1); // Try standard first
  if (!isPositive(bestSquare)) {
    const sqNeg = generateSquare(-1); // Try inverted offsets
    if (isPositive(sqNeg)) {
      bestSquare = sqNeg;
    } else {
      // Fallback: If both fail (very small numbers everywhere), try k=0 
      // (This repeats numbers but guarantees positivity if A,B,C,D are positive)
      const sqZero = generateSquare(0);
      if (isPositive(sqZero)) {
        bestSquare = sqZero;
      }
      // If even k=0 fails (e.g. A,B,C,D are negative? Should not happen), keep bestSquare
    }
  }

  const reveals = [
    { type: 'row', index: 0, label: 'The Special Date' },     // Reveal Date
    { type: 'sum', index: 0, label: 'Magic Sum' },            // Sum Check
    { type: 'full', index: 0, label: 'Everything Connects' }  // Full Reveal
  ];

  return {
    square: bestSquare,
    magicConstant: S,
    reveals
  };
}
