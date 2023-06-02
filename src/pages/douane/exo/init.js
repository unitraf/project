import moment from "moment";
import { v4 as uuid } from "uuid";
export const exo = {
  uuid: uuid(),
  date: moment(new Date()).format("YYYY-MM-DD"),

  code: "",
  numero: "",
  emission: moment(new Date()).format("YYYY-MM-DD"),

  expiration: moment(new Date()).add(3,'M').format("YYYY-MM-DD"),

  lieu: "",
  beneficiaire: {nom:""},
  details: [],
};

export const article = {
quantite:"",
designation:"",
position:"",
valeur:""
}
