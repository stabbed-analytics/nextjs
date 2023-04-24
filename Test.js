import { saveExperimentData } from "./helpers/localstorage";
import { useEffect, useState } from "react";

const randomInt = (number) => {
  return Math.floor(Math.random() * number);
};

const Experiment = ({ name, children }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const nChildren = children.length;
  const [variantIndex, setVariantIndex] = useState(randomInt(nChildren));

  const chosenVariant = children[variantIndex];

  const variantName =
    chosenVariant.props?.name || `Variant ${variantIndex + 1}`;

  useEffect(() => {
    setIsHydrated(true);

    fetch(
      `https://stabbed.io/api/collect?w=${process.env.NEXT_PUBLIC_STABBED_WORKSPACE_ID}&e=${name}&v=${variantName}`
    );
  }, []);

  saveExperimentData(name, {
    name: variantName,
    index: variantIndex,
  });

  return isHydrated ? chosenVariant : null;
};

export default Experiment;
