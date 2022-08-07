import preprocess from "svelte-preprocess";
import sass from "sass";

const config = {
  preprocess: preprocess({
    sass,
  }),
};

export default config;
