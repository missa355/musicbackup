export function getFromStorage(key) {
    if (!key) { //key is nu;;
      return null;
    }
    try {
      const valueStr = localStorage.getItem(key); //gets token(keys) from users local storage
      if (valueStr) {
        return JSON.parse(valueStr);
      }
      return null;
    } catch (err) {
      return null;
    }
  }
  export function setInStorage(key, obj) {
    if (!key) {
      console.error('Error: Key is missing');
    }
    try {
      localStorage.setItem(key, JSON.stringify(obj)); //strogfy is the inverse of json.parse
    } catch (err) {
      console.error(err);
    }
  }