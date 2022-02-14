function lightModeToggle() {

  // Page background color
  document.body.style.backgroundColor = "#f2f2f2";

  // p tags
  let allPTags = document.getElementsByTagName("p");
  for (let ii = 0; ii < allPTags.length; ii++) {
    allPTags[ii].style.color = "black";
  }

  // h1 tags
  let allH1Tags = document.getElementsByTagName("h1");
  for (let ii = 0; ii < allH1Tags.length; ii++) {
    allH1Tags[ii].style.color = "black";
  }

  // h2 tags
  let allH2Tags = document.getElementsByTagName("h2");
  for (let ii = 0; ii < allH2Tags.length; ii++) {
    allH2Tags[ii].style.color = "black";
  }

  // h4 tags
  let allH4Tags = document.getElementsByTagName("h4");
  for (let ii = 0; ii < allH4Tags.length; ii++) {
    allH4Tags[ii].style.color = "black";
  }

  // anchor tags
  let allATags = document.getElementsByTagName("a");
  for (let ii = 0; ii < allATags.length; ii++) {
    allATags[ii].style.color = "black";
  }

  // hamburger button
  document.getElementsByClassName("hamburger-react")[0].style.color = "black";
}

export default lightModeToggle;
