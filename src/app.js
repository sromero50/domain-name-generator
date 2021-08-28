/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our", "this"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];

  function dominio() {
    let domain = [];
    for (let i = 0; i < pronouns.length; i++) {
      for (let x = 0; x < adjectives.length; x++) {
        for (let z = 0; z < nouns.length; z++) {
          let pronoun = pronouns[i];
          let adjective = adjectives[x];
          let noun = nouns[z];

          domain.push(pronoun + adjective + noun);
        }
      }
    }
    return domain;
  }
  function dominio2() {
    let domain = [];
    for (let pronoun of pronouns) {
      for (let adjective of adjectives) {
        for (let noun of nouns) {
          domain.push(pronoun + adjective + noun);
        }
      }
    }
    return domain;
  }
  console.log(dominio2());
};
