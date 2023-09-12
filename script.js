// Function to set dark mode preference in local storage
function setDarkModePreference(isDarkMode) {
	localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
  }
  
  // Function to toggle dark mode
  function toggleDarkMode() {
	const switchMode = document.getElementById('switch-mode');
	const isDarkMode = switchMode.checked;
  
	if (isDarkMode) {
	  document.body.classList.add('dark');
	} else {
	  document.body.classList.remove('dark');
	}
  
	// Save the dark mode preference in local storage
	setDarkModePreference(isDarkMode);
  }
  
  // Function to load dark mode preference from local storage
  function loadDarkModePreference() {
	const storedDarkMode = localStorage.getItem('darkMode');
	const switchMode = document.getElementById('switch-mode');
  
	if (storedDarkMode === 'true') {
	  switchMode.checked = true;
	  toggleDarkMode();
	}
  }
  
  // Attach event listener to switch mode checkbox
  const switchMode = document.getElementById('switch-mode');
  switchMode.addEventListener('change', toggleDarkMode);
  
  // Load dark mode preference on page load
  loadDarkModePreference();
  