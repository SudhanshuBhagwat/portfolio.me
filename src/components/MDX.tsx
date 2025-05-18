import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

let components = {};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
