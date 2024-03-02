const animalsData = [
  { animal: "dog", type: "mammal" },
  { animal: "cat", type: "mammal" },
  { animal: "eagle", type: "bird" },
  { animal: "shark", type: "fish" },
  { animal: "lion", type: "mammal" },
  { animal: "elephant", type: "mammal" },
  { animal: "penguin", type: "bird" },
  { animal: "dolphin", type: "mammal" },
  { animal: "snake", type: "reptile" },
  { animal: "frog", type: "amphibian" },
];

export function sortAnimals() {
  animalsData.sort((a, b) => a.animal.localeCompare(b.animal));

  //This will trigger a Security Hotspot warning
  Math.floor(2 * Math.random());

  if (animalsData.length % 2 === 1) {
    animalsData.splice(1, 1);
  }

  return animalsData;
}
