import { Dot } from "lucide-react";
import Image from "next/image";
import github from "../assets/img/github.png";
import linkedin from "../assets/img/linkedin.png";

export function Footer() {
	return (
		<div className="bg-gray-100 rounded-lg px-3 py-4">
			<div className="flex justify-between items-center pl-1 sm:pl-2 gap-2">
				<h3 className="text-xl sm:text-2xl text-gray-600 text-montserrat flex my-auto items-center">
					<Dot className="size-8 sm:size-10 text-gray-300 shrink-0" />
					Suivez moi
				</h3>
				<div className="flex gap-3 shrink-0">
					<a
						className="flex"
						target="_blank"
						href="https://www.linkedin.com/in/defachelles-martin/"
						rel="noopener"
					>
						<Image
							alt=""
							width={30}
							height={30}
							className="rounded-full my-auto size-[30px] w-auto h-auto"
							src={linkedin}
						/>
					</a>
					<a
						className="flex"
						target="_blank"
						href="https://github.com/MartinDef24"
						rel="noopener"
					>
						<Image
							alt=""
							width={30}
							height={30}
							className="rounded-full my-auto size-[30px] w-auto h-auto"
							src={github}
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
