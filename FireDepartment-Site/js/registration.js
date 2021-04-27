//initialize an empty object for a single incident's data
let accidentData = {
    office: '',
    team: '',
    truck: '',
    location: '',
    address: '',
    date: ''
};

//initialize an epmty array
let accidentsDataArray = [];

//checks wheather there is any data submitted by the user
function checkIsAccidents()
{
    const alertEmptyAccidents = document.getElementById('alertEmptyAccidents');

    //checks wheather there is accidents data in the local storage
    if (localStorage.getItem('accidentsData'))
    {
        //hides the message indicating theer is no data
        accidentsDataArray = JSON.parse(localStorage.getItem('accidentsData'));
        if (alertEmptyAccidents) alertEmptyAccidents.style.display = 'none';
    }
    else
    {
        //shows the message indicating there is no data
        accidentsDataArray = [];
        if (alertEmptyAccidents) alertEmptyAccidents.style.display = 'block';
    }
}

//stores data in local storage
function onSubmit()
{
    //assigns values from users's inputs to object
    accidentData = {
        office: document.getElementById('office').value,
        team: document.getElementById('team').value,
        truck: document.getElementById('truck').value,
        location: document.getElementById('location').value,
        address: document.getElementById('address').value,
        date: document.getElementById('date').value
    };
    //adds the object with user's values to the array
    accidentsDataArray.push(accidentData);
    //stringifies the array to set it to a value to the local storage by the key name "accidentsData"
    localStorage.setItem('accidentsData', JSON.stringify(accidentsDataArray));
}


//builds the table for the registered accidents
function showTableData()
{
    const table = document.getElementById('accidentsTable');
    //if there is data
    if (JSON.parse(localStorage.getItem('accidentsData')) && table)
    {
        JSON.parse(localStorage.getItem('accidentsData')).forEach((item) => { table.innerHTML += `<tr><td>${item.office}</td>
                                                                                                      <td>${item.team}</td>
                                                                                                      <td>${item.truck}</td>
                                                                                                      <td>${item.location}</td>
                                                                                                      <td>${item.address}</td>
                                                                                                      <td>${item.date}</td></tr>`; });
    }
    else
    {
        //hides the table
        alertClearAccidents.style.display = 'none';
        alertEmptyAccidents.style.display = 'block';
        table.style.display = 'none';
    }
}

//clears the data
function clearData()
{
    //clears the data from the local storage
    localStorage.clear();
    //clears the data from the table
    document.getElementById('accidentsTable').innerHTML = '';
    alertClearAccidents.style.display = 'none';
    alertEmptyAccidents.style.display = 'block';
}

checkIsAccidents();
showTableData();