var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resumeoutput');
// Initialize resumeData with default empty values
var resumeData = {
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: ''
};
// Function to populate the form with current resume data
function populateForm(data) {
    document.getElementById('name').value = data.name;
    document.getElementById('email').value = data.email;
    document.getElementById('phone').value = data.phone;
    document.getElementById('education').value = data.education;
    document.getElementById('experience').value = data.experience;
    document.getElementById('skills').value = data.skills;
}
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Gather form data
    var formData = new FormData(form);
    resumeData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        education: formData.get('education'),
        experience: formData.get('experience'),
        skills: formData.get('skills'),
    };
    // Generate resume
    generateResume(resumeData);
    populateForm(resumeData); // Optional: Keeps form updated with the entered values
});
// Function to generate resume with editable fields
function generateResume(data) {
    resumeOutput.innerHTML = "\n    <h2>Resume</h2>\n    <div>\n      <label for=\"resume-name\">Name:</label>\n      <input id=\"resume-name\" type=\"text\" class=\"editable\" value=\"".concat(data.name, "\" oninput=\"updateResume('name', this.value)\" />\n    </div>\n    <div>\n      <label for=\"resume-email\">Email:</label>\n      <input id=\"resume-email\" type=\"text\" class=\"editable\" value=\"").concat(data.email, "\" oninput=\"updateResume('email', this.value)\" />\n    </div>\n    <div>\n      <label for=\"resume-phone\">Phone:</label>\n      <input id=\"resume-phone\" type=\"text\" class=\"editable\" value=\"").concat(data.phone, "\" oninput=\"updateResume('phone', this.value)\" />\n    </div>\n    <h3>Education</h3>\n    <textarea id=\"resume-education\" class=\"editable\" oninput=\"updateResume('education', this.value)\">").concat(data.education, "</textarea>\n    <h3>Experience</h3>\n    <textarea id=\"resume-experience\" class=\"editable\" oninput=\"updateResume('experience', this.value)\">").concat(data.experience, "</textarea>\n    <h3>Skills</h3>\n    <textarea id=\"resume-skills\" class=\"editable\" oninput=\"updateResume('skills', this.value)\">").concat(data.skills, "</textarea>\n  ");
}
// Function to update the resume data when the user types in the editable fields
function updateResume(field, value) {
    resumeData[field] = value;
    populateForm(resumeData); // Update form with edited data
}
