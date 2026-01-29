export type Project = {
	Id: number;
	Title: string;
	Description: string;
	Start: string;
	End: string;
	Slug: string;
	Missions: Mission[];
};

export type Mission = {
	Id: number;
	ProjectId: number;
	Description: string;
};
