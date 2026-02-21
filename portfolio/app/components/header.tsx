"use client";
import { CircleUserRound, Home } from "lucide-react";
import { Button } from "./generic/button";
export function Header() {
	return (
		<div className="bg-white p-5 rounded-xl m-auto my-5 flex justify-between shadow-sm">
			<div className="flex gap-2">
				<Button variant="neutral" mode="ghost" className="h-14 rounded-full">
					<Home className="size-8" />
				</Button>
				<Button variant="neutral" mode="ghost" className="h-14 rounded-full">
					<CircleUserRound className="size-8" />
				</Button>
			</div>
		</div>
	);
}
