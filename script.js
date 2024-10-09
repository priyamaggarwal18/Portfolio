function scrollToSkills() {
    var skillsSection = document.getElementById('skills');
    skillsSection.scrollIntoView({ behavior: 'smooth' });
}

function scrolltohome() {
    var skillsSection = document.getElementById('home');
    skillsSection.scrollIntoView({ behavior: 'smooth' });
}

if (performance.navigation.type == 1) {
    // Redirect to the landing page on refresh
    window.location.href = "index.html"; // Replace with the actual landing page URL
}

// document.getElementById('downloadButton').addEventListener('click', function() {
//     var link = document.createElement('a');
//     link.href = 'download.pdf'; 
//     link.target='_/blank' // Replace with the actual path to your PDF file
//     link.download = 'downloaded_file.pdf';  // Specify the name for the downloaded file
//     link.click();
// });

  // Add an event listener for the scroll event
  const skillsSection = document.querySelector('.skills');
  const skillElements = document.querySelectorAll('.skill');

  const observer1 = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              skillElements.forEach(element => {
                  element.style.opacity = 1;
              });
          }
          else{
            skillElements.forEach(element => {
                element.style.opacity = 0;
            });

          }
      });
  }, { threshold: 0.5 });

  skillElements.forEach(element => {
      observer1.observe(element);
  });



// Get all the experience containers
const experienceContainers = document.querySelectorAll('.container');

// Function to handle intersection changes
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        } else {
            entry.target.classList.remove('animated');
        }
    });
};

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Observe each experience container
experienceContainers.forEach(container => {
    observer.observe(container);
});

//For timline line
// Get the timeline element
const timeline = document.querySelector('.timeline');

// Function to handle intersection changes for the timeline
const handleTimelineIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        } else {
            entry.target.classList.opacity(0);
        }
    });
};

// Create an Intersection Observer for the timeline
const timelineObserver = new IntersectionObserver(handleTimelineIntersection, { threshold: 0.5 });

// Observe the timeline
timelineObserver.observe(timeline);



//js animation for projects section
const projectElements= document.querySelectorAll('.gallery');

const observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            projectElements.forEach(element => {
                element.style.opacity = 1;
            });
        }
        else{
          projectElements.forEach(element => {
              element.style.opacity = 0;
          });

        }
    });
}, { threshold: 0.5 });

projectElements.forEach(element => {
    observer2.observe(element);
});

// CSS FOR About SECTION 
const aboutElements= document.querySelectorAll('.about');

const observer3 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutElements.forEach(element => {
                element.style.opacity = 1;
            });
        }
        else{
          aboutElements.forEach(element => {
              element.style.opacity = 0;
          });

        }
    });
}, { threshold: 0.5 });

aboutElements.forEach(element => {
    observer3.observe(element);
});


const toggleButton = document.getElementById('theme-toggle');
const root = document.documentElement;
const icon = toggleButton.querySelector('i');

// Add an event listener to the toggle button
toggleButton.addEventListener('click', function () {
  // Check if the current mode is dark mode (black background)
  if (root.style.getPropertyValue('--primary-color') === 'black') {
    // Switch to light mode by swapping the colors
    root.style.setProperty('--primary-color', 'white');
    root.style.setProperty('--primary-text-color', 'black');
    root.style.setProperty('--secondary-color', 'black');
    root.style.setProperty('--secondary-text-color', 'white');
    
    // Change the icon to a sun (for light mode)
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');

  } else {
    // Switch back to dark mode by swapping the colors
    root.style.setProperty('--primary-color', 'black');
    root.style.setProperty('--primary-text-color', 'white');
    root.style.setProperty('--secondary-color', 'white');
    root.style.setProperty('--secondary-text-color', 'black');
    
    // Change the icon to a moon (for dark mode)
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

