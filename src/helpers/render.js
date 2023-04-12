import moment from "moment";

export const date =(date)=>date?moment(date).format("DD/MM/YY"):"#"
export const annee =(date)=>date?moment(date).format("YYYY"):"#"
export const anneeMois =(date)=>date?moment(date).format("YYYY-MM"):"#"
export const mois =(date)=>date?moment(date).format("DD/MM"):"#"
export const periode =(date)=>date?moment(date).format("M/YYYY"):"#"
export const numMois =(date)=>date?moment(date).format("MM"):"#"

export const nombre = (nombre)=> Math.round(parseFloat(nombre)).toLocaleString()

export const prefixe = (date) => date?(parseInt(moment(date).format('YYYY'))-1985)*10:"#"