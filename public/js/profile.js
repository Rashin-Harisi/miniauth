async function fetchProfileData() {
    try {
        const response = await fetch('/api/profile');
        const data = await response.json();
        displayProfileData(data);
    } catch (error) {
        document.getElementById('profile-data').innerHTML = `<p style="color: red;">Error fetching profile data: ${error.message}</p>`;
    }
}

function displayProfileData(user) {
    const profileDataContainer = document.getElementById('profile-data');
    profileDataContainer.innerHTML = `
        <div class="profile-info"><strong>Username:</strong> ${user.username}</div>
        <div class="profile-info"><strong>Email:</strong> ${user.email}</div>
    `;
}

window.onload = fetchProfileData;