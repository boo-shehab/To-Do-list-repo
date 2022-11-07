/* eslint-disable class-methods-use-this */
export default class localStorageList {
  git(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  sit(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }
}