import { Dot } from "lucide-react";
import Image from "next/image";
import github from "../assets/img/github.png";

export function Footer() {
	return (
		<div className="bg-gray-100 rounded-lg px-3 py-4">
			<div className="flex justify-between pl-2">
				<h3 className="text-2xl text-gray-600 text-montserrat flex my-auto items-center">
					<Dot className="size-10 text-gray-300" />
					Suivez moi
				</h3>
				<a
					className="flex"
					target="_blank"
					href="https://github.com/MartinDef24"
					rel="noopener"
				>
					<Image
						alt=""
						width={30}
						height={15}
						className="rounded-full my-auto"
						src={github}
					/>
				</a>
			</div>
		</div>
	);
}
