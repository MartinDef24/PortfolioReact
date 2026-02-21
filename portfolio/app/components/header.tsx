"use client";
import { CircleUserRound, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "./generic/button";
export function Header() {
	return (
		<div className="bg-white p-5 rounded-xl m-auto my-5 flex justify-between shadow-sm">
			<div className="flex gap-2">
				<Button
					asChild
					variant="neutral"
					mode="ghost"
					className="h-14 rounded-full"
				>
					<Link href="/">
						<Home className="size-8" />
					</Link>
				</Button>
				<Button variant="neutral" mode="ghost" className="h-14 rounded-full">
					<Link href="/about">
						<CircleUserRound className="size-8" />
					</Link>
				</Button>
			</div>
		</div>
	);
}
