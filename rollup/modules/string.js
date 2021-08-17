// example editButton => edit-button
export let kebab = (str) => {

  str = str.replace(/_/, "-")
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      if (i > 0) {
        arr.push("-")
        if (arr[arr.length - 1] !== "-") {}
      }
      arr.push(str[i].toLowerCase());
    } else {
      arr.push(str[i])
    }
  }
  return arr.join("")
};