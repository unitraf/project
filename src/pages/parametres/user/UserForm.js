import React from 'react'
import { Form, useLocation, useNavigate } from 'react-router-dom';

const UserForm = (props) => {
   const  {user}=props
   const navigate = useNavigate()

  return (
    <Form method="post" id="user-form">
          {/* ligne 1 */}
          <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
            <div className="inputBox col-2">
              <input
                type="number"
                name="id"
                autoComplete="off"
                defaultValue={user.id}
                required
              />

              <label htmlFor={"id"}>Id</label>
            </div>
            <div className="inputBox col-9">
              <input
                type="text"
                name="nom"
                autoComplete="off"
                defaultValue={user.nom}
                required
              />
              <label htmlFor={"nom"}>Nom</label>
            </div>
            <div className="inputBox col-9">
              <input
                type="text"
                name="prenom"
                autoComplete="off"
                defaultValue={user.prenom}
                required
              />
              <label htmlFor={"prenom"}>prenom</label>
            </div>
          </div>
          {/* ligne 2 */}
          <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
            <div className="inputBox col-2">
              <input
                type="email"
                name="email"
                autoComplete="off"
                defaultValue={user.email}
              />

              <label htmlFor={"email"}>Email</label>
            </div>
            <div className="inputBox col-3">
              <input
                type="password"
                name="password"
                autoComplete="off"
                defaultValue={user.password}
               
              />
              <label htmlFor={"password"}>password</label>
            </div>
            <div className="inputBox col-6">
              <input
                type="text"
                name="fonction"
                autoComplete="off"
                defaultValue={user.fonction}
              />
              <label htmlFor={"fonction"}>fonction</label>
            </div>
          </div>
          {/* ligne 3 */}

          <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
            <div className="inputBox col-5">
              <input
                type="text"
                name="priviliege"
                autoComplete="off"
                defaultValue={user.priviliege}
              />

              <label htmlFor={"priviliege"}>priviliege</label>
            </div>
            
            <div className="inputBox col-2">
              <input type="text" name="status" defaultValue={user.status} />
              <label htmlFor={"status"}>status</label>
            </div>

           
          </div>
          {/* Buutton */}
          <div>
            <button className="button" type="submit">
              Valider
            </button>

            <button
              className="button"
              type="button"
              onClick={() => {
                navigate(-1);
              }}
            >
              Annuler
            </button>
          </div>
        </Form>
  )
}

export default UserForm