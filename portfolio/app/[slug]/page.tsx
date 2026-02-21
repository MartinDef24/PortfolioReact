"use client";

import { ArrowLeft, Dot } from "lucide-react";
import Link from "next/link";
import { use, useMemo } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { useProject } from "../fetch/projet";

export default function ProjectDetail({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = use(params);
	const { data } = useProject();

	const project = useMemo(() => {
		return data.find((p) => p.Slug === slug);
	}, [data, slug]);

	const dateFormatted = (date: string) => {
		return new Date(date).toLocaleDateString("fr-FR", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		});
	};

	return (
		<main className="w-2/5 mx-auto max-xl:w-3/5 max-lg:w-4/5 max-md:w-9/10">
			<Header />
			<div className="h-fit p-2 text-gray-500 bg-white mb-2 mx-auto rounded-xl shadow-sm">
				{!project ? (
					<div className="p-2">
						<h2 className="text-2xl font-bold mb-4">Projet non trouvé</h2>
						<Link href="/" className="flex mb-4 text-lg gap-1 items-center">
							<ArrowLeft className="size-5" />
							Retour à l'accueil
						</Link>
					</div>
				) : (
					<div className="p-2">
						<Link href="/" className="flex mb-4 text-lg gap-1 items-center">
							<ArrowLeft className="size-5" />
							Retour à l'accueil
						</Link>

						<div className="bg-gray-100 rounded-lg p-5 mb-5">
							<h3 className="text-2xl text-gray-600 text-montserrat flex my-auto items-center mb-5 text-left">
								<Dot className="size-10 text-gray-300" />
								{project.Title || project.Slug}
							</h3>

							<div className="p-5 bg-white rounded-lg mb-3">
								<h4 className="text-xl font-bold mb-3">Description</h4>
								<div className="mb-4">
									<p className="text-lg mb-2">{project.Description}</p>
								</div>

								{project.Missions && project.Missions.length > 0 && (
									<div className="mt-6">
										<h4 className="text-xl font-bold mb-3">Missions</h4>
										<ul className="list-disc list-inside space-y-2">
											{project.Missions.map((mission, index) => (
												<li
													// biome-ignore lint/security/noDangerouslySetInnerHtml: escape html
													dangerouslySetInnerHTML={{
														__html: mission.Description,
													}}
													key={`${index}-${mission.Id}`}
												></li>
											))}
										</ul>
									</div>
								)}
								<h4 className="text-xl font-bold mt-5">Période</h4>
								<p>
									{dateFormatted(project.Start)} -{" "}
									{project.End ? dateFormatted(project.End) : "En poste"}
								</p>
							</div>
						</div>
					</div>
				)}
				<Footer />
			</div>
		</main>
	);
}
