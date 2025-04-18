let athletes = JSON.parse(localStorage.getItem('athletes')) || [];

document.addEventListener('DOMContentLoaded', function() {
    const athleteForm = document.getElementById('athleteForm');

    if (athleteForm) {
        athleteForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Collecting form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const dob = document.getElementById('dob').value;
            const gender = document.getElementById('gender').value;
            const height = document.getElementById('height').value;
            const weight = document.getElementById('weight').value;
            const speed = document.getElementById('speed').value;
            const strength = document.getElementById('strength').value;
            const endurance = document.getElementById('endurance').value;
            const bio = document.getElementById('bio').value;

            // Handle Profile Image (base64 encoding)
            const profileImage = document.getElementById('profileImage').files[0];
            let profileImageUrl = '';
            if (profileImage) {
                const reader = new FileReader();
                reader.onloadend = function() {
                    profileImageUrl = reader.result;
                    saveAthlete();
                };
                reader.readAsDataURL(profileImage);
            } else {
                saveAthlete();
            }

            // Save athlete details to localStorage
            function saveAthlete() {
                const athlete = {
                    id: Date.now(),
                    name, email, phone, dob, gender, height, weight,
                    performance: { speed, strength, endurance },
                    profileImageUrl,
                    bio
                };
                athletes.push(athlete);
                localStorage.setItem('athletes', JSON.stringify(athletes));
                alert('Athlete Added!');
                athleteForm.reset();
            }
        });
    }
});
