"use client";
import { useCallback } from "react";
import { AUTH_TOKEN, URL_API } from "../vars/global";

type GetPayload = {
	path: string;
	queryString?: string;
	pathInfo?: string;
};

function get<T>({ path, queryString, pathInfo }: GetPayload): Promise<T> {
	const headers: Record<string, string> = {
		Authorization: `Bearer ${AUTH_TOKEN}`,
		"Content-Type": "application/json",
	};

	if (queryString) {
		headers["query-string"] = queryString;
	}
	if (pathInfo) {
		headers["path-info"] = pathInfo;
	}
	return fetch(`${URL_API}${path}`, {
		headers,
	}).then((res) => res.json());
}

export function useApi() {
	const getCb = useCallback(
		<T>(path: string, queryString?: string, pathInfo?: string): Promise<T> =>
			get<T>({ path, queryString, pathInfo }),
		[],
	);

	return {
		get: getCb,
	};
}
