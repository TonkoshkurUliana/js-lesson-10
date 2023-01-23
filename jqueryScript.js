$(document).ready(function () {

    $('#ajaxPost').bind('click', function () {
        let userData = {
            userName: $('#name').val(),
            userSurname: $('#surname').val(),
            userAge: $('#age').val(),
            userAdress: $('#adress').val()
        };
        if (userData.age < 0 || userData.age > 100) {
            console.log('Age validation error!');
            alert('Validation Error! Age is over 100 or < 0 : ' + userData.age);
        } else {
            userData.userName += '.ValidatedByPOST';
            userData.userSurname += '.ValidatedByPOST';
            userData.userAge += '.ValidatedByPOST';
            userData.userAdress += '.ValidatedByPOST';

            $.ajax({
                type: 'POST',
                data: JSON.stringify(userData),
                contentType: 'application/json',
                url: 'http://localhost:3000/userPost',
                success: function (data) {
                    console.log('success');
                    console.log(JSON.stringify(data));
                    $("#text-success-post").text("This is POST... userName=" + userData.userName +
                    ", userSurname=" + userData.userSurname + ", userAge=" + userData.userAge +
                        ", userAdress=" + userData.userAdress);
                }
            });
        }
    });

    $('#ajaxGet').bind('click', function () {
        let userData = {
            userName: $('#name').val(),
            userSurname: $('#surname').val(),
            userAge: $('#surname').val(),
            userAdress: $('#adress').val()
        };
        if (userData.age < 0 || userData.age > 100) {
            console.log('Age validation error!');
            alert('Validation Error! Age is over 100 or < 0 : ' + userData.age);
        } else {
            userData.userName += '.ValidatedByGET';
            userData.userSurname += '.ValidatedByGET';
            userData.userAge += '.ValidatedByGET';
            userData.userAdress += '.ValidatedByGET';

            $.ajax({
                type: 'GET',
                contentType: 'application/json',
                url: 'http://localhost:3000/userGet?userName=' + userData.userName  +
                    "&userSurname=" + userData.userSurname +
                    "&userAge=" + userData.userAge +
                    "&userAdress=" + userData.userAdress ,
                success: function (data) {
                    console.log('success');
                    console.log(JSON.stringify(data));
                    $("#text-success-get").text(("This is GET... userName=" + userData.userName +
                        ", userSurname=" + userData.userSurname + ", userAge=" + userData.userAge +
                        ", userAdress=" + userData.userAdress));
                }
            });
        }
    })
})



