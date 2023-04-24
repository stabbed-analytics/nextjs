import { getSavedExperimentData } from "./helpers/localstorage";
import Test from "./Test";
import Variant from "./Variant";

const conversion = (name) => {
  const data = getSavedExperimentData(name);
  const { name: variantName } = data;

  fetch(
    `https://stabbed.io/api/collect?w=${process.env.NEXT_PUBLIC_STABBED_WORKSPACE_ID}&e=${name}&v=${variantName}&g=1`
  );
};

export { Test, Variant, conversion };
