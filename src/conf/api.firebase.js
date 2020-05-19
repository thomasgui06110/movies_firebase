import * as axios from "axios";

const apiFirebase = axios.create({
  baseURL: "https://filmsdyma.firebaseio.com/",
});

export default apiFirebase;
