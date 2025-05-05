const maleFirstNames = [
    "Aaron", "Caleb", "Ethan", "Gavin", "Isaac", "Kyle", "Mason", "Owen",
    "Quincy", "Samuel", "Ulysses", "Wyatt", "Xander", "Yosef", "Zach",
    "Bob", "Charlie", "George", "Ian", "Kevin", "Michael", "Oliver", "Quentin",
    "Steve", "Victor", "Ximena", "Liam", "Noah", "James", "Benjamin", "Elijah",
    "Lucas", "Alexander", "Henry", "Jacob", "Jackson", "Sebastian", "Jack",
    "Aiden", "Matthew", "Samuel", "David", "Joseph", "Carter", "Owen", "Wyatt",
    "John", "Dylan", "Luke", "Gabriel", "Anthony", "Isaiah", "Grayson", "Jayden",
    "Nathan", "Calvin", "Christian", "Hunter", "Thomas", "Aaron", "Charles",
    "Eli", "Connor", "Jeremiah", "Cameron", "Josiah", "Angel", "Colton",
    "Dominic", "Austin", "Robert", "Evan", "Adrian", "Gavin", "Kevin",
    "Jose", "Brayden", "Jason", "Ian", "Chase", "Adam", "Nathaniel", "Zachary",
    "Tyler", "Cooper", "Easton", "Jordan", "Colin", "Carson", "Jaxson",
    "Leonardo", "Luis", "Jace", "Max", "Maxwell", "Damian", "Bryson",
    "Elias", "Bentley", "Xavier", "Miles", "Diego", "Vincent", "Micah",
    "Carlos", "Kaiden", "Sawyer", "Nathaniel", "Bryce", "Tristan", "Axel",
    "Timothy", "Ezekiel", "Landon", "Eric", "Victor", "Abel", "Jayce",
    "Dominick", "Jaden", "Wesley", "Kai", "Santiago", "Ryder", "Joel",
    "Richard", "Preston", "Declan", "Emmanuel", "Jesse", "Bryan", "George",
    "Maximus", "Ivan", "Maximiliano", "Malachi", "Jax", "August", "Kaleb",
    "Miguel", "Atlas", "Zion", "Paxton", "Damien", "Gage", "Zayden"
];

const femaleFirstNames = [
    "Alice", "Diana", "Fiona", "Hannah", "Julia", "Laura", "Nina", "Paula",
    "Rachel", "Tina", "Wendy", "Yara", "Bella", "Delilah", "Faith", "Hailey",
    "Jasmine", "Lily", "Natalie", "Penelope", "Ruby", "Tracy", "Violet", "Zoe",
    "Emma", "Olivia", "Ava", "Isabella", "Sophia", "Mia", "Charlotte", "Amelia",
    "Evelyn", "Abigail", "Harper", "Emily", "Elizabeth", "Avery", "Sofia",
    "Ella", "Madison", "Scarlett", "Victoria", "Aria", "Grace", "Chloe", "Camila",
    "Addison", "Layla", "Lillian", "Natalia", "Brooklyn", "Zoe", "Leah", "Audrey",
    "Lucy", "Anna", "Caroline", "Allison", "Hailey", "Gabriella", "Alice",
    "Madelyn", "Peyton", "Julia", "Rylee", "Clara", "Vivian", "Kaylee", "Samantha",
    "Sarah", "Ariana", "Kennedy", "Ellie", "Nevaeh", "Sadie", "Aaliyah", "Autumn",
    "Skylar", "Genesis", "Bella", "Maya", "Eva", "Naomi", "Serenity", "Piper",
    "Sophie", "Brielle", "Madeline", "Parker", "Lydia", "Josephine", "Delilah",
    "Jade", "Julia", "Melanie", "Kylie", "Mackenzie", "Reagan", "Bailey", "Jocelyn",
    "Katherine", "Alyssa", "Aubree", "Cora", "Vivienne", "Liliana", "Hadley",
    "Melody", "Lauren", "Isabelle", "Morgan", "Brianna", "Maria", "Reese", "Adeline"
];

const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller",
    "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez",
    "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
    "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark",
    "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King",
    "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green",
    "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell",
    "Carter", "Roberts"
];

const generateBtn = document.getElementById("generate-btn");
const nameDisplay = document.getElementById("name-display");
const copyBtn = document.getElementById("copy-btn");
const clearBtn = document.getElementById("clear-btn");
const numNamesInput = document.getElementById("num-names");
const numKidsInput = document.getElementById("num-kids");
const darkModeCheckbox = document.getElementById("dark-mode-checkbox");

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateName(selectedGender, nameType) {
    let firstNameList;
    if (selectedGender === "male") {
        firstNameList = maleFirstNames;
    } else if (selectedGender === "female") {
        firstNameList = femaleFirstNames;
    } else {
        firstNameList = maleFirstNames.concat(femaleFirstNames);
    }

    const firstName = getRandomItem(firstNameList);
    const lastName = getRandomItem(lastNames);

    if (nameType === "first") {
        return firstName;
    } else if (nameType === "last") {
        return lastName;
    } else {
        return firstName + " " + lastName;
    }
}

function playSound() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1);
}

function animateNameDisplay(text) {
    nameDisplay.classList.add("fade-out");
    setTimeout(() => {
        nameDisplay.textContent = text;
        nameDisplay.classList.remove("fade-out");
        nameDisplay.classList.add("fade-in");
    }, 300);
    setTimeout(() => {
        nameDisplay.classList.remove("fade-in");
    }, 800);
}

function generateCoupleWithKids(numKids) {
    const lastName = getRandomItem(lastNames);
    const husband = getRandomItem(maleFirstNames) + " " + lastName;
    const wife = getRandomItem(femaleFirstNames) + " " + lastName;
    const kids = [];
    for (let i = 0; i < numKids; i++) {
        const gender = Math.random() < 0.5 ? "male" : "female";
        // Generate kid's first name only and append parents' last name
        let firstNameList = gender === "male" ? maleFirstNames : femaleFirstNames;
        const firstName = firstNameList[Math.floor(Math.random() * firstNameList.length)];
        kids.push(firstName + " " + lastName);
    }
    return { husband, wife, kids };
}

generateBtn.addEventListener("click", () => {
    const genderRadios = document.getElementsByName("gender");
    let selectedGender = "random";
    for (const radio of genderRadios) {
        if (radio.checked) {
            selectedGender = radio.value;
            break;
        }
    }

    const nameTypeRadios = document.getElementsByName("nameType");
    let selectedNameType = "full";
    for (const radio of nameTypeRadios) {
        if (radio.checked) {
            selectedNameType = radio.value;
            break;
        }
    }

    let numNames = parseInt(numNamesInput.value);
    if (isNaN(numNames) || numNames < 1) {
        numNames = 1;
    } else if (numNames > 10) {
        numNames = 10;
    }

    let numKids = 0;
    if (selectedNameType === "couple") {
        numKids = parseInt(numKidsInput.value);
        if (isNaN(numKids) || numKids < 0) {
            numKids = 0;
        } else if (numKids > 10) {
            numKids = 10;
        }
    }

    if (selectedNameType === "couple") {
        animateNameDisplay("Generating...");
        setTimeout(() => {
            const family = generateCoupleWithKids(numKids);
            let displayText = `Husband: ${family.husband}\nWife: ${family.wife}`;
            if (numKids > 0) {
                displayText += `\nKids: ${family.kids.join(", ")}`;
            }
            animateNameDisplay(displayText);
        }, 800);
    } else {
        animateNameDisplay("Generating...");
        setTimeout(() => {
            const names = [];
            for (let i = 0; i < numNames; i++) {
                names.push(generateName(selectedGender, selectedNameType));
            }
            animateNameDisplay(names.join(", "));
        }, 800);
    }

    playSound();
});

copyBtn.addEventListener("click", () => {
    const text = nameDisplay.textContent;
    if (text && text !== "Click the button to generate a name" && text !== "Generating...") {
        navigator.clipboard.writeText(text).then(() => {
            copyBtn.textContent = "Copied!";
            setTimeout(() => {
                copyBtn.textContent = "Copy";
            }, 1500);
        });
    }
});

clearBtn.addEventListener("click", () => {
    animateNameDisplay("Click the button to generate a name");
});

darkModeCheckbox.addEventListener("change", () => {
    if (darkModeCheckbox.checked) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});

// Show or hide number of kids input based on name type selection
const nameTypeRadios = document.getElementsByName("nameType");
const multipleKidsDiv = document.querySelector(".multiple-kids");

nameTypeRadios.forEach(radio => {
    radio.addEventListener("change", () => {
        if (radio.value === "couple" && radio.checked) {
            multipleKidsDiv.style.display = "flex";
        } else {
            multipleKidsDiv.style.display = "none";
        }
    });
});

// Initialize dark mode based on saved preference or default
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkModeCheckbox.checked = true;
    document.body.classList.add("dark-mode");
}
