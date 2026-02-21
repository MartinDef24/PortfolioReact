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
		<main className="w-2/5 mx-auto max-xl:w-3/5 max-lg:w-4/5 max-md:w-9/10">
			<Header />
			<div className="h-fit p-2 text-gray-500 bg-white mb-2 rounded-xl shadow-sm">
				<div className="flex justify-between w-full mb-5 pt-6 pr-6 pl-2 items-center">
					<h1 className="flex text-2xl text-montserrat items-center">
						<Dot className="size-10 text-gray-300" />
						Développeur Web
					</h1>
					<StatusBadge status="completed" variant="light">
						<StatusBadgeDot />
						Ouvert aux opportunités
					</StatusBadge>
				</div>
				<div className="flex justify-between mb-5 p-6">
					<div className="flex flex-col gap-2">
						<h2 className="text-3xl font-bold text-black">
							Martin Defachelles
						</h2>
						<p className="text-lg mb-3">
							Je suis développeur Web. <br />
							Je travaille chez BattleKart
						</p>
						<div className="flex gap-3">
							<a href="mailto:martin.defachelles9@gmail.com">
								<Button className="bg-black hover:bg-gray-800 text-white w-fit">
									<ButtonIcon as={MessageCircle} className="size-4" />
									Me contacter
								</Button>
							</a>

							<Button
								onClick={handleCopy}
								className="bg-white border-black border hover:bg-gray-50 text-black"
							>
								<ButtonIcon as={Copy} className="size-4" />
								Mail
							</Button>
						</div>
					</div>
					<div className="p-3 bg-gray-50 w-fit rounded-full flex justify-end">
						<Image
							width={150}
							height={150}
							alt=""
							src={photoCV}
							className="rounded-full bg-gray-200"
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
