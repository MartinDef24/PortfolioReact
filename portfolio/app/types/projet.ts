export type Project = {
	Id: number;
	Title: string;
	Description: string;
	Start: string;
	End: string;
	Slug: string;
	Missions: Mission[];
	TechnoProject: TechnoProject[];
};

export type Mission = {
	Id: number;
	ProjectId: number;
	Description: string;
};

export type TechnoProject = {
	Id: number;
	ProjectId: number;
	TechnoId: number;
	Technos?: Techno;
};

export type Techno = {
	Id: number;
	Name: string;
};
