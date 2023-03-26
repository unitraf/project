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
 export  const getSeries = (objet) =>
    periodes.map((item, index) => {
      let series = [];
      let curPeriode = `${index + 1}/${exercice}`;
  
      if (Object.keys(objet).includes(curPeriode)) {
        return (series[index] = objet[curPeriode].length);
      } else {
        return (series[index] = 0);
      }
    });

    export const getTotal = (arr = [], key) =>
    arr.reduce((total, curr) => (total += parseInt(curr[key])), 0);

    export const getRegime = (regime)=>{
      switch (regime) {
        case '3000':
          return 'R'
          
        case '4000':
          return 'C'
          
        case '0000':
          return 'A'
          
      
        case '8000':
          return 'S'
        case '9900':
          return 'C'
        default:
          break;
      }
    }