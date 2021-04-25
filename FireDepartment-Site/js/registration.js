let accidentData = {
    office: '',
    team: '',
    truck: '',
    location: '',
    address: '',
    date: ''
};

let accidentsDataArray = [];

function checkIsAccidents() {
    const alertEmptyAccidents = document.getElementById('alertEmptyAccidents');
    if (localStorage.getItem('accidentsData')) {
        accidentsDataArray = JSON.parse(localStorage.getItem('accidentsData'));
        if (alertEmptyAccidents) alertEmptyAccidents.style.display = 'none';
    }
    else {
        accidentsDataArray = [];
        if (alertEmptyAccidents) alertEmptyAccidents.style.display = 'block';
    }
}

function onSubmit() {
    accidentData = {
        office: document.getElementById('office').value,
        team: document.getElementById('team').value,
        truck: document.getElementById('truck').value,
        location: document.getElementById('location').value,
        address: document.getElementById('address').value,
        date: document.getElementById('date').value
    };
    accidentsDataArray.push(accidentData);
    localStorage.setItem('accidentsData', JSON.stringify(accidentsDataArray)); // Превръщам дейтата в стринг за да се запази в локъл сторидж
}

function showTableData() {
    const table = document.getElementById('accidentsTable');
    if (JSON.parse(localStorage.getItem('accidentsData')) && table) {
        JSON.parse(localStorage.getItem('accidentsData')).forEach((item) => {table.innerHTML += `<tr><td>${item.office}</td>
                                                                                                     <td>${item.team}</td>
                                                                                                     <td>${item.truck}</td>
                                                                                                     <td>${item.location}</td>
                                                                                                     <td>${item.address}</td>
                                                                                                     <td>${item.date}</td></tr>`;});
    }
}

function clearData() {
    localStorage.clear();
    document.getElementById('accidentsTable').innerHTML = '';
    alertClearAccidents.style.display = 'none';
    alertEmptyAccidents.style.display = 'block';
}

checkIsAccidents();
showTableData();