"use client";
import { RiArrowRightSLine } from "@remixicon/react";
import { Dot } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useProject } from "../fetch/projet";
import { Button } from "./generic/button";

export function ProjectList() {
	const { data } = useProject();
	const [showAll, setShowAll] = useState<boolean>(false);

	const dataFiltered = useMemo(() => {
		return showAll ? data : data.slice(0, 3);
	}, [showAll, data]);

	return (
		<div className="bg-gray-100 rounded-lg p-3 sm:p-5 mb-5">
			<div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mb-5">
				<h3 className="text-xl sm:text-2xl text-gray-600 text-montserrat flex items-center text-left">
					<Dot className="size-8 sm:size-10 text-gray-300 shrink-0" />
					Mes expériences
				</h3>
				<Button
					className="bg-white border-black border hover:bg-gray-50 text-black w-full sm:w-auto"
					onClick={() => setShowAll(!showAll)}
				>
					{showAll ? "Voir moins" : "Voir plus"}
				</Button>
			</div>

			<div className="flex flex-col gap-3">
				{dataFiltered.map((item, index) => (
					<Link
						key={`${item.Id}-${index}`}
						href={`/${item.Slug}`}
						className="p-4 sm:p-5 bg-white rounded-lg flex gap-2 hover:ring-1 hover:ring-gray-400 cursor-pointer"
					>
						<div className="min-w-0 flex-1">
							<h4 className="first-letter:uppercase text-lg sm:text-xl font-bold">
								{item.Slug}
							</h4>
							<p className="truncate cursor-default text-sm sm:text-base">
								{item.Description}
							</p>
						</div>
						<div className="my-auto flex justify-end shrink-0">
							<RiArrowRightSLine className="size-6 sm:size-8" />
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
