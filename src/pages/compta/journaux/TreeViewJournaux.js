import React from "react";
import TreeView, { expand } from "../../../components/treeview/TreeView";
import Journal from "./journal/Journal";

const TreeViewJournaux = ({ dossiers }) => {
  const renderTreeView = (
    <ul>
      {/* journal central*/}
      <li>
        <span className="caret" onClick={expand}>
        Central (général)
        </span>
        <ul className="nested ">
          <li>
            <span className="caret " onClick={expand}>
           
            <Journal/>
            </span>
            <ul className="nested ">nested</ul>
          </li>
        </ul>
      </li>
    
      {/* journal achat */}
      <li>
        <span className="caret" onClick={expand}>
          Achats (débours)
        </span>
        <ul className="nested ">
          <li>
            <span className="caret " onClick={expand}>
            caret données débours....
            </span>
            <ul className="nested ">nested</ul>
          </li>
        </ul>
      </li>
    
      {/* journal banques */}
      <li>
        <span className="caret" onClick={expand}>
          Banque(s)
        </span>
        <ul className="nested ">
          <li>
            <span className="caret " onClick={expand}>
              caret données banques ...
            </span>
            <ul className="nested ">nested</ul>
          </li>
        </ul>
      </li>
        {/* journal caisse*/}
        <li>
        <span className="caret" onClick={expand}>
          Caisse(s)
        </span>
        <ul className="nested ">
          <li>
            <span className="caret " onClick={expand}>
            caret données Caisse ...
            </span>
            <ul className="nested ">nested</ul>
          </li>
        </ul>
      </li>
      {/* journal ventes */}
      <li>
        <span className="caret" onClick={expand}>
          Ventes (prestations)
        </span>
        <ul className="nested ">
          <li>
            <span className="caret " onClick={expand}>
            caret données prestations ...
            </span>
            <ul className="nested ">nested</ul>
          </li>
        </ul>
      </li>
      {/* OD */}
      <li>
        <span className="caret" onClick={expand}>
          Opérations diverses
        </span>
        <ul className="nested ">
          <li>
            <span className="caret " onClick={expand}>
            caret données prestations ...
            </span>
            <ul className="nested ">nested</ul>
          </li>
        </ul>
      </li>
    </ul>
  );
  return <TreeView dossiers={dossiers}>{renderTreeView}</TreeView>;
};

export default TreeViewJournaux;
