$(document).ready(function() {
    // Function to open the side navigation menu
    $('#menu-btn').click(function() {
        $('#side-nav').css('width', '250px');
    });

    // Function to close the side navigation menu
    $('#close-menu-btn').click(function() {
        $('#side-nav').css('width', '0');
    });

    // Function to open the QR code scanner
    $('#qr-btn').click(function() {
        const qrReader = $('#qr-reader');
        qrReader.show();

        const video = document.getElementById('qr-video');
        const qrScanner = new QrScanner(video, result => {
            $('#picture-name').val(result.data);
            qrScanner.stop();  // Stop the scanner
            qrReader.hide();  // Hide the reader
        }, {
            highlightScanRegion: true,
            highlightCodeOutline: true
        });

        qrScanner.start();
    });

    // Function to handle image upload
    $('#upload-btn').click(function() {
        alert('Open file upload dialog');
        // Implement image upload functionality here
    });

    // Form submission handler
    $('#add-picture-form').submit(function(event) {
        event.preventDefault();
        const pictureName = $('#picture-name').val();
        const cropTag = $('#crop-tag').val();
        console.log('Picture Name:', pictureName);
        console.log('Crop Tag:', cropTag);
        // Implement form submission logic here
    });

    // Discard button handler
    $('.discard-btn').click(function() {
        $('#discard-modal').css('display', 'flex');
    });

    // Modal buttons handlers
    $('#no-btn').click(function() {
        $('#discard-modal').css('display', 'none');
    });

    $('#delete-btn').click(function() {
        $('#add-picture-form')[0].reset();
        $('#discard-modal').css('display', 'none');
    });
});
