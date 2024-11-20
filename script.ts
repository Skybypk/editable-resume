interface ResumeData {
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  skills: string;
}

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeoutput') as HTMLDivElement;

// Initialize resumeData with default empty values
let resumeData: ResumeData = {
  name: '',
  email: '',
  phone: '',
  education: '',
  experience: '',
  skills: ''
};

// Function to populate the form with current resume data
function populateForm(data: ResumeData): void {
  (document.getElementById('name') as HTMLInputElement).value = data.name;
  (document.getElementById('email') as HTMLInputElement).value = data.email;
  (document.getElementById('phone') as HTMLInputElement).value = data.phone;
  (document.getElementById('education') as HTMLTextAreaElement).value = data.education;
  (document.getElementById('experience') as HTMLTextAreaElement).value = data.experience;
  (document.getElementById('skills') as HTMLTextAreaElement).value = data.skills;
}

// Handle form submission
form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  // Gather form data
  const formData = new FormData(form);
  resumeData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    education: formData.get('education') as string,
    experience: formData.get('experience') as string,
    skills: formData.get('skills') as string,
  };

  // Generate resume
  generateResume(resumeData);
  populateForm(resumeData); // Optional: Keeps form updated with the entered values
});

// Function to generate resume with editable fields
function generateResume(data: ResumeData): void {
  resumeOutput.innerHTML = `
    <h2>Resume</h2>
    <div>
      <label for="resume-name">Name:</label>
      <input id="resume-name" type="text" class="editable" value="${data.name}" oninput="updateResume('name', this.value)" />
    </div>
    <div>
      <label for="resume-email">Email:</label>
      <input id="resume-email" type="text" class="editable" value="${data.email}" oninput="updateResume('email', this.value)" />
    </div>
    <div>
      <label for="resume-phone">Phone:</label>
      <input id="resume-phone" type="text" class="editable" value="${data.phone}" oninput="updateResume('phone', this.value)" />
    </div>
    <h3>Education</h3>
    <textarea id="resume-education" class="editable" oninput="updateResume('education', this.value)">${data.education}</textarea>
    <h3>Experience</h3>
    <textarea id="resume-experience" class="editable" oninput="updateResume('experience', this.value)">${data.experience}</textarea>
    <h3>Skills</h3>
    <textarea id="resume-skills" class="editable" oninput="updateResume('skills', this.value)">${data.skills}</textarea>
  `;
}

// Function to update the resume data when the user types in the editable fields
function updateResume(field: keyof ResumeData, value: string): void {
  resumeData[field] = value;
  populateForm(resumeData); // Update form with edited data
}
 