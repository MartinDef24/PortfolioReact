"use client";
import { CircleUserRound, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "./generic/button";
export function Header() {
	return (
		<div className="bg-white p-3 sm:p-5 rounded-xl m-auto my-3 sm:my-5 flex justify-between shadow-sm">
			<div className="flex gap-1 sm:gap-2">
				<Button
					asChild
					variant="neutral"
					mode="ghost"
					className="h-11 w-11 sm:h-14 sm:w-14 rounded-full"
				>
					<Link href="/">
						<Home className="size-6 sm:size-8" />
					</Link>
				</Button>
				<Button
					asChild
					variant="neutral"
					mode="ghost"
					className="h-11 w-11 sm:h-14 sm:w-14 rounded-full"
				>
					<Link href="/about">
						<CircleUserRound className="size-6 sm:size-8" />
					</Link>
				</Button>
			</div>
		</div>
	);
}
