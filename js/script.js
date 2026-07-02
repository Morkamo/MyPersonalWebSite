document.addEventListener('DOMContentLoaded', function() {

    // #region Discord Button Copy to Clipboard
        const discordButton = document.querySelector('.discord-button');

        discordButton.addEventListener('click', function(ev) {
            ev.preventDefault();
        })

        discordButton.addEventListener('click', function() {
            const textToCopy = discordButton.getAttribute('data-clipboard-text');
            navigator.clipboard.writeText(textToCopy);
            alert('Имя пользователя скопировано: ' + textToCopy);
        })
    // #endregion

    // #region Profile Picture Animation
        const profilePicture = document.querySelector('.about-me-box-picture');
        
        if (profilePicture) {
            profilePicture.addEventListener('click', function() {
                profilePicture.classList.add('spinning');
            })

            profilePicture.addEventListener('animationend', function() {
                profilePicture.classList.remove('spinning');
            })
        }
    // #endregion

    // #region My Projects Picture Change Color Animation
        const myProjectsPictures = document.querySelectorAll('.about-my-projects-picture');

        const shadowColors = [
            'rgba(255, 0, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 150, 255, 1)',
            'rgba(255, 165, 0, 1)',
            'rgba(155, 89, 182, 1)',
            'rgba(241, 196, 15, 1)'
        ];

        myProjectsPictures.forEach(function(picture) {
            picture.addEventListener('picture-shaked', function() {
                const sortedColors = shadowColors.filter(color => color !== picture.dataset.currentColor);
                const randomIndex = Math.floor(Math.random() * sortedColors.length);
                const randomColor = sortedColors[randomIndex];
                picture.style.boxShadow = `0px 4px 10px ${randomColor}`;
                picture.dataset.currentColor = randomColor;
            });
        });
    // #endregion

    // #region My Projects Picture Shaking Animation
        const ProjectsPicture = document.querySelectorAll('.about-my-projects-picture');
        if (ProjectsPicture) {
            ProjectsPicture.forEach(function(picture) {
                picture.addEventListener('click', function() {
                    picture.classList.add('shaking');
                })
            })

            ProjectsPicture.forEach(function(picture) {
                picture.addEventListener('animationend', function() {
                    picture.classList.remove('shaking');
                    picture.dispatchEvent(new Event('picture-shaked'));
                })
            })
        }
    // #endregion
})
