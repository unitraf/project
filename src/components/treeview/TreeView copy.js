
import Icon from "@mdi/react";
import "./treeview.css";
import { mdiChevronDown, mdiChevronLeft, mdiChevronRight } from "@mdi/js";

const TreeView = () => {
  const toggler = document.getElementsByClassName("caret");

  const expand = (e) => {
    for (let i = 0; i < toggler.length; i++) {     
      if (e.target.innerHTML === toggler[i].innerHTML) {
        toggler[i].classList.toggle("caret-down");
        toggler[i].parentElement
          .querySelector(".nested")
          .classList.toggle("active-expand");
      }
    }
  };
  
  // useEffect(() => {
  //   console.log(2);
  //   for (let i = 0; i < toggler.length; i++) {
  //     toggler[i].addEventListener("mousedown", (e) => {
  //       console.log(11);
  //       console.log("click", toggler[i].innerHTML);

  //       toggler[i].classList.toggle("caret-down");
  //       toggler[i].parentElement
  //         .querySelector(".nested")
  //         .classList.toggle("active");
  //     });
  //   }
  // }, []);

  const renderNested = (
    <li>
    <span className="caret" onClick={expand}>Green Tea</span>
    <ul className="nested">
      <li>Sencha</li>
      <li>Gyokuro</li>
      <li>Matcha</li>
      <li>Pi Lo Chun</li>
    </ul>
  </li>
    )

  return (

<div id="treeview">
      <ul >
        <li>
          <span className="caret" onClick={expand}>
             Dossiers
          </span>
          <ul className="nested ">
            <li>Water</li>
            <li>Coffee</li>
            <li>
              <span className="caret" onClick={expand}>
                Tea
              </span>
              <ul className="nested">
                <li>Black Tea</li>
                <li>White Tea</li>
                <li>
                  <span className="caret" onClick={expand}>Green Tea</span>
                  <ul className="nested">
                    <li>Sencha</li>
                    <li>Gyokuro</li>
                    <li>Matcha</li>
                    <li>Pi Lo Chun</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      </div>
  );
};

export default TreeView;
