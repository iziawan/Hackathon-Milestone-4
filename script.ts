// Get references to form and resume content elements
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeContent = document.getElementById(
  "resume-content"
) as HTMLDivElement;

// Event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting the traditional way

  // Get form values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value;
  const workExperience = (
    document.getElementById("work-experience") as HTMLTextAreaElement
  ).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  // Basic Validation
  if (!name || !email || !phone || !education || !workExperience || !skills) {
    alert("Please fill out all fields.");
    return;
  }

  // Generate resume content
  const resumeHTML = `
        <h3 contenteditable="true">Personal Information</h3>
        <p><strong>Name:</strong> <span contenteditable="true">${name}</span></p>
        <p><strong>Email:</strong> <a href="mailto:${email}" contenteditable="true">${email}</a></p>
        <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
        
        <h3 contenteditable="true">Education</h3>
        <p contenteditable="true">${education}</p>
        
        <h3 contenteditable="true">Work Experience</h3>
        <p contenteditable="true">${workExperience}</p>
        
        <h3 contenteditable="true">Skills</h3>
        <ul>
            ${skills
              .split(",")
              .map((skill) => `<li contenteditable="true">${skill.trim()}</li>`)
              .join("")}
        </ul>
    `;

  // Update resume content
  resumeContent.innerHTML = resumeHTML;
});
