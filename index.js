const WHITE_PEACOCK = {
    id: 1103,
    hiddenFirstName: "White",
    hiddenLastName: "Peacock",
    firstName: "Alice",
    lastName: "Tan",
    roleApplied: "Software Engineer",
    email: "alicetan@gmail.com",
    phone: "91234567",
    address: "Blk 123, Ang Mo Kio Ave 4 #01-234",
    dob: "28/03/1998",
    gender: "Female",
    submittedAt: "25/02/2021, 12:30pm",
    submittedBy: "Jane Ang",
    souce: "Indeed",
    yearsOfExp: 4,
    scrumCert: "Yes",
    prince2Cert: "No",
}

const EMERALD_PIG = {
    id: 1332,
    hiddenFirstName: "Emerald",
    hiddenLastName: "Pig",
    // firstName: "Fatimah",
    // lastName: "Bte Ahmed",
    roleApplied: "Sales Manager",
    // email: "fatimahbteahmed@gmail.com",
    // phone: "91234567",
    // address: "Blk 123, Ang Mo Kio Ave 4 #01-234",
    // dob: "28/05/2000",
    // gender: "Female",
    submittedAt: "05/02/2021, 15:30pm",
    // submittedBy: "Jane Ang",
    // souce: "Indeed",
    // yearsOfExp: 2,
    // scrumCert: "No",
    // prince2Cert: "No",
}

const WHITE_RABBIT = {
    id: 1466,
    hiddenFirstName: "White",
    hiddenLastName: "Rabbit",
    // firstName: "John",
    // lastName: "Lee",
    roleApplied: "Project Manager",
    // email: "johnlee@gmail.com",
    // phone: "91234567",
    // address: "Blk 123, Ang Mo Kio Ave 4 #01-234",
    // dob: "28/01/1997",
    // gender: "Male",
    submittedAt: "11/01/2021, 12:30pm",
    // submittedBy: "Jane Ang",
    // souce: "Indeed",
    // yearsOfExp: 2,
    // scrumCert: "No",
    // prince2Cert: "No",
}

const VIOLET_RABBIT = {
    id: 7653,
    hiddenFirstName: "Violet",
    hiddenLastName: "Rabbit",
    roleApplied: "Software Engineer",
    submittedAt: "07/02/2021, 12:30pm",
    passedScreening: false
}

const ORANGE_MONKEY = {
    id: 3546,
    hiddenFirstName: "Orange",
    hiddenLastName: "Monkey",
    roleApplied: "Marketing Coordinator",
    submittedAt: "05/02/2021, 12:30pm",
}

const YELLOW_PIG = {
    id: 5682,
    hiddenFirstName: "Yellow",
    hiddenLastName: "Pig",
    roleApplied: "Software Engineer",
    submittedAt: "05/02/2021, 12:30pm",
}

const BLACK_CAT = {
    id: 2253,
    hiddenFirstName: "Black",
    hiddenLastName: "Cat",
    roleApplied: "Web Designer",
    submittedAt: "07/02/2021, 12:30pm",
}

const PURPLE_RAT = {
    id: 2233,
    hiddenFirstName: "Purple",
    hiddenLastName: "Rat",
    roleApplied: "Marketing Coordinator",
    submittedAt: "05/02/2021, 12:30pm",
}

const applicants = {"whitePeacock": WHITE_PEACOCK,
                    "emeraldPig": EMERALD_PIG, 
                    "whiteRabbit": WHITE_RABBIT, 
                    "violetRabbit": VIOLET_RABBIT,
                    "orangeMonkey":ORANGE_MONKEY, 
                    "yellowPig": YELLOW_PIG, 
                    "blackCat": BLACK_CAT, 
                    "purpleRat": PURPLE_RAT
};

var dataTable = 
`
<table class="table">
<thead>
    <tr class="table-header">
        <th scope="col>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            </div>
        </th>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Application Date</th>
        <th scope="col">Role Applied</th>
    </tr>
</thead>
<tbody>
`;

for (let k in applicants) {
    var row = "<tr>"
    row += `
    <td>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        </div>
    </td>
    `;
    row += "<td>" + applicants[k].id + "</td>";
    row += "<th scope=\"row\"><a href=\"#\" class=\"link-dark\">" + applicants[k].hiddenFirstName + " " + applicants[k].hiddenLastName + "</a></th>";
    const date = applicants[k].submittedAt.split(", ")[0];
    row += "<td>" + date + "</td>";
    row += "<td>" + applicants[k].roleApplied + "</td>";
    row += "</tr>";
    dataTable += row;
}

dataTable += "</tbody></table>";

document.getElementById("data-table").innerHTML = dataTable;

// var mytable = "<table cellpadding=\"0\" cellspacing=\"0\"><tbody><tr>";

// for (var i = 1; i < 31; i++) {
//     if (i % 3 == 1 && i != 1) {
//         mytable += "</tr><tr>";
//     }
//     mytable += "<td>[" + i + "]</td>";
// }

// mytable += "</tr></tbody></table>";

// document.getElementById("data-table").innerHTML = mytable;