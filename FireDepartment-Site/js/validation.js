// Check if something in the form is empty

function onFocusOut(id)
{
    switch (id)
    {
        case 'office':
            validateOffice(id);
            break;

        case 'team':
            validateTeam(id);
            break

        case 'truck':
            validateTruck(id);
            break;

        case 'location':
            validateLocation(id);
            break;

        case 'address':
            validateAddress(id);
            break;

        case 'date':
            validateDate(id);
            break;

        default:
            return null;
    }
}

// Check if office input is empty 
function validateOffice(id)
{
    let officeValue = document.getElementById(id).value;
    let message = document.getElementById('officeMessage');

    if (officeValue === "")
    {
        message.style.display = 'block';
    }
    else
    {
        message.style.display = 'none';
    }
}


// Check if team input is empty 
function validateTeam(id)
{
    let teamValue = document.getElementById(id).value;
    let message2 = document.getElementById('teamMessage');

    if (teamValue === "")
    {
        message2.style.display = 'block';
    }
    else
    {
        message2.style.display = 'none';
    }
}


// Check if truck input is empty 
function validateTruck(id)
{
    let truckValue = document.getElementById(id).value;
    let message3 = document.getElementById('truckMessage');

    if (truckValue === "")
    {
        message3.style.display = 'block';
    }
    else
    {
        message3.style.display = 'none';
    }
}


// Check if location input is empty 
function validateLocation(id)
{
    let locationValue = document.getElementById(id).value;
    let message4 = document.getElementById('locationMessage');

    if (locationValue === "")
    {
        message4.style.display = 'block';
    }
    else
    {
        message4.style.display = 'none';
    }
}


// Check if address input is empty 
function validateAddress(id)
{
    let addressValue = document.getElementById(id).value;
    let message5 = document.getElementById('addressMessage');

    if (addressValue === "")
    {
        message5.style.display = 'block';
    }
    else
    {
        message5.style.display = 'none';
    }
}

// Check if date input is empty 
function validateDate(id)
{
    let dateValue = document.getElementById(id).value;
    let message6 = document.getElementById('dateMessage');

    if (dateValue === "")
    {
        message6.style.display = 'block';
    }
    else
    {
        message6.style.display = 'none';
    }
}