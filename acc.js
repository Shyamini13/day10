$(document).ready(function() {
    var todayDate = new Date();
    var month = todayDate.getMonth()+1;  // current month
    var year = todayDate.getUTCFullYear(); // year
    var tdate = todayDate.getDate();  // date

    var maxDate = year + "-" + month + "-" + tdate;
    document.getElementById("dob").setAttribute("max", maxDate)
    console.log(maxDate);


    var stateCityInfo = {
        "Kerala": ["Kozhikode", "Kannur", "Kollam"],
        "Tamilnadu": ["Chennai", "Coimbatore", "Vishakhapatnam"],
        "Karnataka": ["Bangalore", "Mysore", "Coorg"]
    };
    

    // select city and state
    $('#state').change(function() {
        const selectedState = $(this).val();
        const cities = stateCityInfo[selectedState] || []; 
    
        $('#city').empty().append('<option value="">Select City</option>');
    
        cities.forEach(city => {
            $('#city').append(`<option value="${city}">${city}</option>`);
        });
    });
        

    $('#regForm').on('submit', function(e) {
        e.preventDefault(); // Prevent form submission

        let valid = true; // Flag to track validation

        $('.error').text(''); // Clear previous error messages
        $('.input-field').removeClass('valid invalid'); // Reset input field styles

        // Validate first name
        const firstName = $('#firstName').val().trim();
        const namePattern1 = /^[A-Za-z\s]+$/; // Only letters and spaces
        if (firstName === '' || !namePattern1.test(firstName)) {
            $('#firstNameError').text('Please enter a valid first name (letters only).');
            alert("Please enter a valid first name!");
            $('#firstName').addClass('invalid'); // Add invalid class
            valid = false;
        } else {
            $('#firstName').addClass('valid'); // Add valid class
        }

        // Validate last name
        const lastName = $('#lastName').val().trim();
        const namePattern2 = /^[A-Za-z\s]+$/; // Only letters and spaces
        if (lastName === '' || !namePattern2.test(lastName)) {
            $('#lastNameError').text('Please enter a valid last name (letters only).');
            alert("Please enter a valid last name!");
            $('#lastName').addClass('invalid'); // Add invalid class
            valid = false;
        } else {
            $('#lastName').addClass('valid'); // Add valid class
        }

        // Validate email
        const email = $('#email').val().trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        if (!emailPattern.test(email)) {
            $('#emailError').text('Please enter a valid email address.');
            alert("Please enter a valid email!");
            $('#email').addClass('invalid'); // Add invalid class
            valid = false;
        } else {
            $('#email').addClass('valid'); // Add valid class
        }

        const userName = $('#username').val().trim();

        if (userName.length < 4) {
        $('#userNameError').text('Please enter a valid username (at least 4 characters).');
        $('#userName').addClass('invalid'); // Add invalid class
        $('#userName').removeClass('valid'); // Ensure valid class is removed
        valid = false;
        } else {
        $('#userName').removeClass('invalid'); // Remove invalid class if valid
        $('#userName').addClass('valid'); // Add valid class
        }

        // Validate password
        const password = $('#password').val().trim();
        if (password.length < 6) {
            $('#passwordError').text('Password must be at least 6 characters.');
            $('#password').addClass('invalid'); // Add invalid class
            valid = false;
        } else {
            $('#password').addClass('valid'); // Add valid class
        }

        // Validate confirm password
        if (password !== $('#confirmPassword').val().trim()) {
            $('#confirmPasswordError').text('Passwords do not match!');
            alert("Passwords do not match!");
            $('#confirmPassword').addClass('invalid'); // Add invalid class
            valid = false;
        } else {
            $('#confirmPassword').addClass('valid'); // Add valid class
        }

        // If valid, show success message
        if (valid) {
            $('#regForm').fadeOut(300, function() {
                alert("Account created successfully!");
                $(this).fadeIn();
            });
        }
    });
    });