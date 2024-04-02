let currentState = "start";

let gameData = {
  start: {
    text: "Enter the world Realm of Elements",
    choices: ["Start"],
    consequences: ["start1"],
    image: "https://assets.lulu.com/cover_thumbs/n/v/nvdvzn6-ebook-shortedge-384.jpg",
  },

  start1: {
      text: "In a world where the elements reign supreme, you find yourself at a crossroads. Will you embrace the elemental forces?",
      choices: ["Embark on the Path of Fire", "Embark on the Path of Water"],
      consequences: ["firePath", "waterPath"],
      image: "https://spotlight.tezos.com/media/image/xw.jpg",
  },
  firePath: {
      text: "You choose to embrace the Path of Fire, where flames dance and power awaits. What trials will you face?",
      choices: ["Confront the Volcanic Forge", "Navigate the Burning Forest"],
      consequences: ["volcanicForge", "burningForest"],
      image: "https://images.squarespace-cdn.com/content/v1/58647a6ad482e92ded464468/1490985466263-J9UZLS2GNDWQW0JBFCTQ/2006-prescribed1st.jpg?format=2500w",
  },
  waterPath: {
      text: "You opt for the Path of Water, where mysteries lie beneath the waves. How will you navigate the depths?",
      choices: ["Plumb the Abyssal Trench", "Explore the Coral Sanctum"],
      consequences: ["abyssalTrench", "coralSanctum"],
      image: "https://png.pngtree.com/background/20210715/original/pngtree-fresh-and-beautiful-water-path-photography-map-picture-image_1283347.jpg",
  },
  volcanicForge: {
      text: "You confront the searing heat of the Volcanic Forge. What secrets does it hold?",
      choices: ["Harness Elemental Fury", "Unlock Ancient Smithing Techniques"],
      consequences: ["elementalFury", "smithingTechniques"],
      image: "https://static.wikia.nocookie.net/universezeta/images/2/28/Arokaro%27s_Forge.jpg/revision/latest?cb=20180503032829",
  },
  burningForest: {
      text: "You navigate the treacherous Burning Forest. What challenges await amidst the flames?",
      choices: ["Tame the Wild Infernos", "Discover the Phoenix Nest"],
      consequences: ["infernoTaming", "phoenixDiscovery"],
      image: "https://miro.medium.com/v2/resize:fit:1400/0*lKbwebiDLb7WNbQh",
  },
  abyssalTrench: {
      text: "You plumb the depths of the Abyssal Trench. What mysteries lie in the darkness?",
      choices: ["Uncover Lost Civilizations", "Befriend Oceanic Guardians"],
      consequences: ["lostCivilizations", "oceanicGuardians"],
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/45b62b27710569.5636980321b2c.jpg",
  },
  coralSanctum: {
      text: "You explore the tranquil Coral Sanctum. What wonders lie within the vibrant reefs?",
      choices: ["Commune with Sea Spirits", "Harvest Rare Oceanic Plants"],
      consequences: ["seaCommunion", "rarePlantsHarvest"],
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/410539878.jpg?k=922f9b1fcfb10d61fea31defea0faa768c6312dbb1afcd9611178b081c37f14b&o=&hp=1",
  },
  elementalFury: {
      text: "You harness the elemental fury of the Volcanic Forge, becoming a master of fire magic. Congratulations!",
      choices: ["Ending 1"],
      image: "https://cdn.epiccarry.com/wp-content/uploads/sites/31/2023/08/WoW-Fire-Mage-Guide.webp",
  },
  smithingTechniques: {
      text: "You unlock ancient smithing techniques within the Volcanic Forge, forging legendary weapons. Congratulations!",
      choices: ["Ending 2"],
      image: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/03/elden-ring-smithing-stone-upgrade-locations.jpg",
  },
  infernoTaming: {
      text: "You tame the wild infernos of the Burning Forest, gaining mastery over flames. Congratulations!",
      choices: ["Ending 3"],
      image: "https://images.hdqwalls.com/download/dragon-forest-fantasy-artwork-qq-2560x1440.jpg",
  },
  phoenixDiscovery: {
      text: "You discover the nest of the legendary Phoenix in the Burning Forest. Congratulations!",
      choices: ["Ending 4"],
      image: "https://live.staticflickr.com/7385/8962294650_40c95d38d0_b.jpg",
  },
  lostCivilizations: {
      text: "You uncover lost civilizations hidden in the depths of the Abyssal Trench. Congratulations!",
      choices: ["Ending 5"],
      image: "https://images.interestingengineering.com/2023/08/12/image/jpeg/1xpgw9M0j07fJWL4SukxFDjALW7dwwo6wjsgbU0t.jpg",
  },
  oceanicGuardians: {
      text: "You befriend the powerful oceanic guardians dwelling in the Abyssal Trench. Congratulations!",
      choices: ["Ending 6"],
      image: "https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fcould-the-veil-be-the-eyeball-of-a-leviathan-v0-x84cealgluya1.jpg%3Fwidth%3D1920%26format%3Dpjpg%26auto%3Dwebp%26s%3D1666222d5047bf68f27a86b1f359d83ed5f0ab2e",
  },
  seaCommunion: {
      text: "You commune with sea spirits within the tranquil Coral Sanctum, gaining their wisdom. Congratulations!",
      choices: ["Ending 7"],
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd102352-f64e-43af-8a1a-8b9fbb400642/dgxmelt-e17e9444-72e1-4811-9364-3d7f0e1c4b12.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZkMTAyMzUyLWY2NGUtNDNhZi04YTFhLThiOWZiYjQwMDY0MlwvZGd4bWVsdC1lMTdlOTQ0NC03MmUxLTQ4MTEtOTM2NC0zZDdmMGUxYzRiMTIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zZEtJUWQV-FF2roUUs9SqAyZLogSzuWA2DDUhZmprrM",
  },
  rarePlantsHarvest: {
      text: "You harvest rare oceanic plants in the Coral Sanctum, enriching your knowledge and wealth. Congratulations!",
      choices: ["Ending 8"],
      image: "https://facts.net/wp-content/uploads/2021/04/tropical-fish-on-a-coral-reef-.jpg",
  },
  };
function startGame() {
  currentState = "start";
  updatePage();
}

function updatePage() {
  let stage = gameData[currentState];
  document.getElementById("story-text").innerText = stage.text;

  let choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";
  for (let i = 0; i < stage.choices.length; i++) {
    let choice = document.createElement("button");
    choice.innerText = stage.choices[i];
    choice.addEventListener("click", function () {
      currentState = stage.consequences[i];
      updatePage();
    });
    choicesList.appendChild(choice);
  }

  document.getElementById("story-image").src = stage.image;
}

startGame();