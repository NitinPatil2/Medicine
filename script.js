// Simple user data for login (in real applications, use proper authentication)
const userData = {
    username: "user",
    password: "password123"
};

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === userData.username && password === userData.password) {
        // Hide login page and show reminder page
        document.getElementById("login-page").style.display = "none";
        document.getElementById("reminder-page").style.display = "block";
        showSection('home-section');
    } else {
        document.getElementById("login-error").textContent = "Invalid username or password!";
    }
});

document.getElementById("logout").addEventListener("click", function() {
    // Show login page again
    document.getElementById("reminder-page").style.display = "none";
    document.getElementById("login-page").style.display = "block";
});

// Handle Menu Clicks
document.getElementById("home-menu").addEventListener("click", function() {
    showSection('home-section');
});

document.getElementById("add-medicine-menu").addEventListener("click", function() {
    showSection('add-medicine-form');
});

document.getElementById("view-reminders-menu").addEventListener("click", function() {
    showSection('reminder-list');
});

document.getElementById("settings-menu").addEventListener("click", function() {
    showSection('settings-section');
});

function showSection(sectionId) {
    document.getElementById('home-section').classList.add('hidden');
    document.getElementById('add-medicine-form').classList.add('hidden');
    document.getElementById('reminder-list').classList.add('hidden');
    document.getElementById('settings-section').classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');
}

// Medicine Reminder functionality
let reminders = [];

document.getElementById("save-medicine").addEventListener("click", function() {
    const name = document.getElementById("medicine-name").value;
    const time = document.getElementById("medicine-time").value;

    if (name && time) {
        reminders.push({ name, time });
        document.getElementById("medicine-name").value = '';
        document.getElementById("medicine-time").value = '';
        displayReminders();
    }
});

function displayReminders() {
    const reminderList = document.getElementById("reminders");
    reminderList.innerHTML = '';
    
    reminders.forEach(reminder => {
        const li = document.createElement("li");
        li.textContent = `${reminder.name} at ${reminder.time}`;
        reminderList.appendChild(li);
    });
}
