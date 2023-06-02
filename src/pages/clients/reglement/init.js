import { v4 as uuid } from "uuid";
import moment from "moment";

export const reglement = {
    reference: "12345",
    date: moment(new Date()).format("YYYY-MM-DD"),
  uuid:uuid(),
    client: "",
    paiement: "",
    mode: "",
    montant: "",
    // (en attente, payé, en retard)
    status: "En attente",
  };