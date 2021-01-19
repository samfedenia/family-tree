class FamilyTree {
  constructor(value) {
    if (!value || typeof value !== "string") {
      throw "input is not a string or not declared";
    }
    this.value = value;
    this.children = [];
    this.size = 1;
  }
  insert(childName) {
    this.size += 1;
    this.children.push(new FamilyTree(childName));
  }
  familySize() {
    return this.size;
  }
  findMember(member) {
    if (this.value) {
      if (this.value === member) {
        return this;
      } else {
        return this.children.find((child) => child.value === member);
      }
    } else {
      return undefined;
    }
  }
  log(root = this, level = "--") {
    // recursive approach -- BEST
    let solution = level + " " + root.value + "\n";
    for (let child of root.children) {
      solution += this.log(child, level + "--");
    }
    return solution;

    // iterative approach -- BAD/OKAY
    // let root = `-- ${this.value}`
    // this.children.forEach()
  }
}

module.exports = FamilyTree;

// let person, selectedPerson;
// const input = document.getElementById("name-input");
// const submitButton = document.getElementById("submit-btn");

// const selectPerson = (id) => {
//   let isSelected = document.getElementsByClassName("selected");
//   if (isSelected[0]) {
//     for (let item of isSelected) {
//       item.classList.remove("selected");
//     }
//   }
//   document.getElementById(id).classList.add("selected");
//   return (selectedPerson = id);
// };

// submitButton.addEventListener("click", () => {
//   if (typeof selectedPerson !== "undefined") {
//     let name = input.value;
//     document.getElementById("name-input").value = "";

//     if (person.value == selectedPerson) {
//       person.insert(name);
//       let personDiv = document.createElement("span");
//       child = person.findMember(name);
//       personDiv.id = child.value;
//       personDiv.className = "person";
//       personDiv.innerText = child.value;
//       personDiv.setAttribute("onclick", "selectPerson(this.id)");
//       document.getElementById("family-tree").appendChild(personDiv);
//       selectPerson(child.value);
//     } else {
//       selectedPerson = person.findMember(selectedPerson);
//       selectedPerson.insert(name);
//       child = selectedPerson.findMember(name);
//       let personDiv = document.createElement("div");
//       personDiv.id = child.value;
//       personDiv.className = "person";
//       personDiv.innerText = child.value;
//       personDiv.setAttribute("onclick", "selectPerson(this.id)");
//       document.getElementById("family-tree").appendChild(personDiv);
//       selectPerson(child.value);
//     }
//   } else {
//     let name = input.value;
//     document.getElementById("name-input").value = "";

//     person = new FamilyTree(String(name));
//     // let containerDiv = document.createElement("div");
//     // containerDiv.className = "float-container"
//     let personDiv = document.createElement("div");
//     personDiv.id = person.value;
//     personDiv.className = "rootperson";
//     personDiv.innerText = person.value;
//     personDiv.setAttribute("onclick", "selectPerson(this.id)");
//     document.getElementById("family-tree").appendChild(personDiv);

//     selectPerson(person.value);
//   }
// });
