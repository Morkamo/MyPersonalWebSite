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
})

