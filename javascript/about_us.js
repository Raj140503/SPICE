document.addEventListener("DOMContentLoaded", function() {
    const text = "This is your About Page. This space is a great opportunity to give a full background on who you are, what you do and what your website has to offer."; // Your text here
    const typingText = document.getElementById("line");
    let index = 0;

    function typeLetter() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeLetter, 100); // Adjust typing speed here (in milliseconds)
        } else {
            typingText.style.borderRight = "none"; // Remove the cursor after typing is complete
        }
    }

    typeLetter();
});
