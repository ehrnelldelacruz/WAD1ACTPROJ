// const profileContainer = document.getElementById("profile-container");
// profileContainer.textContent = "Hello, World!";

// const heading = document.createElement("h2");
// heading.textContent = "Student Profile";
// profileContainer.appendChild(heading);

// ============= HTML ELEMENTS MANIPULATION =============
// const container = document.getElementById("profile-container");
// const profHeader = document.getElementById("profile-heading");
// profHeader.textContent = "STUDENT PROFILE CARD";

// const card = document.createElement("div");
// card.className = "profile-card";

// const idframe = document.createElement("div");
// idframe.className = "id-frame";

// const image = document.createElement("img");
// image.src = "./photos/photo of me.jpg";
// image.alt = "Profile Picture of Ehrnell Dela Cruz";
// idframe.appendChild(image);

// const info = document.createElement("div");
// info.className = "student-info";

// const profHead = document.createElement("h3");
// profHead.className = "heading-h3";
// profHead.textContent = "Student Information";
// info.appendChild(profHead);

// const profName = document.createElement("p");
// profName.textContent = "Name: Dela Cruz, Ehrnell G.";
// info.appendChild(profName);

// const profAge = document.createElement("p");
// profAge.textContent = "Age: 19";
// info.appendChild(profAge);

// const profCourse = document.createElement("p");
// profCourse.textContent = "Course: Bachelor of Science in Information Systems";
// info.appendChild(profCourse);

// const profStatus = document.createElement("p");
// profStatus.textContent = "Status: Single";
// info.appendChild(profStatus);

// const profemail = document.createElement("p");
// profemail.textContent = "Email: ehrnieg@gmail.com";
// info.appendChild(profemail);

// card.append(idframe, info);
// container.append(card);

//==================== CSS STYLING (DOM) ==================
//Select the base container
const container = document.getElementById("profile-container");

// Apply container styles immediately
container.style.backgroundImage = "url('./photos/wallpaper.jfif')";
container.style.backgroundSize = "cover";
container.style.backgroundPosition = "center";
container.style.backgroundRepeat = "no-repeat";
container.style.backgroundAttachment = "fixed";
container.style.minHeight = "100vh";
container.style.width = "100%";
container.style.display = "flex";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.padding = "2rem";
container.style.fontFamily = "Arial, sans-serif";

//=================== Heading (HTML) =========================
//Setup the Header
const profHeader = document.getElementById("profile-heading");
profHeader.textContent = "STUDENT PROFILE CARD";
profHeader.style.color = "#fff";
profHeader.style.textShadow = "0 2px 4px rgba(0, 0, 0, 0.5)";
profHeader.style.margin = "0 0 0.5rem 0";
profHeader.style.textAlign = "center";
//============================================================

//Create the Profile Card
const card = document.createElement("div");
card.className = "profile-card";
card.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
card.style.backdropFilter = "blur(10px)";
card.style.borderRadius = "16px";
card.style.padding = "2rem";
card.style.display = "flex";
card.style.flexDirection = "column";
card.style.alignItems = "center";
card.style.gap = "1rem";
card.style.width = "320px";
card.style.boxShadow = "0 8px 14px rgba(0, 0, 0, 0.1)"; 

// 4. Create the ID Frame
const idframe = document.createElement("div");
idframe.className = "id-frame";
idframe.style.border = "4px solid #fff";
idframe.style.outline = "2px solid rgba(255, 255, 255, 0.5)";
idframe.style.outlineOffset = "4px";
idframe.style.borderRadius = "8px";
idframe.style.background = "#fff";
idframe.style.padding = "4px";

// =================== Image (HTML) =================
//Create the Image
const image = document.createElement("img");
image.src = "./photos/photo of me.jpg";
image.alt = "Profile Picture of Ehrnell Dela Cruz";
image.style.width = "150px";
image.style.height = "150px";
image.style.objectFit = "cover";
image.style.display = "block";
image.style.borderRadius = "4px";
idframe.appendChild(image);
//====================================================

//Create the Student Info Container
const info = document.createElement("div");
info.className = "student-info";
info.style.background = "transparent";
info.style.display = "flex";
info.style.flexDirection = "column";
info.style.gap = "0.35rem";
info.style.textAlign = "left";
info.style.width = "100%";

//=================== Create and Add Profile Information (HTML) =================
//Create the H3 Header
const profHead = document.createElement("h3");
profHead.className = "heading-h3";
profHead.textContent = "Student Information";
profHead.style.color = "#fff";
profHead.style.margin = "0 0 0.25rem 0";
profHead.style.textAlign = "center";
info.appendChild(profHead);
//===============================================================================

//Helper function to create and style paragraphs easily
function createProfileParagraph(text) {
const p = document.createElement("p");
p.textContent = text;
p.style.margin = "0";
p.style.color = "#fff";
p.style.fontSize = "0.95rem";
return p;
}

//=================== Create and Add Profile Information (HTML) =================
// Create and add paragraphs using the helper function
// createProfileParagraph function is used to create and style each paragraph for the profile information.
const profName = createProfileParagraph("Name: Dela Cruz, Ehrnell G.");
const profAge = createProfileParagraph("Age: 19");
const profCourse = createProfileParagraph("Course: Bachelor of Science in Information Systems");
const profStatus = createProfileParagraph("Status: Single");
const profemail = createProfileParagraph("Email: ehrnieg@gmail.com");

info.append(profName, profAge, profCourse, profStatus, profemail);

// Assemble and append everything to the DOM
card.append(idframe, info);
container.append(card);