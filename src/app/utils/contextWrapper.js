import React from "react";

export const contextWrapper =
    (...wrappers) =>
    ({ children }) =>
        wrappers.reduceRight(
            (rendered, Component) => <Component>{rendered}</Component>,
            children
        );
