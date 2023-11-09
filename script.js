function scrollToSkills() {
    var skillsSection = document.getElementById('skills');
    skillsSection.scrollIntoView({ behavior: 'smooth' });
}

if (performance.navigation.type == 1) {
    // Redirect to the landing page on refresh
    window.location.href = "index.html"; // Replace with the actual landing page URL
}


  