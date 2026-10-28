"use client";

import { ArrowLeft, Dot } from "lucide-react";
import Link from "next/link";
import { About } from "../components/about";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export default function AboutPage() {
	return (
		<main className="w-2/5 mx-auto max-xl:w-3/5 max-lg:w-4/5 max-md:w-9/10">
			<Header />
			<div className="h-fit p-2 text-gray-500 bg-white mb-2 rounded-xl shadow-sm">
				<div className="p-2">
					<Link href="/" className="flex mb-4 text-lg gap-1 items-center">
						<ArrowLeft className="size-5" />
						Retour à l'accueil
					</Link>
				</div>
				<div className="bg-gray-100 rounded-lg p-5 mb-5">
					<h3 className="text-2xl text-gray-600 text-montserrat flex my-auto items-center mb-5 text-left">
						<Dot className="size-10 text-gray-300" />
						Je suis Martin Defachelles
					</h3>
					<p className="text-lg mb-3 text-justify">
						Fort de 5 ans d'expérience et basé à Villeneuve d'Ascq, je conçois
						des interfaces où la performance technique rencontre l'ergonomie.
						Spécialisé dans l'écosystème Angular et TypeScript, j'aime
						transformer des besoins complexes en solutions fluides.
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
