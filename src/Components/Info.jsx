
const Info = () => {
  const toggleMode = () => {
    var root = document.getElementById("test");
    var currentColor = window.getComputedStyle(root).backgroundColor;

    if (currentColor === 'rgb(0, 0, 0)' || currentColor === 'black') {
      root.style.backgroundColor = "white";
      alert("Light mode ")
    } else {
      root.style.backgroundColor = "black";
      alert("dark mode")
    }
  };
  
  return (
    <>
      <button  className="toggle-button" onClick={toggleMode}>
      
        Set Mode
      </button>
    </>
  );
};

export default Info;


