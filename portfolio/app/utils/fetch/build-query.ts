export function buildQuery<T>({
	entity = "",
	fields,
	joinFields,
	joins,
	filters,
}: {
	entity?: string;
	fields?: (keyof T)[];
	joinFields?: string[];
	joins?: string[];
	filters?: string[];
}) {
	const parts: string[] = [];

	if (fields?.length) {
		parts.push(
			fields.map((field) => `fields=${entity}.${String(field)}`).join("&"),
		);
	}

	if (joinFields?.length) {
		parts.push(joinFields.map((joinfield) => `fields=${joinfield}`).join("&"));
	}

	if (joins?.length) {
		parts.push(joins.map((join) => `joins=${join}`).join("&"));
	}

	if (filters?.length) {
		parts.push(filters.map((filter) => `filters=${filter}`).join("&"));
	}

	return parts.join("&");
}
