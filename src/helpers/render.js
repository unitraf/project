import moment from "moment";

export const date = (date) => (date ? moment(date).format("DD/MM/YY") : "#");
export const annee = (date) => (date ? moment(date).format("YYYY") : "#");
export const anneeMois = (date) =>
  date ? moment(date).format("YYYY-MM") : "#";
export const mois = (date) => (date ? moment(date).format("DD/MM") : "#");
export const periode = (date) => (date ? moment(date).format("M/YYYY") : "#");
export const numMois = (date) => (date ? moment(date).format("MM") : "#");

export const nombre = (nombre) =>
  Math.round(parseFloat(nombre)).toLocaleString();

export const prefixe = (date, numeroDossier = 0) => {
  let nb = numeroDossier.length;

  switch (nb) {
    case 1:
      return date
        ? `${
            (parseInt(moment(date).format("YYYY")) - 1985) * 10
          }/00${numeroDossier}`
        : "#";

    case 2:
      return date
        ? `${
            (parseInt(moment(date).format("YYYY")) - 1985) * 10
          }/0${numeroDossier}`
        : "#";

    default:
      return date ? (parseInt(moment(date).format("YYYY")) - 1985) * 10 : "#";
  }
};
export const codeDouane = (code) => {
  let nb = code.length;

  switch (nb) {
    case 1:
      return `NE00${code}`
      

    case 2:
      return `NE0${code}`
    default:
      return  `NE${code}`
  }
};

export const referenceDdu = (regime,numero ) => {
    switch (regime) {
      case "3000":
        return `R${numero}`;
  
      case "4000":
        return `C${numero}`;
  
      case "0000":
        return `A${numero}`;
  
      case "8000":
        return `S${numero}`;
      case "9900":
        return `C${numero}`;
      default:
        return numero
    }
  };