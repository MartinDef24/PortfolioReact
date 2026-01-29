"use client";
import { RiMoonLine, RiSunLine } from "@remixicon/react";
import { CircleUserRound, Home } from "lucide-react";
import { useCallback, useState } from "react";
import { Button } from "./generic/button";
export function Header() {
	const [icon, setIcon] = useState(<RiMoonLine className="size-8" />);
	const [darkMode, setDarkMode] = useState<boolean>(false);

	const handleDarkMode = useCallback(() => {
		setDarkMode(!darkMode);
		const html = document.documentElement;
		if (darkMode) {
			html.classList.add("dark");
			setIcon(<RiSunLine className="size-8" />);
		} else {
			html.classList.remove("dark");
			setIcon(<RiMoonLine className="size-8" />);
		}
	}, [darkMode]);

	return (
		<div className="bg-white w-2/5 p-5 rounded-xl m-auto my-5 flex justify-between shadow-sm">
			<div className="flex gap-2">
				<Button variant="neutral" mode="ghost" className="h-14 rounded-full">
					<Home className="size-8" />
				</Button>
				<Button variant="neutral" mode="ghost" className="h-14 rounded-full">
					<CircleUserRound className="size-8" />
				</Button>
			</div>
			<Button
				onClick={handleDarkMode}
				variant="neutral"
				mode="ghost"
				className="h-14 rounded-full"
			>
				{icon}
			</Button>
		</div>
	);
}
