import { useCallback, useEffect, useState } from "react";
import type { Project } from "../types/projet";
import { buildQuery } from "../utils/fetch/build-query";
import { useApi } from "./api";

export function useProject() {
	const [data, setData] = useState<Project[]>([]);
	const { get } = useApi();

	const getData = useCallback(async () => {
		await get<{ Projects: Record<string, Project> }>(
			"/Projects",
			buildQuery<Project>({
				entity: "Projects",
				fields: ["Title", "Description", "Start", "End", "Slug"],
				joins: ["Missions", "TechnoProject,Technos"],
				joinFields: ["Missions.Description", "Technos.Name"],
			}),
		)?.then((res) => {
			if (res?.Projects) setData(Object.values(res.Projects));
		});
	}, [get]);

	useEffect(() => {
		getData();
	}, [getData]);

	const getProjectBySlug = useCallback(
		async (slug: string) => {
			await getData();
			return data.find((p) => p.Slug === slug);
		},
		[getData, data],
	);

	return { data, getProjectBySlug };
}
