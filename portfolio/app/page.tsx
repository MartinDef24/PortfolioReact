"use client";
import { Copy, Dot, MessageCircle } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import photoCV from "./assets/img/cv.png";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import { Button, ButtonIcon } from "./components/generic/button";
import { StatusBadge, StatusBadgeDot } from "./components/generic/status-badge";
import { Toaster } from "./components/generic/toast";
import { Header } from "./components/header";
import { ProjectList } from "./components/projets";

export default function Home() {
	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText("martin.defachelles9@gmail.com");
			toast.success("Adresse mail copié");
		} catch (e) {
			toast.error("Impossible de copier l'adresse mail.");
		}
	};

	return (
		<main className="w-[95%] sm:w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto">
			<Header />
			<div className="h-fit p-2 sm:p-3 text-gray-500 bg-white mb-2 rounded-xl shadow-sm">
				<div className="flex flex-col gap-3 sm:flex-row sm:justify-between w-full mb-5 pt-4 sm:pt-6 pr-3 sm:pr-6 pl-2 items-start sm:items-center">
					<h1 className="flex text-xl sm:text-2xl text-montserrat items-center">
						<Dot className="size-8 sm:size-10 text-gray-300 shrink-0" />
						Développeur Web
					</h1>
					<StatusBadge status="completed" variant="light" className="ml-2 sm:ml-0">
						<StatusBadgeDot />
						Ouvert aux opportunités
					</StatusBadge>
				</div>
				<div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-6 mb-5 p-4 sm:p-6">
					<div className="flex flex-col gap-2">
						<h2 className="text-2xl sm:text-3xl font-bold text-black">
							Martin Defachelles
						</h2>
						<p className="text-base sm:text-lg mb-3">
							Je suis développeur Web. <br />
							Je travaille chez BattleKart
						</p>
						<div className="flex flex-wrap gap-3">
							<Button
								asChild
								className="bg-black hover:bg-gray-800 text-white w-fit"
							>
								<a href="mailto:martin.defachelles9@gmail.com">
									<ButtonIcon as={MessageCircle} className="size-4" />
									Me contacter
								</a>
							</Button>

							<Button
								onClick={handleCopy}
								className="bg-white border-black border hover:bg-gray-50 text-black"
							>
								<ButtonIcon as={Copy} className="size-4" />
								Mail
							</Button>
						</div>
					</div>
					<div className="p-2 sm:p-3 bg-gray-50 w-fit rounded-full flex mx-auto sm:mx-0 sm:justify-end shrink-0">
						<Image
							width={150}
							height={150}
							alt=""
							src={photoCV}
							className="rounded-full bg-gray-200 size-28 sm:size-[150px]"
						/>
					</div>
				</div>
				<ProjectList />
				<About />
				<Footer />
			</div>
			<Toaster richColors />
		</main>
	);
}
