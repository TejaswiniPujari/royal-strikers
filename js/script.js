let slideNumber = 0;

const rank = {
    0: '1st',
    1: '2nd',
    2: '3rd'
}
const selectedTab = {
    reward: 'master',
    leaderboard: 'master'
}

const talentOverallRewardDescription = {
    0: '10*Days Cricket audio theme',
    1: '7*Days Cricket audio theme',
    2: '5*Days Cricket audio theme',
}
const talentOverallRewardImg = {
    0: './img/Cricket-audio-theme.png',
    1: './img/Cricket-audio-theme.png',
    2: './img/Cricket-audio-theme.png'
}

const talentDailyRewardDescription = {
    0: '40% of Gems Pot',
    1: '30% of Gems Pot',
    2: '15% of Gems Pot'
}
const talentDailyRewardImg = {
    0: './img/Gems.png',
    1: './img/Gems.png',
    2: './img/Gems.png'
}

const userMasterBlasterRewardDescription = {
    0: '15*Days Master Blaster Gold Profile Frame (Golden)',
    1: '15*Days Master Blaster Silver Profile Frame (Silver)',
    2: '15*Days Master Blaster Bronze Profile Frame (Bronze)',
}
const userMasterBlasterRewardImg = {
    0: './img/Master-blaster-gold-profile-frame.png',
    1: './img/Master-blaster-Silver-profile-frame.png',
    2: './img/Master-blaster-bronze-profile-frame.png'
}

const userCricketMasterRewardDescription = {
    0: '7*Days Gold Dragon Entrance',
    1: '5*Days Gold Dragon Entrance',
    2: '3*Days Gold Dragon Entrance',
}
const userCricketMasterRewardImg = {
    0: './img/Dragon-entrance-effect.png',
    1: './img/Dragon-entrance-effect.png',
    2: './img/Dragon-entrance-effect.png'
}

document.getElementById('talent-reward').style.display = 'none';
document.getElementById('talent-winner').style.display = 'none';
document.getElementById('talent-leaderboard').style.display = 'none';
document.getElementById('talent-game').style.display = 'none';
document.getElementById('cricket-user-winner').style.display = 'none';
document.getElementById('modal').style.display = 'none';

function hideGuidline() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('main').classList.remove('main');
}
function showGuidline() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('main').classList.add('main');
}

function setUserMode(banner) {
    document.getElementById(`${banner}-user-mode`).classList.remove('unselected-mode');
    document.getElementById(`${banner}-talent-mode`).classList.add('unselected-mode');
    if (banner == 'reward') {
        document.getElementById('user-reward').style.display = 'block';
        document.getElementById('talent-reward').style.display = 'none';
        setMasterBlaster('reward');
    }
    if (banner == 'leaderboard') {
        document.getElementById('user-leaderboard').style.display = 'block';
        document.getElementById('talent-leaderboard').style.display = 'none';
        document.getElementById('talent-winner').style.display = 'none';
        document.getElementById('user-winner').style.display = 'block';
        setMasterBlaster('leaderboard');
    }
    if (banner == 'game') {
        document.getElementById('talent-game').style.display = 'none';
        document.getElementById('user-game').style.display = 'block';
    }
}

function setTalentMode(banner) {
    document.getElementById(`${banner}-talent-mode`).classList.remove('unselected-mode');
    document.getElementById(`${banner}-user-mode`).classList.add('unselected-mode');
    if (banner == 'reward') {
        document.getElementById('user-reward').style.display = 'none';
        document.getElementById('talent-reward').style.display = 'block';
        setOverallReward('reward');
    }
    if (banner == 'leaderboard') {
        document.getElementById('user-leaderboard').style.display = 'none';
        document.getElementById('talent-leaderboard').style.display = 'block';
        document.getElementById('talent-winner').style.display = 'block';
        document.getElementById('user-winner').style.display = 'none';
        setOverallReward('leaderboard');
    }
    if (banner == 'game') {
        document.getElementById('talent-game').style.display = 'block';
        document.getElementById('user-game').style.display = 'none';
    }
}

function setMasterBlaster(banner) {
    selectedTab[banner] = 'master';
    document.getElementById(`${banner}-master-blaster`).classList.add('selected-tab');
    document.getElementById(`${banner}-cricket-master`).classList.add('unselected-tab');
    document.getElementById(`${banner}-master-blaster`).classList.remove('unselected-tab');
    document.getElementById(`${banner}-cricket-master`).classList.remove('selected-tab');
    document.getElementById(`${banner}-cricket-master`).classList.add('unselected-tab-right-side');
    document.getElementById(`${banner}-master-blaster`).classList.remove('unselected-tab-left-side');
    if (banner == 'reward') {
        document.getElementById('reward-description').innerHTML = userMasterBlasterRewardDescription[slideNumber];
        document.getElementById('reward-img').src = userMasterBlasterRewardImg[slideNumber];
    }
    if (banner == 'leaderboard') {
        document.getElementById('cricket-user-winner').style.display = 'none';
        document.getElementById('master-user-winner').style.display = 'block';
    }
}

function setCricketMaster(banner) {
    selectedTab[banner] = 'cricket';
    document.getElementById(`${banner}-master-blaster`).classList.add('unselected-tab');
    document.getElementById(`${banner}-master-blaster`).classList.add('unselected-tab-left-side');
    document.getElementById(`${banner}-cricket-master`).classList.add('selected-tab');
    document.getElementById(`${banner}-master-blaster`).classList.remove('selected-tab');
    document.getElementById(`${banner}-cricket-master`).classList.remove('unselected-tab');
    document.getElementById(`${banner}-cricket-master`).classList.remove('unselected-tab-right-side');
    if (banner == 'reward') {
        document.getElementById('reward-description').innerHTML = userCricketMasterRewardDescription[slideNumber];
        document.getElementById('reward-img').src = userCricketMasterRewardImg[slideNumber];
    }
    if (banner == 'leaderboard') {
        document.getElementById('cricket-user-winner').style.display = 'block';
        document.getElementById('master-user-winner').style.display = 'none';
    }
}

function setOverallReward(banner) {
    selectedTab[banner] = 'overall';
    document.getElementById(`overall-${banner}`).classList.add('selected-tab');
    document.getElementById(`daily-${banner}`).classList.add('unselected-tab');
    document.getElementById(`overall-${banner}`).classList.remove('unselected-tab');
    document.getElementById(`daily-${banner}`).classList.remove('selected-tab');
    document.getElementById(`overall-${banner}`).classList.remove('unselected-tab-left-side');
    document.getElementById(`daily-${banner}`).classList.add('unselected-tab-right-side');
    if (banner == 'reward') {
        document.getElementById('reward-description').innerHTML = talentOverallRewardDescription[slideNumber];
        document.getElementById('reward-img').src = talentOverallRewardImg[slideNumber];
    }
    if (banner == 'leaderboard') {
        document.getElementById('overall-talent-winner').style.display = 'block';
        document.getElementById('daily-talent-winner').style.display = 'none';
    }
}

function setDailyReward(banner) {
    selectedTab[banner] = 'daily';
    document.getElementById(`overall-${banner}`).classList.add('unselected-tab');
    document.getElementById(`overall-${banner}`).classList.add('unselected-tab-left-side');
    document.getElementById(`daily-${banner}`).classList.add('selected-tab');
    document.getElementById(`overall-${banner}`).classList.remove('selected-tab');
    document.getElementById(`daily-${banner}`).classList.remove('unselected-tab');
    document.getElementById(`daily-${banner}`).classList.remove('unselected-tab-right-side');
    if (banner == 'reward') {
        document.getElementById('reward-description').innerHTML = talentDailyRewardDescription[slideNumber];
        document.getElementById('reward-img').src = talentDailyRewardImg[slideNumber];
    }
    if (banner == 'leaderboard') {
        document.getElementById('overall-talent-winner').style.display = 'none';
        document.getElementById('daily-talent-winner').style.display = 'block';
    }
}

function setRewards() {
    if (selectedTab.reward == 'master') {
        document.getElementById('reward-description').innerHTML = userMasterBlasterRewardDescription[slideNumber];
        document.getElementById('reward-img').src = userMasterBlasterRewardImg[slideNumber];
    }
    else if (selectedTab.reward == 'cricket') {
        document.getElementById('reward-description').innerHTML = userCricketMasterRewardDescription[slideNumber];
        document.getElementById('reward-img').src = userCricketMasterRewardImg[slideNumber];
    }
    else if (selectedTab.reward == 'overall') {
        document.getElementById('reward-description').innerHTML = talentOverallRewardDescription[slideNumber];
        document.getElementById('reward-img').src = talentOverallRewardImg[slideNumber];
    }
    else {
        document.getElementById('reward-description').innerHTML = talentDailyRewardDescription[slideNumber];
        document.getElementById('reward-img').src = talentDailyRewardImg[slideNumber];
    }
}

function onLeftClick() {
    if (slideNumber > 0) {
        slideNumber = slideNumber - 1;
        document.getElementById('slide-number').innerHTML = rank[slideNumber];
        setRewards();
    }
}

function onRightClick() {
    if (slideNumber < 2) {
        slideNumber = slideNumber + 1;
        document.getElementById('slide-number').innerHTML = rank[slideNumber];
        setRewards();
    }
}