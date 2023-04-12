import "./snackbar.css";

export function displaySnack() {
  console.log("click");
  // Get the snackbar DIV
  let x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
const SnackBar = ({ message }) => {
  // const  displaySnack=() =>{
  //   console.log("click" );
  //   // Get the snackbar DIV
  //   let x = document.getElementById("snackbar");

  //   // Add the "show" class to DIV
  //   x.className = "show";

  //   // After 3 seconds, remove the show class from DIV
  //   setTimeout(function () {
  //     x.className = x.className.replace("show", "");
  //   }, 3000);
  // }
  return (
    <div>
      {/* <!-- Use a button to open the snackbar --> */}
      {/* <button className="button" onClick={displaySnack}>Show Snackbar</button> */}
      {/* <!-- The actual snackbar --> */}
      <div id="snackbar">{message}</div>
    </div>
  );
};

export default SnackBar;
