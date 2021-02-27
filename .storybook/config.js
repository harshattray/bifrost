import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../src/themes";
import styled from "styled-components";

configure(require.context("../src", true, /\.stories\.js$/), module);

addDecorator((story) => {
	return <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>;
});
