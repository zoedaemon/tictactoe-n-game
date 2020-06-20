var locked = false;
var TicTacToeSize = 3;
var ID;
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
  ID = id;
  createDefaultTable(id);
}

function createDefaultTable(id) {
  createTable(id, TicTacToeSize, false);
}

/**createTable from array*/
function createTable(id, tictactoeSize, isReplaced) {
  let parent = document.getElementById(id);
  let tbl = document.createElement("table");
  let tbdy = document.createElement("tbody");
  let tr = document.createElement("tr");

  let currId = 0;
  for (let col = 0; col < tictactoeSize; col++) {
    let tr = document.createElement("tr");
    for (let row = 0; row < tictactoeSize; row++) {
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

  if (isReplaced) {
    oldTbl = document.getElementById(id).childNodes[0];
    parent.replaceChild(tbl, oldTbl);
  } else {
    parent.appendChild(tbl);
  }

  return tbl;
}

function updateInfoSize(obj) {
  window.requestAnimationFrame(function () {
    document.getElementById("CurrentSize").innerHTML =
      "Change " + obj.value + " x " + obj.value;
    rng.setAttribute("aria-valuenow", obj.value); // include for accessibility
  });
}

function updateTicTacToe(obj) {
  //update tictactoe size then recreate table
  if (obj.value >= 3) {
    TicTacToeSize = obj.value;
  } else {
    alert("I am sorry minimum size is 3, please slide to 3 or more");
    obj.value = 3;
    TicTacToeSize = obj.value;
  }
  createTable(ID, TicTacToeSize, true);
  document.getElementById("CurrentSize").innerHTML =
    "Change " + obj.value + " x " + obj.value;
}
