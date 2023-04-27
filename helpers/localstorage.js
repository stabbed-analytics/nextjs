const isLocalStorageAvailable = () => {
  var test = ".";
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

const isSessionStorageAvailable = () => {
  var test = ".";
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

const safeGetSessionStorageObject = (key) => {
  if (!isSessionStorageAvailable()) return null;

  return JSON.parse(localStorage.getItem(key) || "{}");
};

const safeSetSessionStorageObject = (key, data) => {
  if (!isSessionStorageAvailable()) return;

  localStorage.setItem(key, JSON.stringify(data));
};

const preventDuplicateRequest = (object, callback) => {
  const key = Object.stringify(object);

  if (safeGetSessionStorageObject(key)) return;

  safeSetSessionStorageObject(key, "1");
  callback?.();
};

const saveExperimentData = (name, data) => {
  safeSetLocalStorageObject(`Experiment: ${name}`, data);
};

const getSavedExperimentData = (name) => {
  return safeGetLocalStorageObject(`Experiment: ${name}`);
};

export { getSavedExperimentData, saveExperimentData, preventDuplicateRequest };
