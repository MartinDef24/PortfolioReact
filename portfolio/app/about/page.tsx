"use client";

import { ArrowLeft, Dot } from "lucide-react";
import Link from "next/link";
import { About } from "../components/about";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export default function AboutPage() {
	return (
		<main className="w-[95%] sm:w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto">
			<Header />
			<div className="h-fit p-2 sm:p-3 text-gray-500 bg-white mb-2 rounded-xl shadow-sm">
				<div className="p-2">
					<Link href="/" className="flex mb-4 text-base sm:text-lg gap-1 items-center">
						<ArrowLeft className="size-5" />
						Retour à l&apos;accueil
					</Link>
				</div>
				<div className="bg-gray-100 rounded-lg p-3 sm:p-5 mb-5">
					<h3 className="text-xl sm:text-2xl text-gray-600 text-montserrat flex my-auto items-center mb-5 text-left">
						<Dot className="size-8 sm:size-10 text-gray-300 shrink-0" />
						Je suis Martin Defachelles
					</h3>
					<p className="text-base sm:text-lg mb-3 text-left sm:text-justify">
						Fort de 5 ans d&apos;expérience et basé à Villeneuve d&apos;Ascq, je
						conçois des interfaces où la performance technique rencontre
						l&apos;ergonomie. Spécialisé dans l&apos;écosystème Angular et
						TypeScript, j&apos;aime transformer des besoins complexes en
						solutions fluides.
						<br />
						Sur mon temps libre, je développe mes propres outils (comme un
						gestionnaire de recettes ou un Pokédex) pour explorer de nouvelles
						technos. Curieux par nature, je nourris ma créativité entre un match
						de tennis, une session de piano ou une partie de jeu de société.
					</p>
				</div>
				<About />
				<Footer />
			</div>
		</main>
	);
}
