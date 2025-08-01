// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// change words
document.addEventListener("DOMContentLoaded", function () {
            const words = ["Web Developer", "Front-End Developer", "Back-End Developer", "Graphic Designer", "Programmer"];
            let index = 0;

            function changeWord() {
                const word = words[index];
                const container = document.getElementById("wordContainer");
                container.textContent = '';

                // Type out the word letter by letter
                for (let i = 0; i < word.length; i++) {
                    setTimeout(() => {
                        container.textContent += word[i];
                    }, i * 100); // Adjust typing speed here
                }

                index = (index + 1) % words.length;
            }

            setInterval(changeWord, 5000); // Change word every 5 seconds
            changeWord(); // Initial word display
        });
