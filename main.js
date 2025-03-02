


console.log("Server online");

// Helper function to toggle visibility
const toggleVisibility = (element, isVisible) => {
    element.style.visibility = isVisible ? "visible" : "hidden";
};

// Helper function to handle button hover effects
const addHoverEffect = (element) => {
    element.addEventListener("mouseover", () => {
        element.style.background = "gray";
    });
    element.addEventListener("mouseout", () => {
        element.style.background = "white";
    });
};

// Create and append login div
const loginDiv = document.createElement("div");
loginDiv.setAttribute("id", "loginDiv");
document.body.appendChild(loginDiv);

// Create and append showName element
const showName = document.createElement("h1");
showName.textContent = "Welcome";
showName.setAttribute("id", "showName");
loginDiv.appendChild(showName);

// Create and append input fields
const inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.setAttribute("id", "inputName");
inputName.setAttribute("placeholder", "Enter name");
loginDiv.appendChild(inputName);

const inputPassword = document.createElement("input");
inputPassword.setAttribute("type", "password");
inputPassword.setAttribute("placeholder", "Enter password");
inputPassword.setAttribute("id", "inputPassword");
loginDiv.appendChild(inputPassword);

// Create and append buttons
const saveButton = document.createElement("button");
saveButton.textContent = "Sign Up";
saveButton.setAttribute("id", "saveButton");
loginDiv.appendChild(saveButton);

const loginButton = document.createElement("button");
loginButton.textContent = "Sign In";
loginButton.setAttribute("id", "loginButton");
loginDiv.appendChild(loginButton);

// Add hover effects to buttons
addHoverEffect(saveButton);
addHoverEffect(loginButton);
addHoverEffect(inputName);
addHoverEffect(inputPassword);

// Save button event listener
saveButton.addEventListener("click", () => {
    const name = inputName.value.trim();
    const password = inputPassword.value.trim();

    if (!name || !password) {
        showName.textContent = "Name or password is invalid!";
        return;
    }

    showName.textContent = `Thanks, ${name}, for signing up!`;
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);

    setTimeout(() => {
        toggleVisibility(loginDiv, false);
        toggleVisibility(menuDiv, true);
    }, 2000);
});

// Login button event listener
loginButton.addEventListener("click", () => {
    const name = inputName.value.trim();
    const password = inputPassword.value.trim();
    const savedName = localStorage.getItem("name");
    const savedPassword = localStorage.getItem("password");

    if (name === savedName && password === savedPassword) {
        showName.textContent = `${name} loaded successfully!`;
        setTimeout(() => {
            toggleVisibility(loginDiv, false);
            toggleVisibility(menuDiv, true);
        }, 2000);
    } else {
        showName.textContent = "Incorrect username or password!";
    }
});

// Create and append menu div
const menuDiv = document.createElement("div");
menuDiv.setAttribute("id", "menuDiv");
document.body.appendChild(menuDiv);
toggleVisibility(menuDiv, false);

// Create and append menu elements
const menu = document.createElement("h1");
menu.textContent = "Menu:";
menu.setAttribute("id", "menu");
menuDiv.appendChild(menu);

const aboutButton = document.createElement("button");
aboutButton.textContent = "About Us";
aboutButton.setAttribute("id", "aboutButton");
menuDiv.appendChild(aboutButton);

const contentButton = document.createElement("button");
contentButton.textContent = "Contact Us";
contentButton.setAttribute("id", "contentButton");
menuDiv.appendChild(contentButton);

const cartButton = document.createElement("button");
cartButton.textContent = "Show Cart";
cartButton.setAttribute("id", "cartButton");
menuDiv.appendChild(cartButton);

const logoutButton = document.createElement("button");
logoutButton.textContent = "Log Out";
logoutButton.setAttribute("id", "logoutButton");
menuDiv.appendChild(logoutButton);

// Add hover effects to menu buttons
addHoverEffect(aboutButton);
addHoverEffect(contentButton);
addHoverEffect(cartButton);
addHoverEffect(logoutButton);

// Create and append about div
const aboutDiv = document.createElement("div");
aboutDiv.setAttribute("id", "aboutDiv");
document.body.appendChild(aboutDiv);
toggleVisibility(aboutDiv, false);

const exitAbout = document.createElement("button");
exitAbout.textContent = "Exit";
exitAbout.setAttribute("id", "exitAbout");
aboutDiv.appendChild(exitAbout);

const aboutText = document.createElement("p");
aboutText.textContent = "We are a gift company named Giftiz. We are high school students working on a project to learn how to open and manage a business.";
aboutDiv.appendChild(aboutText);

// About button event listener
aboutButton.addEventListener("click", () => {
    toggleVisibility(aboutDiv, true);
});

// Exit about button event listener
exitAbout.addEventListener("click", () => {
    toggleVisibility(aboutDiv, false);
});

// Create and append content div
const contentDiv = document.createElement("div");
contentDiv.setAttribute("id", "contentDiv");
document.body.appendChild(contentDiv);
toggleVisibility(contentDiv, false);

const exitContent = document.createElement("button");
exitContent.textContent = "Exit";
exitContent.setAttribute("id", "exitContent");
contentDiv.appendChild(exitContent);

const contentText = document.createElement("p");
contentText.textContent = "You can contact us at yazamin.@gmail.com";
contentDiv.appendChild(contentText);

// Content button event listener
contentButton.addEventListener("click", () => {
    toggleVisibility(contentDiv, true);
});

// Exit content button event listener
exitContent.addEventListener("click", () => {
    toggleVisibility(contentDiv, false);
});

// Logout button event listener
logoutButton.addEventListener("click", () => {
    toggleVisibility(menuDiv, false);
    toggleVisibility(loginDiv, true);
    showName.textContent = "Welcome";
    inputName.value = "";
    inputPassword.value = "";
});


// Create the Settings button
const settingButton = document.createElement("button");
settingButton.textContent = "Settings";
settingButton.setAttribute("id", "settingsButton");
menuDiv.appendChild(settingButton);

// Create the Settings container
const settingsDiv = document.createElement("div");
settingsDiv.setAttribute("id", "settingsDiv");
document.body.appendChild(settingsDiv);
settingsDiv.style.display = "none"; // Use display instead of visibility

// Create the Exit Settings button
const exitSettings = document.createElement("button");
exitSettings.textContent = "Exit";
exitSettings.setAttribute("id", "exitSettings");
settingsDiv.appendChild(exitSettings); // Append exitSettings, not exitAbout

// Add event listener to show settingsDiv
settingButton.addEventListener("click", function () {
    settingsDiv.style.display = "flex"; // Use flex to match the styling
});

// Add event listener to hide settingsDiv
exitSettings.addEventListener("click", () => {
    settingsDiv.style.display = "none";
});


const changeSettingsDiv = document.createElement("div")
changeSettingsDiv.setAttribute("id", "changeSettingsDiv")
settingsDiv.appendChild(changeSettingsDiv)