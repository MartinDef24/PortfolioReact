"use client";

import type * as React from "react";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
	return (
		<Sonner
			className="toaster group"
			toastOptions={{
				classNames: {
					toast:
						"bg-success-lighter text-success-base border border-green-500 shadow-lg rounded-2xl",
					description: "text-success-base",
					actionButton: "bg-success-lighter text-white",
					cancelButton: "bg-success-lighter text-success-base",
				},
			}}
			{...props}
		/>
	);
};

export { Toaster };
