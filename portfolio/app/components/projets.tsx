"use client";
import { RiArrowRightSLine } from "@remixicon/react";
import { Dot } from "lucide-react";
import { useMemo, useState } from "react";
import { useProject } from "../fetch/projet";
import { Button } from "./generic/button";

export function ProjectList() {
	const { data } = useProject();
	const [showAll, setShowAll] = useState<boolean>(false);

	const dataFiltered = useMemo(() => {
		if (showAll) {
			return data;
		} else {
			return data.slice(0, 3);
		}
	}, [showAll, data]);

	return (
		<div className="bg-gray-100 rounded-lg p-5 mb-5">
			<div className="flex justify-between">
				<h3 className="text-2xl text-gray-600 text-montserrat flex my-auto items-center mb-5 text-left">
					<Dot className="size-10 text-gray-300" />
					Mes expériences
				</h3>
				<Button
					className="bg-white border-black border hover:bg-gray-50 text-black"
					onClick={() => setShowAll(!showAll)}
				>
					{showAll ? "Voir moins" : "Voir plus"}
				</Button>
			</div>

			<div className="flex flex-col gap-3">
				{dataFiltered.map((item) => (
					<div
						key={item.Id}
						className="p-5 bg-white rounded-lg flex hover:ring-1 hover:ring-gray-400"
					>
						<div className="w-9/10">
							<h4 className="first-letter:uppercase text-xl font-bold">
								{item.Slug}
							</h4>
							<p className="truncate cursor-default">{item.Description}</p>
						</div>
						<div className="my-auto flex justify-end w-1/10">
							<RiArrowRightSLine className="size-8" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
