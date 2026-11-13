
/* ==========================================
   BLOODLINK - JAVASCRIPT
   Frontend Prototype with Demo Data
   ========================================== */

const app = document.getElementById("app");

// DEMO DONOR DATA
const donors = [
    { name: "Aarav Mehta", group: "O+", city: "Delhi", distance: "2.4 km", status: "Available" },
    { name: "Priya Sharma", group: "B+", city: "Delhi", distance: "3.1 km", status: "Available" },
    { name: "Kabir Khan", group: "AB+", city: "Noida", distance: "5.8 km", status: "Unavailable" },
    { name: "Ananya Rao", group: "A-", city: "Gurugram", distance: "8.2 km", status: "Available" },
    { name: "Ishaan Verma", group: "O-", city: "Delhi", distance: "4.6 km", status: "Available" },
    { name: "Riya Kapoor", group: "A+", city: "Noida", distance: "6.2 km", status: "Available" },
    { name: "Rahul Singh", group: "B-", city: "Gurugram", distance: "7.5 km", status: "Available" },
    { name: "Neha Gupta", group: "AB-", city: "Delhi", distance: "3.9 km", status: "Unavailable" }
];

// DEMO EMERGENCY REQUESTS
const requests = [
    {
        group: "O-",
        title: "Urgent: O-negative needed",
        hospital: "City Care Medical Centre",
        city: "New Delhi",
        units: "2 units",
        time: "18 minutes ago",
        priority: "Critical"
    },
    {
        group: "B+",
        title: "Blood required for surgery",
        hospital: "Sunrise Multispeciality",
        city: "Noida",
        units: "1 unit",
        time: "42 minutes ago",
        priority: "High"
    },
    {
        group: "AB+",
        title: "Patient support request",
        hospital: "Lotus Health Hospital",
        city: "Gurugram",
        units: "2 units",
        time: "1 hour ago",
        priority: "High"
    }
];

// DEMO BLOOD BANK DATA
const bloodBanks = [
    {
        name: "Red Cross Blood Centre",
        city: "Delhi",
        type: "Blood Donation Centre",
        hours: "Open 24 Hours"
    },
    {
        name: "MetroCare Blood Bank",
        city: "Noida",
        type: "Hospital Blood Bank",
        hours: "8 AM - 8 PM"
    },
    {
        name: "Lifeline Blood Bank",
        city: "Gurugram",
        type: "Community Blood Centre",
        hours: "9 AM - 6 PM"
    }
];

// ==========================================
// MAIN WEBSITE HTML
// ==========================================

app.innerHTML = `

<!-- NAVBAR -->

<header class="navbar">

    
<a href="#" class="logo">
    <span class="logo-icon">♥</span>
    Blood<span>Link</span>
</a>


    <ul class="nav-links" id="navLinks">

        <li><a href="#home">Home</a></li>
        <li><a href="#find-donor">Find Donor</a></li>
        <li><a href="#requests">Blood Requests</a></li>
        <li><a href="#network">Blood Banks</a></li>
        <li><a href="#learn">Learn</a></li>

    </ul>

    <button class="btn btn-primary" id="navRegister">
        Become a Donor
    </button>

    <button class="menu-btn" id="menuBtn" aria-label="Open menu">
        ☰
    </button>

</header>


<!-- HERO SECTION -->

<section class="hero" id="home">

    <div class="hero-content">

        <div class="hero-text">

            <span class="hero-tag">
                ✨ EVERY DROP CONNECTS A LIFE
            </span>

            <h1>
                A Little Love.<br>
                <span>A Lot of Life.</span>
            </h1>

            <p>
                The right donor can make all the difference.
                Discover donation opportunities, learn about
                giving blood, and become part of a community
                that shows up when it matters most.
            </p>

            <div class="hero-buttons">

                <button class="btn btn-primary" id="findBtn">
                    Find a Donor →
                </button>

                <button class="btn btn-outline" id="joinBtn">
                    ♥ Become a Donor
                </button>

            </div>

        </div>

        <div class="hero-visual">

            <img
                class="hero-image"
                src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=900"
                alt="Blood donation"
            >

        </div>

    </div>

</section>


<!-- STATS SECTION -->

<section class="container">

    <div class="stats">

        <div class="stat-card">
            <h2>3</h2>
            <p>Lives can be helped*</p>
        </div>

        <div class="stat-card">
            <h2>8</h2>
            <p>Common Blood Groups</p>
        </div>

        <div class="stat-card">
            <h2>1</h2>
            <p>Act of Kindness</p>
        </div>

        <div class="stat-card">
            <h2>∞</h2>
            <p>Reasons to Give</p>
        </div>

    </div>

    <p style="text-align:center;font-size:11px;color:#999;margin-top:15px;">
        *Educational message. Actual outcomes vary.
    </p>

</section>


<!-- FIND DONOR -->

<section class="search-section" id="find-donor">

    <div class="container">

        <h2 class="section-title">
            Find Your Blood Hero
        </h2>

        <p class="section-description">
            Explore sample donor profiles by blood group
            and location. All listings are demonstration data.
        </p>

        <div class="search-box">

            <select id="bloodFilter">

                <option value="All">All Blood Groups</option>

                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>

            </select>

            <select id="cityFilter">

                <option value="All">All Locations</option>
                <option value="Delhi">Delhi</option>
                <option value="Noida">Noida</option>
                <option value="Gurugram">Gurugram</option>

            </select>

            <input
                type="text"
                id="donorSearch"
                placeholder="Search donor or city..."
            >

            <button class="btn btn-primary" id="searchBtn">
                🔍 Search
            </button>

        </div>

        <div class="donor-grid" id="donorGrid"></div>

        <p style="text-align:center;color:#999;font-size:12px;margin-top:20px;">
            Demo profiles only. Donor availability and contact details
            must be independently verified.
        </p>

    </div>

</section>


<!-- EMERGENCY REQUESTS -->

<section class="request-section" id="requests">

    <div class="container">

        <h2 class="section-title">
            Urgent Blood Requests
        </h2>

        <p class="section-description">
            Sample emergency request cards showing how
            important blood requirements can be displayed.
        </p>

        <div class="request-grid" id="requestGrid"></div>

        <p style="text-align:center;color:#999;font-size:12px;margin-top:22px;">
            These are fictional sample requests, not verified emergencies.
        </p>

    </div>

</section>


<!-- BLOOD BANK NETWORK -->

<section id="network">

    <div class="container">

        <h2 class="section-title">
            Our Blood Bank Network
        </h2>

        <p class="section-description">
            Explore sample listings of blood donation
            centres and hospital blood banks.
        </p>

        <div class="search-box">

            <input
                type="text"
                id="bankSearch"
                placeholder="Search blood bank or city..."
            >

        </div>

        <div class="bank-grid" id="bankGrid"></div>

        <p style="text-align:center;color:#999;font-size:12px;margin-top:20px;">
            Sample directory. Authorisation and operating hours
            have not been independently verified.
        </p>

    </div>

</section>


<!-- DONATION AWARENESS -->

<section style="background:#fff4f2;" id="learn">

    <div class="container">

        <h2 class="section-title">
            Know Before You Donate
        </h2>

        <p class="section-description">
            Understanding blood donation helps people
            make informed and responsible decisions.
        </p>

        <div class="awareness-grid">

            <div class="awareness-card">

                <h2>🩺</h2>

                <h3>Check Eligibility</h3>

                <p>
                    Eligibility depends on age, health,
                    haemoglobin levels, medical history
                    and local donation guidelines.
                    Always consult donation staff.
                </p>

            </div>

            <div class="awareness-card">

                <h2>💧</h2>

                <h3>Before Donation</h3>

                <p>
                    Stay hydrated, eat a balanced meal
                    and follow the instructions provided
                    by your authorised blood donation centre.
                </p>

            </div>

            <div class="awareness-card">

                <h2>❤️</h2>

                <h3>After Donation</h3>

                <p>
                    Follow the staff's aftercare advice,
                    rest when needed and maintain
                    healthy hydration.
                </p>

            </div>

        </div>

    </div>

</section>


<!-- IMPACT SECTION -->

<section class="impact-section">

    <div class="container">

        <h2 class="section-title">
            Small Acts. Big Impact.
        </h2>

        <p class="section-description">
            A community of voluntary donors can help
            strengthen access to lifesaving care.
        </p>

        <div class="impact-grid">

            <div class="impact-card">
                <h2>01</h2>
                <h3>Give Hope</h3>
                <p>Every voluntary donation is an act of care.</p>
            </div>

            <div class="impact-card">
                <h2>02</h2>
                <h3>Build Community</h3>
                <p>Connect people with authorised donation centres.</p>
            </div>

            <div class="impact-card">
                <h2>03</h2>
                <h3>Spread Awareness</h3>
                <p>Help more people understand voluntary donation.</p>
            </div>

        </div>

    </div>

</section>


<!-- CALL TO ACTION -->

<section class="cta-section">

    <div class="container">

        <h2>
            Be Someone's Reason to Smile.
        </h2>

        <p>
            Your willingness to help can make a meaningful difference.
            Take the first step towards voluntary blood donation.
        </p>

        <button class="btn btn-light" id="ctaRegister">
            Join the BloodLink Community ❤️
        </button>

    </div>

</section>


<!-- FOOTER -->

<footer class="footer">

    <h2>🩸 BloodLink</h2>

    <p>Every Drop Connects a Life.</p>

    <p>
        Connecting communities through voluntary blood donation.
    </p>

    <p style="margin-top:20px;">
        © 2026 BloodLink. Prototype created for AI Prompt Battle.
    </p>

    <p>
        Demo platform only. Not for real emergency coordination.
    </p>

</footer>


<!-- REGISTRATION MODAL -->

<div class="modal" id="registerModal">

    <div class="modal-content">

        <h2>Become a Donor ❤️</h2>

        <p style="color:#777;margin:12px 0;">
            Take a step towards helping your community.
        </p>

        <form id="donorForm">

            <input
                type="text"
                id="donorName"
                placeholder="Your Name"
                required
            >

            <select id="registerBlood" required>

                <option value="">Select Blood Group</option>

                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>

            </select>

            <input
                type="text"
                id="registerCity"
                placeholder="Your City"
                required
            >

            <label style="display:flex;gap:10px;align-items:flex-start;font-size:13px;margin:15px 0;">
                <input type="checkbox" id="demoConsent" required style="width:auto;margin:3px 0;">
                I understand this is a demonstration form and my details will not be submitted to a real donor database.
            </label>

            <button type="submit" class="btn btn-primary" style="width:100%;">
                Submit Demo Registration
            </button>

        </form>

        <p id="formMessage" style="margin-top:15px;color:green;"></p>

        <button id="closeModal" class="btn btn-outline" style="width:100%;margin-top:15px;">
            Close
        </button>

    </div>

</div>

`;

// ==========================================
// DISPLAY DONORS
// ==========================================

const donorGrid = document.getElementById("donorGrid");

function displayDonors(list) {

    if (list.length === 0) {

        donorGrid.innerHTML = `
            <p style="grid-column:1/-1;text-align:center;padding:30px;">
                No matching demo profiles found.
            </p>
        `;

        return;
    }

    donorGrid.innerHTML = list.map(donor => `

        <div class="donor-card">

            <div class="blood-badge">
                ${donor.group}
            </div>

            <h3>${donor.name}</h3>

            <p>📍 ${donor.city}</p>

            <p>🚩 ${donor.distance} (sample distance)</p>

            <p>
                Status:
                <strong style="color:${donor.status === "Available" ? "green" : "#d97706"}">
                    ${donor.status}
                </strong>
            </p>

            <button class="btn btn-outline"
                onclick="alert('Demo profile only. No real donor contact is available.')">
                View Demo Profile
            </button>

        </div>

    `).join("");

}

displayDonors(donors);


// ==========================================
// DONOR SEARCH AND FILTER
// ==========================================

function searchDonors() {

    const selectedGroup = document.getElementById("bloodFilter").value;

    const selectedCity = document.getElementById("cityFilter").value;

    const searchText = document.getElementById("donorSearch")
        .value.toLowerCase().trim();

    const filtered = donors.filter(donor => {

        const matchGroup =
            selectedGroup === "All" || donor.group === selectedGroup;

        const matchCity =
            selectedCity === "All" || donor.city === selectedCity;

        const matchText =
            donor.name.toLowerCase().includes(searchText) ||
            donor.city.toLowerCase().includes(searchText);

        return matchGroup && matchCity && matchText;

    });

    displayDonors(filtered);

}

document.getElementById("searchBtn")
    .addEventListener("click", searchDonors);

document.getElementById("bloodFilter")
    .addEventListener("change", searchDonors);

document.getElementById("cityFilter")
    .addEventListener("change", searchDonors);

document.getElementById("donorSearch")
    .addEventListener("input", searchDonors);


// ==========================================
// DISPLAY EMERGENCY REQUESTS
// ==========================================

const requestGrid = document.getElementById("requestGrid");

requestGrid.innerHTML = requests.map(request => `

    <div class="request-card">

        <span class="urgent-tag">
            ${request.priority}
        </span>

        <div class="blood-badge">
            ${request.group}
        </div>

        <h3>${request.title}</h3>

        <p style="margin-top:12px;">🏥 ${request.hospital}</p>

        <p>📍 ${request.city}</p>

        <p>🩸 ${request.units}</p>

        <p>🕒 ${request.time}</p>

        <button class="btn btn-outline"
            style="margin-top:18px;"
            onclick="alert('Sample request only. Please contact an authorised hospital for real requirements.')">
            View Demo Request
        </button>

    </div>

`).join("");


// ==========================================
// DISPLAY BLOOD BANKS
// ==========================================

const bankGrid = document.getElementById("bankGrid");

function displayBanks(list) {

    if (list.length === 0) {

        bankGrid.innerHTML = `
            <p style="grid-column:1/-1;text-align:center;padding:25px;">
                No matching sample blood banks found.
            </p>
        `;

        return;
    }

    bankGrid.innerHTML = list.map(bank => `

        <div class="bank-card">

            <h2>🏥</h2>

            <h3>${bank.name}</h3>

            <p>${bank.type}</p>

            <p>📍 ${bank.city}</p>

            <p>🕒 ${bank.hours}</p>

            <span class="urgent-tag">${bank.tag}</span>

        </div>

    `).join("");

}

displayBanks(bloodBanks);


// ==========================================
// BLOOD BANK SEARCH
// ==========================================

document.getElementById("bankSearch")
    .addEventListener("input", function () {

        const value = this.value.toLowerCase().trim();

        const filteredBanks = bloodBanks.filter(bank =>

            bank.name.toLowerCase().includes(value) ||
            bank.city.toLowerCase().includes(value)

        );

        displayBanks(filteredBanks);

    });


// ==========================================
// DONOR REGISTRATION MODAL
// ==========================================

const modal = document.getElementById("registerModal");

function openRegistration() {

    modal.classList.add("active");

}

function closeRegistration() {

    modal.classList.remove("active");

}

document.getElementById("navRegister")
    .addEventListener("click", openRegistration);

document.getElementById("joinBtn")
    .addEventListener("click", openRegistration);

document.getElementById("ctaRegister")
    .addEventListener("click", openRegistration);

document.getElementById("closeModal")
    .addEventListener("click", closeRegistration);


// CLOSE MODAL ON OUTSIDE CLICK

modal.addEventListener("click", function(event) {

    if (event.target === modal) {
        closeRegistration();
    }

});


// ==========================================
// REGISTRATION FORM SUBMISSION
// ==========================================

document.getElementById("donorForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("donorName").value.trim();

        const blood = document.getElementById("registerBlood").value;

        const city = document.getElementById("registerCity").value.trim();

        if (!name || !blood || !city) {

            alert("Please complete all fields.");

            return;
        }

        document.getElementById("formMessage").innerHTML = `
            ✓ Thank you, ${name}! Your demo registration was successful.
            <br><br>
            Blood Group: ${blood}<br>
            City: ${city}<br><br>
            <strong>Demo only: Your details have not been saved or sent.</strong>
        `;

        this.reset();

    });


// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});

navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});


// ==========================================
// HERO BUTTON
// ==========================================

document.getElementById("findBtn")
    .addEventListener("click", function() {

        document.getElementById("find-donor")
            .scrollIntoView({ behavior: "smooth" });

    });


// ==========================================
// FINISH
// ==========================================

console.log("🩸 BloodLink website loaded successfully!");

console.log("Demo data only. No real donor services connected.");

