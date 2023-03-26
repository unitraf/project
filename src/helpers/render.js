import moment from "moment";

export const date =(date)=>moment(date).format("DD/MM/YY")
export const annee =(date)=>moment(date).format("YYYY")
export const mois =(date)=>moment(date).format("DD/MM")
export const periode =(date)=>moment(date).format("M/YYYY")
export const numMois =(date)=>moment(date).format("MM")

export const nombre = (nombre)=> parseInt(nombre).toLocaleString()