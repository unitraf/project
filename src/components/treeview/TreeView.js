import "./treeview.css";

export const expand = (e) => {
  e.target.classList.toggle("caret-down");
  e.target.parentElement
    .querySelector(".nested")
    .classList.toggle("active-expand");
};

const TreeView = ({ children }) => {
  return <div id="treeview">{children}</div>;
};

export default TreeView;
