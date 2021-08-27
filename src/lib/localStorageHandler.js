const setLocalStorage = (itemName, item) => {
  localStorage.setItem(itemName, JSON.stringify(item));
};

const getLocalStorage = (itemName) => {
  const item = localStorage.getItem(itemName);
  if (item) return JSON.parse(item);
  else return [];
};

export { setLocalStorage, getLocalStorage };
