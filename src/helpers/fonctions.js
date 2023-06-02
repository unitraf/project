import randomstring from 'randomstring';
import moment from "moment";
const exercice = "2023";
const periodes = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
export const groupBy = (arr = [], key) => {
  return (
    arr.length &&
    arr.reduce((acc, curr) => {
      const attribut = curr[key];

      acc[attribut] = [...(acc[attribut] || []), curr];
      return acc;
    }, {})
  );
};
export const getSeries = (objet) =>
  periodes.map((item, index) => {
    let series = [];
    let curPeriode = `${index + 1}/${exercice}`;

    if (Object.keys(objet).includes(curPeriode)) {
      return (series[index] = objet[curPeriode].length);
    } else {
      return (series[index] = 0);
    }
  });
  export const nombre = (nombre) =>
  Math.round(parseFloat(nombre)).toLocaleString();

export const getTotal = (arr = [], key) =>
  arr.reduce((total, curr) => (total += parseFloat(`${curr[key]}`.replace(/\s/g, ""))), 0);

export const getRegime = (regime) => {
  switch (regime) {
    case "3000":
      return "R";

    case "4000":
      return "C";

    case "0000":
      return "A";

    case "8000":
      return "S";
    case "9900":
      return "C";
    default:
      break;
  }
};

export const addClassName = (content, className) => {
  document.getElementsByClassName(content)[0].classList.add(className)

}
export const removeClassName = (content, className) => {
  document.getElementsByClassName(content)[0].classList.remove(className)

}

export const generateSecef = () => {
  const options = { length: 4, charset: "alphanumeric", capitalization: "uppercase" }
  let actual = new Date()
  let nim = "IC01000228-1"
  let date = moment(actual).format("YYYY-MM-DD")
  let heure = moment(actual).format("HH:mm")
  let seconde = moment(actual).format("ss")
  let format = ["xxxx", "xxxx", "xxxx", "xxxx", "xxxx", "xxxx"].map(c => randomstring.generate(options))
 let code = `${format.toString()}`.replace(/[,]/g, "-")
  return { code, nim, date, heure, seconde }
}
