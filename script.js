let aboutme_btn = document.getElementById('aboutme-btn');
let skills_btn = document.getElementById('skills-btn');
let contacts_btn = document.getElementById('contacts-btn');

let aboutme_text = document.getElementById('aboutme-text');
let skills_text = document.getElementById('skills-text');
let contacts_text = document.getElementById('contacts-text');


aboutme_btn.addEventListener("click", function() {
    aboutme_text.style.display = 'block';
    skills_text.style.display = 'none';
    contacts_text.style.display = 'none';

    aboutme_btn.style.backgroundColor = '#005799'
});

skills_btn.addEventListener("click", function() {
    skills_text.style.display = 'block';
    aboutme_text.style.display = 'none';
    contacts_text.style.display = 'none';

    skills_btn.style.backgroundColor = '#005799'
})

contacts_btn.addEventListener("click", function() {
    contacts_text.style.display = 'block'
    skills_text.style.display = 'none';
    aboutme_text.style.display = 'none';

    contacts_btn.style.backgroundColor = '#005799'
})