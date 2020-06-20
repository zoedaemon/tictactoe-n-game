var locked = false;
var TicTacToeSize = 3;

/**clickBox: just simple click */
function clickBox() {
  console.log("clicked");
  alert("clicked");
}

/**changeShape: change to respective shape */
function changeShape(obj, defaultShape, wantShape) {
  if (locked == true) {
    console.log("shaped has been locked");
    return;
  }
  console.log("change shaped");
  let regExp = new RegExp("(?:^|\\s)" + defaultShape + "(?!\\S)", "g");
  console.log(regExp);
  obj.className = obj.className.replace(regExp, wantShape);
}

function lockShape(obj, defaultShape, wantShape) {
  console.log("lock shaped");
  changeShape(obj, defaultShape, wantShape);
  let delayInMilliseconds = 1000; //1 second
  setTimeout(function () {
    changeShape(obj, wantShape, defaultShape);
    locked = true;
  }, delayInMilliseconds);
}

function init(id) {
  createDefaultTable(id);
}

function createDefaultTable(id) {
  createTable(id, TicTacToeSize);
}

/**createTable from array*/
function createTable(id, objectArray, fields) {
  let parent = document.getElementById(id);
  let tbl = document.createElement("table");
  let tbdy = document.createElement("tbody");
  let tr = document.createElement("tr");

  let currId = 0;
  for (let col = 0; col < TicTacToeSize; col++) {
    let tr = document.createElement("tr");
    for (let row = 0; row < TicTacToeSize; row++) {
      var td = document.createElement("td");

      //set up some atributtes
      td.className = "box";
      // td.id = "box" + currId;

      let currentTurn = "circle";
      divContent = document.createElement("div");
      divContent.className = "none";

      //can do like this but more prefer to set directly to DOM obj events (onmouseenter & onmouseleave)
      //td.setAttribute("onmouseenter", "");
      divContent.onmouseenter = function () {
        changeShape(this, "none", currentTurn);
      };
      divContent.onmouseleave = function () {
        changeShape(this, currentTurn, "none");
      };
      //append to box
      td.appendChild(divContent);

      //append to current columns tr
      tr.appendChild(td);
      currId++;
    }
    tbdy.appendChild(tr);
  }

  tbl.appendChild(tbdy);
  parent.appendChild(tbl);

  return tbl;
}
