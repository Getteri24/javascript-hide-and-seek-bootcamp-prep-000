function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector(".target");
}

function increaseRankBy(n) {
  let rank  = document.querySelectorAll(".ranked-list");
  
  for (let i=0, m=rank.length; i<m; i++) {
    let children = rank[i].children;
    
    for(let j=0, k=children.length; j<k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let divs = document.getElementById("grand-node").querySelectorAll("div");
  let deepest;
    for(let i = 0; i < divs.length -1; i++) {
     deepest = divs[i].querySelector("div");
  }
return deepest;
  
}