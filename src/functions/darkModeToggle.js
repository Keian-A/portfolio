function darkModeToggle() {

  // Page background color
  document.body.style.backgroundColor = "#212121";

  // p tags
  let allPTags = document.getElementsByTagName("p");
  for (let ii = 0; ii < allPTags.length; ii++) {
    allPTags[ii].style.color = "white";
  }

  // h1 tags
  let allH1Tags = document.getElementsByTagName("h1");
  for (let ii = 0; ii < allH1Tags.length; ii++) {
    allH1Tags[ii].style.color = "white";
  }

  // h2 tags
  let allH2Tags = document.getElementsByTagName("h2");
  for (let ii = 0; ii < allH2Tags.length; ii++) {
    allH2Tags[ii].style.color = "white";
  }

  // h4 tags
  let allH4Tags = document.getElementsByTagName("h4");
  for (let ii = 0; ii < allH4Tags.length; ii++) {
    allH4Tags[ii].style.color = "white";
  }

  // anchor tags
  let allATags = document.getElementsByTagName("a");
  for (let ii = 0; ii < allATags.length; ii++) {
    allATags[ii].style.color = "white";
  }

  // hamburger button
  document.getElementsByClassName("hamburger-react")[0].style.color = "white";
}

export default darkModeToggle;
