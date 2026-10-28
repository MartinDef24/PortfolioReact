import clsx, { type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

export type { ClassValue } from "clsx"

export const twMergeConfig = {
	extend: {},
}

const customTwMerge = extendTailwindMerge(twMergeConfig)

/**
 * Utilizes `clsx` with `tailwind-merge`, use in cases of possible class conflicts.
 */
export function cn(...classes: ClassValue[]) {
	return customTwMerge(clsx(...classes))
}
