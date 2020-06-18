/**clickBox: just simple click */
function clickBox() {
  console.log("clicked");
  alert("clicked");
}

/**changeShape: change to respective shape */
function changeShape(obj, defaultShape, wantShape) {
  console.log("change shaped");
  var regExp = new RegExp("(?:^|\\s)" + defaultShape + "(?!\\S)", "g");
  console.log(regExp);
  obj.className = obj.className.replace(regExp, wantShape);
}
