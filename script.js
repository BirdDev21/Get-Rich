let coins = 0;
let coinsPerClick = 1;
let workerCount = 0;

const coinCountElement = document.getElementById('coinCount');
const coinsPerClickElement = document.getElementById('coinsPerClick');
const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');
const hireWorkerButton = document.getElementById('hireWorkerButton');
const workerCountElement = document.getElementById('workerCount');

// Function to update the displayed coin count
function updateCoinCount() {
    coinCountElement.textContent = coins;
}

// Function to handle the click event
function handleClick() {
    coins += coinsPerClick;
    updateCoinCount();
}

// Function to handle the upgrade event
function handleUpgrade() {
    if (coins >= 10) { // Check if the player has enough coins to buy an upgrade
        coins -= 10;
        coinsPerClick += 1;
        updateCoinCount();
        coinsPerClickElement.textContent = coinsPerClick;
    } else {
        alert('Not enough coins to buy an upgrade!');
    }
}

// Function to handle hiring workers
function hireWorker() {
    if (coins >= 50) { // Check if the player has enough coins to hire a worker
        coins -= 50;
        workerCount += 1;
        updateCoinCount();
        workerCountElement.textContent = workerCount;
    } else {
        alert('Not enough coins to hire a worker!');
    }
}

// Function to automatically generate coins based on the number of workers
function generateCoinsFromWorkers() {
    coins += workerCount;
    updateCoinCount();
}

// Add event listeners
clickButton.addEventListener('click', handleClick);
upgradeButton.addEventListener('click', handleUpgrade);
hireWorkerButton.addEventListener('click', hireWorker);

// Automatically generate coins from workers every second
setInterval(generateCoinsFromWorkers, 1000); // 1000 milliseconds = 1 second

// ... (previous code)

// ... (previous code)

let investments = {
    business: {
        name: "Business Venture",
        cost: 1000,
        earnings: 50,
        interval: 5000, // Earnings every 5 seconds
    },
    stocks: {
        name: "Stock Market",
        cost: 5000,
        earnings: 200,
        interval: 10000, // Earnings every 10 seconds
    },
    realEstate: {
        name: "Real Estate",
        cost: 10000,
        earnings: 500,
        interval: 15000, // Earnings every 15 seconds
    },
    crypto: {
        name: "Cryptocurrency",
        cost: 20000,
        earnings: 1000,
        interval: 20000, // Earnings every 20 seconds
    },
    // Add more investment options here
};

// Function to handle investments
function invest(type) {
    if (coins >= investments[type].cost) {
        coins -= investments[type].cost;
        setInterval(function () {
            coins += investments[type].earnings;
            updateCoinCount();
        }, investments[type].interval);
        alert(`Invested in ${investments[type].name}!`);
    } else {
        alert('Not enough coins to invest!');
    }
}

// Add event listeners for investment buttons
document.getElementById('investBusinessButton').addEventListener('click', function () {
    invest('business');
});

document.getElementById('investStocksButton').addEventListener('click', function () {
    invest('stocks');
});

document.getElementById('investRealEstateButton').addEventListener('click', function () {
    invest('realEstate');
});

document.getElementById('investCryptoButton').addEventListener('click', function () {
    invest('crypto');
});

// ... (other functions)

// ...

// ... (previous code)

// Function to toggle the visibility of investments
function toggleInvestments() {
    const investmentsDiv = document.getElementById('investments');
    if (investmentsDiv.style.display === 'none' || investmentsDiv.style.display === '') {
        investmentsDiv.style.display = 'block';
    } else {
        investmentsDiv.style.display = 'none';
    }
}

// Add event listener for the toggle button
document.getElementById('toggleInvestmentsButton').addEventListener('click', toggleInvestments);

// ... (other functions)

// ...
// ... (previous code)

let totalIncomePerSecond = 0;

// Function to calculate and update income per second
function updateIncomePerSecond() {
    totalIncomePerSecond = 0;

    // Calculate income from each investment
    for (const investment in investments) {
        totalIncomePerSecond += (investments[investment].earnings / investments[investment].interval) * 1000; // Multiply by 1000 to convert milliseconds to seconds
    }

    // Update the HTML element to display the income per second
    document.getElementById('incomePerSecond').textContent = `Income per second: $${totalIncomePerSecond.toFixed(2)}`;
}

// Add this function to your setInterval for generating coins from investments
setInterval(function () {
    coins += totalIncomePerSecond; // Add the total income per second
    updateCoinCount();
}, 1000);

// ... (other functions)

// ...
// ... (previous code)

// Function to save game progress to Local Storage
function saveGameProgress() {
    try {
        const gameData = {
            coins,
            coinsPerClick,
            workerCount,
            achievements,
            investments,
        };
        localStorage.setItem('gameData', JSON.stringify(gameData));
        console.log('Game progress saved.');
    } catch (error) {
        console.error('Failed to save game progress:', error);
    }
}

// Function to load game progress from Local Storage
function loadGameProgress() {
    try {
        const savedData = localStorage.getItem('gameData');
        if (savedData) {
            const gameData = JSON.parse(savedData);

            coins = gameData.coins;
            coinsPerClick = gameData.coinsPerClick;
            workerCount = gameData.workerCount;
            achievements = gameData.achievements;
            investments = gameData.investments;

            // Update the displayed elements with loaded data
            updateCoinCount();
            coinsPerClickElement.textContent = coinsPerClick;
            workerCountElement.textContent = workerCount;

            console.log('Game progress loaded.');
        }
    } catch (error) {
        console.error('Failed to load game progress:', error);
    }
}

// Load game progress when the page loads
window.addEventListener('load', loadGameProgress);

// ... (other functions)

// ...

// Add this code to your existing functions that modify game data
// For example, after upgrading or hiring workers:
// saveGameProgress();
// To save game data
localStorage.setItem('myIdleGameProgress', JSON.stringify(gameData));

// To load game data
const savedData = localStorage.getItem('myIdleGameProgress');
