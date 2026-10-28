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
	const isLoading = data.length === 0;

	const project = useMemo(() => {
		return data.find((p) => p.Slug === slug);
	}, [data, slug]);

	const dateFormatted = (date: string) => {
		const d = new Date(date);
		const day = String(d.getUTCDate()).padStart(2, "0");
		const month = String(d.getUTCMonth() + 1).padStart(2, "0");
		const year = d.getUTCFullYear();
		return `${day}/${month}/${year}`;
	};

	return (
		<main className="w-[95%] sm:w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto">
			<Header />
			<div className="h-fit p-2 sm:p-3 text-gray-500 bg-white mb-2 mx-auto rounded-xl shadow-sm">
				{isLoading ? (
					<div className="p-2">
						<p className="text-base sm:text-lg">Chargement...</p>
					</div>
				) : !project ? (
					<div className="p-2">
						<h2 className="text-xl sm:text-2xl font-bold mb-4">
							Projet non trouvé
						</h2>
						<Link href="/" className="flex mb-4 text-base sm:text-lg gap-1 items-center">
							<ArrowLeft className="size-5" />
							Retour à l&apos;accueil
						</Link>
					</div>
				) : (
					<div className="p-2">
						<Link href="/" className="flex mb-4 text-base sm:text-lg gap-1 items-center">
							<ArrowLeft className="size-5" />
							Retour à l&apos;accueil
						</Link>

						<div className="bg-gray-100 rounded-lg p-3 sm:p-5 mb-5">
							<h3 className="text-xl sm:text-2xl text-gray-600 text-montserrat flex my-auto items-center mb-5 text-left">
								<Dot className="size-8 sm:size-10 text-gray-300 shrink-0" />
								{project.Title || project.Slug}
							</h3>

							<div className="p-4 sm:p-5 bg-white rounded-lg mb-3">
								<h4 className="text-lg sm:text-xl font-bold mb-3">
									Description
								</h4>
								<div className="mb-4">
									<p className="text-base sm:text-lg mb-2">
										{project.Description}
									</p>
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
								{project.TechnoProject && project.TechnoProject.length > 0 && (
									<div className="mt-6">
										<h4 className="text-xl font-bold mb-3">
											Technos utilisées
										</h4>
										<ul className="list-disc list-inside space-y-2">
											{project.TechnoProject.map((techno, index) => (
												<li key={`${index}-${techno.Id}`}>
													{techno.Technos?.Name}
												</li>
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
