const ramOptions = document.querySelectorAll('.ram-options');

// Get the paragraph to show selected option
const selectedOption = document.getElementById('selected-option');

ramOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Remove "selected" class from all items first
        ramOptions.forEach(opt => opt.classList.remove('selected'));

        // Add "selected" class to the clicked item
        option.classList.add('selected');

        // Update the text below
        selectedOption.textContent = `You selected: ${option.textContent}`;
    });
});