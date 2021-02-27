import React from "react";
import Button from "./Button";

export default {
	title: "Button",
};

export const idle = () => <Button>Hello Button</Button>;

export const buttonWithText = () => (
	<Button>
		<span role="img" aria-label="cool button">
			add Text Here
		</span>
	</Button>
);

export const disabled = () => <Button disabled>Hello Button</Button>;
