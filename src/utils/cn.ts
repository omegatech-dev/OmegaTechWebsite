type ClassValue = string | number | bigint | boolean | null | undefined | ClassValue[];

/** Joins truthy class names, ignoring empty strings and non-string values. */
export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat()
    .filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
    .join(' ');
}
