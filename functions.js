let index = 0;
let vectorFlag = false
let spinFlag = false



function toggleWords() {
    words.forEach(word => word.classList.remove('active'));
    words[index].classList.add('active');
    index = (index + 1) % words.length;
}

function reactionsAnimation() {
    reactionsProgressBar.style.width = '100%'
    reactions.forEach(reaction => {
        reaction.style.opacity = '1'
        reaction.style.transform = 'translateY(-100px)'
    })
}

function starsAnimation() {
    spans.forEach((span) => {
        span.style.width = span.dataset.width;
    });

    stars.forEach((star) => {
        star.style.opacity = '1';
        star.style.transform = 'translateX(230px)'
    });
}

function pieChartAnimation() {
    pieChart.style.background = 'conic-gradient(rgba(98, 0, 238, 1) 0% 40%, rgba(0, 201, 189, 1) 40% 80%, rgba(98, 0, 238, 1) 80% 100%)';
    pieChart.style.border = '1px solid rgba(98, 0, 238, 1)';
    pieChart.style.opacity = '1';
    avatars.forEach((avatar) => {
        avatar.style.opacity = '1';
    })
}

function barChartAnimation() {
    updateData()
    characters.forEach((character) => {
        character.style.opacity = '1';
    })
    characters[0].style.transform = 'translateY(-110px)'
    characters[1].style.transform = 'translateY(-166px)'
    characters[2].style.transform = 'translateY(-82px)'
    characters[3].style.transform = 'translateY(-53px)'
    characters[4].style.transform = 'translateY(-110px)'
    characters[5].style.transform = 'translateY(-110px)'
    characters[6].style.transform = 'translateY(-110px)'
    characters[7].style.transform = 'translateY(-223px)'
}

function ProgressBar() {
    let width = 0
    let id = setInterval(function () {
        if (width >= 100) {
            clearInterval(id)
        } else {
            width += 10
            reactionsProgressBar.style.width = width + '%'
        }
    }, 100)
}

function updateData() {
    const newData = [30, 50, 20, 10, 30, 30, 30, 70]
    chart.data.datasets[0].data = newData;
    chart.update();
}

function spinningWheelAnimation() {
    spinFlag = !spinFlag
    if (spinFlag) {
        netPromoterScore.style.opacity = '1'
        netPromoterScore.style.transform = 'translateX(240px)'
        textAnswer.style.opacity = '1'
        textAnswer.style.transform = 'translateX(160px)'
        addQuestionCircle.style.opacity = '1'
        addQuestionCircle.style.transform = 'translateX(-129px)'
    } else {
        netPromoterScore.style.opacity = '0'
        netPromoterScore.style.transform = 'translateX(-200px)'
        textAnswer.style.opacity = '0'
        textAnswer.style.transform = 'translateX(-160px)'
        addQuestionCircle.style.opacity = '0'
        addQuestionCircle.style.transform = 'translateX(160px)'
    }
}

function homeLeftSwitchAnimation() {
    leftSwitch.style.backgroundColor = ''
    leftSwitch.style.cursor = ''
    questionBank.style.transform = 'translateX(0px)'
    surveyLanguage.style.transform = 'translateX(1000px)'
}

function homeRightSwitchAnimation() {
    leftSwitch.style.backgroundColor = 'white'
    leftSwitch.style.cursor = 'pointer'
    questionBank.style.transform = 'translateX(1000px)'
    surveyLanguage.style.transform = 'translateX(-1000px)'
}

function sectionEightAnimation() {
    vectorFlag = !vectorFlag

    if (vectorFlag) {
        sectionEightVector.style.transform = 'translateX(300px) translateY(367px)';
        sectionEightVector.style.opacity = '1';
        sectionEightContent.style.transform = 'translateX(-650px)';
        sectionEightForm.style.transform = 'translateX(650px)';
    } else {
        sectionEightVector.style.transform = 'scale(3.5)';
        sectionEightVector.style.opacity = '0.2';
        sectionEightContent.style.transform = 'translateX(0px)';
        sectionEightForm.style.transform = 'translateX(0px)';

    }
}
