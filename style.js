let noClickCount = 0;

    setTimeout(() => {
        document.getElementById('content').classList.add('fade-in');
        setTimeout(() => {
            document.getElementById('content').classList.remove('fade-in');
            setTimeout(() => {
                document.getElementById('content').classList.add('hidden');
                document.getElementById('poem').classList.remove('hidden');
                document.getElementById('poem').classList.add('fade-in');
                setTimeout(() => {
                    document.getElementById('poem').classList.remove('fade-in');
                    setTimeout(() => {
                        document.getElementById('poem').classList.add('hidden');
                        document.getElementById('question').classList.remove('hidden');
                        document.getElementById('buttons').classList.remove('hidden');
                    }, 2000);
                }, 15000);
            }, 2000);
        }, 2000);
    }, 500);

    function yesClicked() {
        document.getElementById('emoji').innerText = '🤗';
        setTimeout(() => {
            document.getElementById('question').classList.add('hidden');
            document.getElementById('buttons').classList.add('hidden');
            document.getElementById('final').classList.remove('hidden');
            createFlyingHearts();
        }, 2000);
    }

    function noClicked() {
        const emoji = document.getElementById('emoji');
        const noBtn = document.getElementById('no-btn');
        noClickCount++;

        if (noClickCount === 1) {
            emoji.innerText = '🥺';
        } else if (noClickCount === 2) {
            emoji.innerText = '😢';
        } else if (noClickCount === 3) {
            emoji.innerText = '🤗';
            noBtn.innerText = 'Yes, why not!';
            setTimeout(() => {
                document.getElementById('question').classList.add('hidden');
                document.getElementById('buttons').classList.add('hidden');
                document.getElementById('final').classList.remove('hidden');
                createFlyingHearts();
            }, 2000);
        }
    }

    function createFlyingHearts() {
        setInterval(() => {
            let heart = document.createElement('div');
            heart.innerText = '❤️';
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, 300);
    }

