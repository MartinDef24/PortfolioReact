"use client";

import { Dot } from "lucide-react";
import Image from "next/image";
import gaming from "../assets/img/hobbies/gaming.png";
import piano from "../assets/img/hobbies/piano.png";
import tennis from "../assets/img/hobbies/tennis.png";
import { ProgressBar } from "./generic/progress-bar";

export function About() {
	return (
		<div className="bg-gray-100 rounded-lg p-3 sm:p-5 mb-5">
			<h3 className="text-xl sm:text-2xl text-gray-600 text-montserrat flex my-auto items-center mb-5 text-left">
				<Dot className="size-8 sm:size-10 text-gray-300 shrink-0" />A propos de
				moi
			</h3>

			<div className="p-4 sm:p-5 bg-white rounded-lg mb-3">
				<h4 className="text-lg sm:text-xl font-bold mb-4">Mes compétences</h4>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					<div className="flex flex-col gap-3">
						<ProgressBar text="React" value={75} max={100} color="gray" />
						<ProgressBar text="Angular" value={70} max={100} color="gray" />
					</div>
					<div className="flex flex-col gap-3">
						<ProgressBar text="TypeScript" value={80} max={100} color="gray" />
						<ProgressBar text="JavaScript" value={85} max={100} color="gray" />
					</div>
					<div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
						<ProgressBar text="Tailwind" value={70} max={100} color="gray" />
						<ProgressBar text="HTML/CSS" value={90} max={100} color="gray" />
					</div>
				</div>
			</div>

			<div className="flex flex-col sm:flex-row gap-3">
				<div className="p-4 sm:p-5 bg-white rounded-lg w-full sm:w-2/3">
					<h4 className="text-lg sm:text-xl font-bold mb-2">Ma formation</h4>
					<p className="font-bold text-gray-600">Licence développement web</p>
					<p className="text-sm italic">2015-2019</p>
					<p className="text-sm">Lycée saint joseph, Boulogne-sur-mer</p>
				</div>
				<div className="p-4 sm:p-5 bg-white rounded-lg w-full sm:w-1/3">
					<h4 className="text-lg sm:text-xl font-bold mb-5">Mes hobbies</h4>
					<div className="flex gap-5">
						<Image alt="" width={30} src={tennis} />
						<Image alt="" width={30} src={piano} />
						<Image alt="" width={30} src={gaming} />
					</div>
				</div>
			</div>
		</div>
	);
}
