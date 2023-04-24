const isLocalStorageAvailable = () => {
  var test = "test";
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

const safeGetLocalStorageObject = (key) => {
  if (!isLocalStorageAvailable()) return null;

  return JSON.parse(localStorage.getItem(key) || "{}");
};

const safeSetLocalStorageObject = (key, data) => {
  if (!isLocalStorageAvailable()) return;

  localStorage.setItem(key, JSON.stringify(data));
};

const saveExperimentData = (name, data) => {
  safeSetLocalStorageObject(`Experiment: ${name}`, data);
};

const getSavedExperimentData = (name) => {
  return safeGetLocalStorageObject(`Experiment: ${name}`);
};

export { getSavedExperimentData, saveExperimentData };
