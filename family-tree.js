class FamilyTree {
  constructor(value) {
    if (typeof value === "string") {
      this.value = value;
    } else {
      throw "input is not a string";
    }
    this.children = [];
  }
  insert(childName) {
    this.children.push(new FamilyTree(childName));
  }
  familySize() {
    return 1 + this.children.length;
  }
  findMember(member) {
    return this.children.find((child) => child.value == member);
  }
  log(depth = 1) {
    let result = "--".repeat(depth);
    result = result + ` ${this.value}`;
    for (let child of this.children) {
      result = result + `\n  ${child.log(depth + 1)}`;
    }
    return result;
  }
}

// module.exports = FamilyTree;

let person, selectedPerson;
const input = document.getElementById("name-input");
const submitButton = document.getElementById("submit-btn");

const selectPerson = (id) => {
  let isSelected = document.getElementsByClassName("selected");
  if (isSelected[0]) {
    for (let item of isSelected) {
      item.classList.remove("selected");
    }
  }
  document.getElementById(id).classList.add("selected");
  return (selectedPerson = id);
};

submitButton.addEventListener("click", () => {
  if (typeof selectedPerson !== "undefined") {
    let name = input.value;
    document.getElementById("name-input").value = "";

    if (person.value == selectedPerson) {
      person.insert(name);
      let personDiv = document.createElement("span");
      child = person.findMember(name);
      personDiv.id = child.value;
      personDiv.className = "person";
      personDiv.innerText = child.value;
      personDiv.setAttribute("onclick", "selectPerson(this.id)");
      document.getElementById("family-tree").appendChild(personDiv);
      selectPerson(child.value);
    } else {
      selectedPerson = person.findMember(selectedPerson);
      selectedPerson.insert(name);
      child = selectedPerson.findMember(name);
      let personDiv = document.createElement("div");
      personDiv.id = child.value;
      personDiv.className = "person";
      personDiv.innerText = child.value;
      personDiv.setAttribute("onclick", "selectPerson(this.id)");
      document.getElementById("family-tree").appendChild(personDiv);
      selectPerson(child.value);
    }
  } else {
    let name = input.value;
    document.getElementById("name-input").value = "";

    person = new FamilyTree(String(name));
    // let containerDiv = document.createElement("div");
    // containerDiv.className = "float-container"
    let personDiv = document.createElement("div");
    personDiv.id = person.value;
    personDiv.className = "rootperson";
    personDiv.innerText = person.value;
    personDiv.setAttribute("onclick", "selectPerson(this.id)");
    document.getElementById("family-tree").appendChild(personDiv);

    selectPerson(person.value);
  }
});
