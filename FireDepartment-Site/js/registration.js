let accidentData = {
    office: '',
    team: '',
    truck: '',
    location: '',
    address: '',
    date: '',
};

let accidentsDataArray = [];

function onSubmit() {
    let officeValue = document.getElementById('office').value;
    let teamValue = document.getElementById('team').value;
    let truckValue = document.getElementById('truck').value;
    let locationValue = document.getElementById('location').value;
    let addressValue = document.getElementById('address').value;
    let dateValue = document.getElementById('date').value;

    accidentData = {
        office: officeValue,
        team: teamValue,
        truck: truckValue,
        location: locationValue,
        address: addressValue,
        date: dateValue
    };

    accidentsDataArray.push(accidentData);

    localStorage.setItem('accidentsData', JSON.stringify(accidentsDataArray));
}

function showTableData() {
    let table = document.getElementById('accidentsTable');
    let alertEmptyAccidents = document.getElementById('alertEmptyAccidents');

    if(JSON.parse(localStorage.getItem('accidentsData'))){
        if (JSON.parse(localStorage.getItem('accidentsData')) && table) {
            JSON.parse(localStorage.getItem('accidentsData')).forEach((item) => {table.innerHTML += `<tr><td>${item.office}</td>
                                                                                                     <td>${item.team}</td>
                                                                                                     <td>${item.truck}</td>
                                                                                                     <td>${item.location}</td>
                                                                                                     <td>${item.address}</td>
                                                                                                     <td>${item.office}</td></tr>`;});
        }
        if (alertEmptyAccidents) alertEmptyAccidents.style.display = 'none';
    }
    else {
        accidentsDataArray = [];
        if (alertEmptyAccidents) alertEmptyAccidents.style.display = 'block';
    }
}

function clearData() {
    localStorage.clear();
    document.getElementById('accidentsTable').innerHTML = '';
}

showTableData();