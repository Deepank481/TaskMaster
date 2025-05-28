export default function SaveOrRetrieve(ins, data = []) {
  if (ins === "save") {
    localStorage.setItem("data", JSON.stringify(data));
  } else if (ins === "ret") {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data === undefined || data === null) {
      return [];
    } else {
      return data;
    }
  }
}
