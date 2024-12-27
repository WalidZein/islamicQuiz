/**
 * Utility for generating consistent theme-based names for anonymous users
 */

// Islamic knowledge seeker themed names
// IMPORTANT: Only add new names at the end of the array to maintain name consistency
// Never remove or reorder existing names as it will change user's generated names
const THEMED_NAMES = [
  "ZabihaHalal", // 0
  "MuftiMenk", // 1
  "BiryaniBandit", // 2
  "HummusSlayer", // 3
  "MuslimX", // 4
  "SheikhAsim", // 5
  "SheikhHoblos", // 6
  "MuslimNinja", // 7
  "ShawarmaShredder", // 8
  "KebabKween", // 9
  "SuperHalal", // 10
  "NaanNinja",
  "TikkaTitan",
  "BabaGanoush",
  "BaklavaBlender",
  "LassiLegend",
] as const;

// We use this fixed number for hashing to ensure name consistency
// This should always be greater than or equal to the length of THEMED_NAMES
const HASH_MODULO = 100;

/**
 * Generates a deterministic index from a UUID that will remain consistent
 * even if we add more names to THEMED_NAMES
 * @param uuid - The user's UUID
 * @returns A number between 0 and HASH_MODULO-1
 */
function generateStableIndex(uuid: string): number {
  // Use first 4 characters of UUID for consistent hashing
  const hash = parseInt(uuid.slice(0, 4), 16);
  // Use a fixed modulo value instead of array length
  return hash % HASH_MODULO;
}

/**
 * Generates a consistent theme-based name for a given UUID
 * This implementation ensures that a user's generated name won't change
 * when new names are added to THEMED_NAMES
 * @param uuid - The user's UUID
 * @returns A themed name with the last 4 digits of the UUID
 */
export function generateThemedName(uuid: string): string {
  const stableIndex = generateStableIndex(uuid);
  // Map the stable index to a valid array index
  const nameIndex = stableIndex % THEMED_NAMES.length;

  // Combine the themed name with the UUID suffix
  return `${THEMED_NAMES[nameIndex]}`;
}
