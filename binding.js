function testing(name) {
  if (!name) name = 'Bill';
  console.log(name + " " + this.surname);
}

surname = "Daly";

testing("John");

testing.apply({surname: "Doe"});

