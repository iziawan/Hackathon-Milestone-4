// Get references to form and resume content elements
var form = document.getElementById('resume-form');
var resumeContent = document.getElementById('resume-content');
// Event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    // Basic Validation
    if (!name || !email || !phone || !education || !workExperience || !skills) {
        alert("Please fill out all fields.");
        return;
    }
    // Generate resume content
    var resumeHTML = "\n        <h3 contenteditable=\"true\">Personal Information</h3>\n        <p><strong>Name:</strong> <span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><strong>Email:</strong> <a href=\"mailto:").concat(email, "\" contenteditable=\"true\">").concat(email, "</a></p>\n        <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        \n        <h3 contenteditable=\"true\">Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        \n        <h3 contenteditable=\"true\">Work Experience</h3>\n        <p contenteditable=\"true\">").concat(workExperience, "</p>\n        \n        <h3 contenteditable=\"true\">Skills</h3>\n        <ul>\n            ").concat(skills.split(',').map(function (skill) { return "<li contenteditable=\"true\">".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    ");
    // Update resume content
    resumeContent.innerHTML = resumeHTML;
});
