$(document).ready(function() {
    // Create an event handler for the "keyup" event on both fields
    $('#salary, #percent').on('keyup', function() {
        // Get the values of salary and percent input fields
        var salary = parseFloat($('#salary').val());
        var percent = parseFloat($('#percent').val());

        // Calculate the amount you can spend on tech
        var techSpending = (salary * percent) / 100;

        // Round the number to dollars and cents using toFixed()
        techSpending = techSpending.toFixed(2);

        // Add a dollar sign to the calculated amount
        techSpending = '$' + techSpending;

        // Insert the calculated amount into the span#amount element using jQuery
        $('#amount').text(techSpending);
    });
});