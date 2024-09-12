
const namee = document.getElementById('name');
const major = document.getElementById('major');
const profile = document.getElementById('profile1');
const number = document.getElementById('number');

const email = document.getElementById('email');
const adress = document.getElementById('address');

const web = document.getElementById('web');
const image = document.getElementById('avaterimage');

function update(id) {
    if (id === "number") {
        number.textContent = `+966503531981`;
    }
    if (id === "email") {
        email.textContent = `yohejazi@gmail.com`;
    }
    if (id === "address") {
        adress.textContent = `riyadh azizyah`;
    }
    if (id === "web") {
        web.textContent = `yosef.com`;
    }
    if (id === "number") {
        number.textContent = `+966503531981`;
    }
    if (id === "avaterimage") {
        image.setAttribute('src', 'https://images.pexels.com/photos/27835751/pexels-photo-27835751/free-photo-of-a-tree-with-green-apples-on-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load');
    }
    if (id === "name") {
        namee.textContent = `YOUSEF HEJAZI`;
    }
    if (id === "major") {
        major.textContent = `computer scineces`;
    }
    if (id === "profile1") {
        profile.textContent = `I aim to develop myself in the technical field, 
with an interest in web development and web 
applications. I have good problem-solving 
skills and a knack for finding practical 
solutions. I aspire to join and work with a web 
development team to enhance my skills and 
learn new technologies. I prefer challenges 
over routine tasks and am a quick learner. `;
    }
}
