/**clickBox: just simple click */
function clickBox() {
  console.log("clicked");
  alert("clicked");
}

var locked = false;

/**changeShape: change to respective shape */
function changeShape(obj, defaultShape, wantShape) {
  if (locked == true) {
    console.log("shaped has been locked");
    return;
  }
  console.log("change shaped");
  var regExp = new RegExp("(?:^|\\s)" + defaultShape + "(?!\\S)", "g");
  console.log(regExp);
  obj.className = obj.className.replace(regExp, wantShape);
}

function lockShape(obj, defaultShape, wantShape) {
  console.log("lock shaped");
  changeShape(obj, defaultShape, wantShape);
  var delayInMilliseconds = 1000; //1 second
  setTimeout(function () {
    changeShape(obj, wantShape, defaultShape);
    locked = true;
  }, delayInMilliseconds);
}
