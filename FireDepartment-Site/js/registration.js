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