document.addEventListener("DOMContentLoaded", function() {
    try {
      function alignCirclesWithHeadings() {
        alignCircles('Education', [
          'languagesTitle',
          'universityTitle',
          'professionalDevelopmentTitle'
        ], [
          'circle1',
          'circle2',
          'circle3'
        ]);
      }
  
      function alignCircles(sectionId, headingsIds, circlesIds) {
        const headings = headingsIds.map(id => document.getElementById(id));
        const circles = circlesIds.map(id => document.getElementById(id));
  
        const container = document.getElementById(sectionId);
        const containerRect = container.getBoundingClientRect();
        const containerTop = containerRect.top + window.scrollY;
  
        headings.forEach((heading, index) => {
          const rect = heading.getBoundingClientRect();
          const positionY = rect.top + window.scrollY - containerTop;
          circles[index].setAttribute('cy', positionY - 10);
        });
      }
  
  
      function modeLight() {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        document.documentElement.style.setProperty('--base-color', '#ffffff');
        document.documentElement.style.setProperty('--bg-base-header', 'rgba(255, 255, 255, 1)');
        document.documentElement.style.setProperty('--text-color', '#001f3f');
        document.documentElement.style.setProperty('--card-color', '#ebeced');
        document.documentElement.style.setProperty('--icon-color', '#ffffff');
        document.documentElement.style.setProperty('--bg-icon', '#3b3939');
        document.getElementById("bg-availableToWork").classList.remove('bg-[rgba(0,0,0,0.6)]');
        document.getElementById("bg-availableToWork").classList.add('bg-[rgba(255,255,255,1)]');
      }
  
      function modeDark() {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        document.documentElement.style.setProperty('--base-color', 'rgba(18, 18, 18, 1)');
        document.documentElement.style.setProperty('--bg-base-header', 'rgba(18, 18, 18, 1)');
        document.documentElement.style.setProperty('--text-color', '#e0e0e0');
        document.documentElement.style.setProperty('--card-color', '#1e1e1e');
        document.documentElement.style.setProperty('--bg-icon', '#ffffff');      
        document.getElementById("bg-availableToWork").classList.remove('bg-[rgba(255,255,255,1)]');
        document.getElementById("bg-availableToWork").classList.add('bg-[rgba(18,18,18,1)]');
      }
      
      function hideMobileMenu() {
        if (mobileMenu.style.display === 'block') {
          mobileMenu.style.display = 'none';
          document.querySelectorAll(".name")[0].style.display = 'block';
        }
      }
      
      window.addEventListener('scroll', () => {
        alignCirclesWithHeadings();
        hideMobileMenu();
        modal.classList.add("hidden");
        document.getElementById("previewProject").classList.add("hidden");
      });
      
      window.addEventListener("resize", () => {
        alignCirclesWithHeadings();
        modal.classList.add("hidden");
        document.getElementById("previewProject").classList.add("hidden");
      });
  
      window.onload = function() {
        alignCirclesWithHeadings();
      };
      
      

      
      
      
      
      
      const themeToggle = document.getElementById('theme-toggle');
      const copyButton = document.getElementById('copyButton');
      const languageToggle = document.getElementById('language-toggle');
      const languageMenu = document.getElementById('language-menu');    
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
      const theme = localStorage.getItem('theme');
      const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      const carouselTrack = document.getElementById("carouselTrack");
      const modal = document.getElementById("imageModal");
      const modalImage = document.getElementById("modalImage");
      const closeModal = document.getElementsByClassName("close")[0];
      const closePreviewProject = document.getElementsByClassName("close")[1];
      const projectContainers = document.querySelectorAll('.project');
      const prevButton = document.querySelector('.prev-button');
      const nextButton = document.querySelector('.next-button');  
      let currentIndex = 0;
      let imagesArray;
      let currentImageIndex = 0;

      
      document.addEventListener('click', (event) => {
        if (!languageToggle.contains(event.target) && !languageMenu.contains(event.target)) {
          languageMenu.classList.add('hidden');
        }
      });
      
      themeToggle.addEventListener('click', () => {
        if(themeToggle.innerHTML === '<i class="fas fa-moon"></i>') {
          modeDark()
          localStorage.setItem('theme', '<i class="fas fa-moon"></i>');
        } else {
          modeLight()
          localStorage.setItem('theme', '<i class="fas fa-sunset "></i>');
        }
      });
  
      if (theme === '<i class="fas fa-moon"></i>') {
        modeDark()
      } else if(theme === '<i class="fas fa-sunset "></i>') {
        modeLight()
      } else if(!theme){
        if (isDarkMode.matches) {
          modeDark()
          localStorage.setItem('theme', '<i class="fas fa-moon"></i>');
        } else {
          modeLight()
          localStorage.setItem('theme', '<i class="fas fa-sunset "></i>');        
        }
      }
      
      isDarkMode.addEventListener("change", (e) => {
        if (e.matches) {
          modeDark()
          localStorage.setItem('theme', '<i class="fas fa-moon"></i>');
        } else {
          modeLight()
          localStorage.setItem('theme', '<i class="fas fa-sunset "></i>');        
        }
      });    
  
  
      mobileMenuToggle.addEventListener('click', () => {
        if (mobileMenu.style.display === 'block') {
          mobileMenu.classList.remove('mobile-menu-animate');
          mobileMenu.classList.add('mobile-menu-animateRemove');
          setTimeout(() => {
            mobileMenu.classList.remove('mobile-menu-animateRemove');
            mobileMenu.style.display = 'none';
            document.querySelectorAll(".name")[0].style.display = 'block';
          }, 500);
        } else {
          mobileMenu.style.display = 'block';
          mobileMenu.classList.add('mobile-menu-animate');
          document.querySelectorAll(".name")[0].style.display = 'none';
        }
      });
  
  
      languageToggle.addEventListener('click', () => {
        document.getElementById("language-menu").classList.toggle('hidden');
        hideMobileMenu()     
      });
  
  
      let isCopying = false;
      copyButton.addEventListener('click', () => {
        if(isCopying) return;
        navigator.clipboard.writeText('miguelangelabou@gmail.com').then(() => {
          isCopying = true;
          const text = copyButton.textContent;
          copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" width="22px" height="22px" stroke-width="2"><path d="M0 0h24v24H0z" stroke="none"></path><path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path><path d="M4.012 16.737a2 2 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path><path d="M11 14l2 2l4 -4"></path></svg>'
          setTimeout(() => {
            copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="22px" height="22px" stroke-width="2"><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path></svg> '+text;
            isCopying = false;
          }, 2000)
        });
      });
      
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          const stickyHeight = document.getElementById('TOP').offsetHeight;
          window.scrollTo({
            top: target.offsetTop - stickyHeight,
            behavior: 'smooth'
          });
          
          hideMobileMenu()
        });  
      });

      
      function moveCarousel() {
        const offset = (currentIndex * - 20);
        carouselTrack.style.transform = `translateX(${offset}%)`;
      }
      
      document.querySelectorAll('.carousel-image').forEach((image, index) => {
        image.addEventListener('click', function() {
          const fullSizeImage = this.getAttribute('data-src');
          modal.classList.remove("hidden");
          modalImage.src = fullSizeImage;
        });
      
        image.addEventListener('click', () => {
          currentIndex = index;
          moveCarousel();
        });
      });

      document.getElementById("profile").addEventListener('click', () => {
        const fullSizeImage = document.getElementById("profile").getAttribute('data-src');
        modal.classList.remove("hidden");
        modalImage.src = fullSizeImage;
      })
      
      closeModal.addEventListener('click', function() {
        modal.classList.add("hidden");
      });

      modal.addEventListener('click', function(event) {
        if (event.target === modal) {
          modal.classList.add("hidden");
        }
      });

      projectContainers.forEach(container => {
        container.addEventListener('click', function(event) {
          if (event.target.tagName === 'A' || event.target.tagName === 'I') return;
          
          const index = this.getAttribute('data-index');
          currentProjectIndex = index;
          currentImageIndex = 0;
          imagesArray = JSON.parse(this.getAttribute('data-images'));
      
          document.getElementById("projectTitle").innerText = this.getAttribute('data-name');
          document.getElementById("projectDescription").innerText = this.getAttribute('data-description');
          document.getElementById("projectLanguages").innerText = this.getAttribute('data-languages');
          document.getElementById("projectDate").innerText = this.getAttribute('data-date');
          document.getElementById("projectRol").innerText = this.getAttribute('data-rol');
          document.getElementById("projectFrameworks").innerText = this.getAttribute('data-frameworks');
          document.getElementById("projectLink").href = this.getAttribute('data-project-link');
          document.getElementById("githubLink").href = this.getAttribute('data-github-link');
          document.getElementById("previewProjectImage").src = JSON.parse(this.getAttribute('data-images'))[currentImageIndex];
          document.getElementById("previewProject").classList.remove("hidden");
        });
      });

      document.getElementById("previewProject").addEventListener('click', (event) => {
        if(!document.getElementById("previewProjectContainer").contains(event.target)) {
          document.getElementById("previewProject").classList.add("hidden");
        }
      })

      closePreviewProject.addEventListener('click', function() {
        document.getElementById("previewProject").classList.add("hidden");
      });

      prevButton.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + -1 + imagesArray.length) % imagesArray.length;
        document.getElementById("previewProjectImage").src = imagesArray[currentImageIndex];

      });

      nextButton.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1 + imagesArray.length) % imagesArray.length;
        document.getElementById("previewProjectImage").src = imagesArray[currentImageIndex];
      });

    } catch (err) {
      console.log("Error: "+err)
    }
});