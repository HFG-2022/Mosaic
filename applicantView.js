
var downloadBtn = document.getElementById("download-resume-btn");

// Hide initially
downloadBtn.style.display  = "none";



function revealInfo() {
    // Grab sections to reveal (above sections)
    var summary = document.getElementById("applicant-summary").getElementsByTagName("p")[0];
    
    var firstName = document.getElementById("first-name").getElementsByTagName("td")[0];
    var lastName = document.getElementById("last-name").getElementsByTagName("td")[0];
    var email = document.getElementById("email").getElementsByTagName("td")[0];
    var phone = document.getElementById("phone").getElementsByTagName("td")[0];
    var address = document.getElementById("address").getElementsByTagName("td")[0];
    var dob = document.getElementById("dob").getElementsByTagName("td")[0];
    var gender = document.getElementById("gender").getElementsByTagName("td")[0];

    var submitBy = document.getElementById("submit-by").getElementsByTagName("td")[0];
    var source = document.getElementById("source").getElementsByTagName("td")[0];

    summary.innerHTML = "Sally Bong is a problem solver and strong communicator who is eager to prove their value and talent at an emerging company like EasyGO. Bong is motivated to advance and expand their skill set through targeted mentorship and challenging projects."

    firstName.innerHTML = "Sally"
    lastName.innerHTML = "Bong"
    email.innerHTML = "sallybong@gmail.com"
    phone.innerHTML = "(+65) 8871 1124"
    address.innerHTML = "Tanjong Pajar Blk 12, Singapore"
    dob.innerHTML = "12/12/1995"
    gender.innerHTML = "Female"

    submitBy.innerHTML = "Sally Bong"
    source.innerHTML = "Linkedin"

    // replace button
    var revealBtn = document.getElementById("reveal");
    revealBtn.style.display = "none"
    downloadBtn.style.display = "block"

    // Resume section
    var firstJobCompany = document.getElementsByClassName("company")[0];
    var firstJobCountry = document.getElementsByClassName("job-country")[0];
    
    var secondJobCompany = document.getElementsByClassName("company")[1];
    var secondJobCountry = document.getElementsByClassName("job-country")[1];

    firstJobCompany.innerHTML = "GRAB"
    firstJobCountry.innerHTML = "Singapore"

    secondJobCompany.innerHTML = "Shopee"
    secondJobCountry.innerHTML = "Singapore"

    var eduInstituion = document.getElementsByClassName("Institution")[0];
    var eduYears = document.getElementById("edu-duration");

    eduInstituion.innerHTML = "National University of Singapore"
    eduYears.innerHTML = "2015 - 2019"

}

function downloadResume() {

}