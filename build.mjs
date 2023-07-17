import esbuild from "esbuild";
import { html } from "@esbuilder/html";
import CssModulesPlugin from "esbuild-css-modules-plugin";

async function watch() {
  const ctx = await esbuild.context({
    entryPoints: ["src/index.html"],
    outdir: "build",
    loader: { ".ts": "ts" },
    bundle: true,
    plugins: [
      html({
        serve: true,
      }),
      CssModulesPlugin(),
    ],
    metafile: true,
    assetNames: "[name]",
    sourcemap: true,
    minify: false,
  });

  ctx.watch();

  await ctx.serve({
    servedir: "build",
    port: 8080,
  });
}

watch();
