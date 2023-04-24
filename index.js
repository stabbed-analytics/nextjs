import { getSavedExperimentData } from "@stabbed/nextjs/helpers/localstorage.js";
import Test from "./Test.js";
import Variant from "./Variant.js";

const conversion = (name) => {
  const data = getSavedExperimentData(name);
  const { name: variantName } = data;

  fetch(
    `https://stabbed.io/api/collect?w=${process.env.NEXT_PUBLIC_STABBED_WORKSPACE_ID}&e=${name}&v=${variantName}&g=1`
  );
};

export { Test, Variant, conversion };
