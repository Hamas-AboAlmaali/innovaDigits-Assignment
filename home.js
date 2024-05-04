const words = document.querySelectorAll('.word');
const reactionsProgressBarParent = document.querySelector('.reaction-progress-container')
const reactionsProgressBar = document.querySelector('.progress-bar span')
const starsProgressBar = document.querySelector('.second-row .container')
const spans = document.querySelectorAll('.second-row .container .progress-bar span');
const pieChartContainer = document.querySelector('.third-row')
const pieChart = document.querySelector('.third-row .pie-chart')
const avatars = document.querySelectorAll('.section-four .third-row .pie-chart-container .avatar')
const barChartContainer = document.querySelector('.section-four .fourth-row .container')
const reactions = document.querySelectorAll('.section-four .first-row .progress-bar .reactions')
const stars = document.querySelectorAll('.section-four .second-row .container .star')
const characters = document.querySelectorAll('.section-four .fourth-row .container .character')
const spinningWheelSection = document.querySelector('.section-two .info')
const netPromoterScore = document.querySelector('.section-two .info .net-promoter-score')
const textAnswer = document.querySelector('.section-two .info .text-answer')
const addQuestionCircle = document.querySelector('.section-two .info .spinning-wheel')
const ctx = document.getElementById('myChart');
const leftSwitch = document.querySelector('.section-five .main .switches .left-switch')
const rightSwitch = document.querySelector('.section-five .main .switches .right-switch')
const questionBank = document.querySelector('.section-five .question-bank')
const surveyLanguage = document.querySelector('.section-five .survey-language')
const sectionEight = document.querySelector('.section-eight')
const sectionEightVector = document.querySelector('.section-eight .vector')
const sectionEightContent = document.querySelector('.section-eight .main-section .content')
const sectionEightForm = document.querySelector('.section-eight .main-section .form')
let data = [];


setInterval(toggleWords, 3000);

reactionsProgressBarParent.addEventListener('click', reactionsAnimation)

starsProgressBar.addEventListener('click', starsAnimation)

pieChartContainer.addEventListener('click', pieChartAnimation)

barChartContainer.addEventListener('click', barChartAnimation)

const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Answer 4', 'Answer 5', 'Answer 5', 'Answer 5'],
        datasets: [{
            label: '# of Votes',
            data: data,
            barPercentage: 0.4,
            borderRadius: 2,
            backgroundColor: [
                'rgba(117, 155, 228, 1)',
                'rgba(98, 0, 238, 1)',
                'rgba(133, 207, 136, 1)',
                'rgba(247, 166, 107, 1)',
                'rgba(206, 176, 250, 1)',
                'rgba(129, 51, 241, 1)',
                'rgba(206, 176, 250, 1)',
                'rgba(108, 174, 174, 1)'
            ]
        }]
    },
    options: {
        animation: {
            duration: 2000
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                border: {
                    dash: [3, 3],
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.2)',
                },
                beginAtZero: true,
                min: 0,
                max: 100,
                ticks: {
                    callback: function (value) {
                        return value + '%';
                    }
                }
            }
        }
    }
});

spinningWheelSection.addEventListener('click', spinningWheelAnimation)

leftSwitch.addEventListener('click', homeLeftSwitchAnimation)

rightSwitch.addEventListener('click', homeRightSwitchAnimation)

sectionEight.addEventListener('click', sectionEightAnimation)
