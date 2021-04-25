function onValidate() {

    let formInputs = document.getElementsByClassName('form-control');
    let message = document.getElementById('fieldsEmpty');

    for (let i = 0; i < formInputs.length; i++) {
        if (formInputs[i].value === '') {
            // formInputs[i]; Add class empty-field - като проибавим клас css ще знае че полето е празно
            message.style.display = 'block';

        }
    }


}

function onFocusOut(id) {
    let name = document.getElementById(id);
    name.style.boxShadow = 'none'

    switch (id) {
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
            validateAdress(id);
            break;

        case 'date':
            validateDate(id);
            break;

        default:
            return null;
    }
}

function validateOffice(id) {
    let officeValue = document.getElementById(id).value;

    let message = document.getElementById('officeMessage');

    if (officeValue === "") {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }
}

function validateTeam(id) {
    let teamValue = document.getElementById(id).value;

    let message2 = document.getElementById('teamMessage');

    if (teamValue === "") {
        message2.style.display = 'block';
    } else {
        message2.style.display = 'none';
    }
}

function validateTruck(id) {
    let truckValue = document.getElementById(id).value;

    let message3 = document.getElementById('truckMessage');

    if (truckValue === "") {
        message3.style.display = 'block';
    } else {
        message3.style.display = 'none';
    }
}

function validateLocation(id) {
    let locationValue = document.getElementById(id).value;

    let message4 = document.getElementById('locationMessage');

    if (locationValue === "") {
        message4.style.display = 'block';
    } else {
        message4.style.display = 'none';
    }
}

function validateAdress(id) {
    let addressValue = document.getElementById(id).value;

    let message5 = document.getElementById('addressMessage');

    if (addressValue === "") {
        message5.style.display = 'block';
    } else {
        message5.style.display = 'none';
    }
}

function validateDate(id) {
    let dateValue = document.getElementById(id).value;

    let message6 = document.getElementById('dateMessage');

    if (dateValue === "") {
        message6.style.display = 'block';
    } else {
        message6.style.display = 'none';
    }
}