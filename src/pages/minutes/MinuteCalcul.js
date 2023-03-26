import React from "react";

const MinuteCalcul = (props) => {
  const { minute, setMinute } = props;
  const { valeur, baseTva,   droits } = minute;
  const baseItem = (item) =>
    Object.keys(item)[0] === "DA"
      ? minute.poids && parseInt(minute.poids)
      : Object.keys(item)[0] === "TVA"
      ? Math.round(baseTva + valeur)
      : valeur

  const montantItem = (item) =>
    Object.keys(item)[0] === "DA"
      ? minute.poids &&
        Math.round(
          parseInt(minute.poids) * Object.values(item)[0]
        )
      : Object.keys(item)[0] === "TVA"
      ? Math.round(
          (Object.values(item)[0] * (baseTva + valeur)) / 100
        )
      : Math.round((Object.values(item)[0] * valeur) / 100);
      
    


const handleCheckedTauxEntree = (e, item) => {
    let updateEntree = minute.imposition.entree.map((type) => {
      if (Object.keys(type)[0] === Object.keys(item)[0]) {
        switch (Object.keys(item)[0]) {
          case "DA":
            let montantDA = e.target.checked
              ? Object.values(item)[0] * minute.poids
              : 0;
            return { ...item, checked: e.target.checked, montant: montantDA };

          case "TVA":
            let montantTVA = e.target.checked
              ? (Object.values(item)[0] * (valeur + baseTva)) / 100
              : 0;
            return { ...item, checked: e.target.checked, montant: montantTVA };

          default:
            let montant = e.target.checked
              ? (Object.values(item)[0] * valeur) / 100
              : 0;
            return { ...item, checked: e.target.checked, montant };
        }
      }
      return type;
    });
    let imposition = { ...minute.imposition, entree: updateEntree };

    setMinute({ ...minute, imposition });
  };
  const handleCheckedTauxSortie = (e, item) => {
    let updateSortie = minute.imposition.sortie.map((type) => {
      if (Object.keys(type)[0] === Object.keys(item)[0]) {
        let montant = e.target.checked
          ? (Object.values(item)[0] * valeur) / 100
          : 0;

        return { ...item, checked: e.target.checked, montant };
      }
      return type;
    });
    let imposition = { ...minute.imposition, sortie: updateSortie };

    setMinute({ ...minute, imposition });
  };
  

   
  return (
      <fieldset className="col-12 fieldset">
          <legend style={{ marginTop: -15, fontStyle:"italic" }}>Calcul des Impositions</legend>
      {valeur?
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Base</th>
            <th>Taux</th>
            <th>Montant</th>
          </tr>
        </thead>
        
        <tbody>
          {minute.imposition &&
            minute.regime !== "3000" &&
            minute.imposition.entree.map((item, index) => (
              <tr key={index}>
         
                <td>
                  <input
                    name="check"
                    type="checkbox"
                    checked={Object.values(item)[1]}
                    onChange={(e) => handleCheckedTauxEntree(e, item)}
                    style={{cursor:"pointer",marginTop:3}}
                  />
                </td>
                <td>{Object.keys(item)[0]}</td>
                <td>{baseItem(item)}</td>
                <td>{Object.values(item)[0]}</td>
                <td>{montantItem(item)}</td>
              </tr>
            ))}
          {minute.imposition &&
            minute.regime === "3000" &&
            minute.imposition.sortie.map((item, index) => (
              <tr key={index}>
                {console.log(item)}
                <td>
                  <input
                    name="check"
                    type="checkbox"
                    style={{cursor:"pointer", marginTop:3}}
                    checked={Object.values(item)[1]}
                    onChange={(e) => handleCheckedTauxSortie(e, item)}
                  />
                </td>
                <td>{Object.keys(item)[0]}</td>
                <td>{valeur.toLocaleString()}</td>
                <td>{Object.values(item)[0]}</td>
                <td>
                  {
                     Math.round(
                        (Object.values(item)[0] / 100) * valeur
                      ).toLocaleString()
                    }
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>Total</td>
            <td>{Math.round(droits).toLocaleString()}</td>
          </tr>
        </tfoot>
      </table>:""
    }
    </fieldset>
  );
};

export default MinuteCalcul;
