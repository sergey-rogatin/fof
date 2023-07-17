import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { Foo } from "./Foo/Foo";

const App = ({ children }) => <div>Hello world {children}</div>;

const root = createRoot(document.getElementById("react-root"));
root.render(
  <App>
    <Foo />
  </App>
);
