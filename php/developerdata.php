<?php
// Function to sanitize input data
function sanitizeInput($data) {
    return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
}

// Check if required fields are present
if(isset($_POST['username'], $_POST['name'], $_POST['address'], $_POST['skill'], $_POST['about'])) {
    // Sanitize input data
    $username = sanitizeInput($_POST['username']);
    $name = sanitizeInput($_POST['name']);
    $address = sanitizeInput($_POST['address']);
    $skill = sanitizeInput($_POST['skill']);
    $about = sanitizeInput($_POST['about']);
    $facebook = sanitizeInput($_POST['facebook'] ?? '');
    $x = sanitizeInput($_POST['x'] ?? '');
    $linkedin = sanitizeInput($_POST['linkedin'] ?? '');
    $website = sanitizeInput($_POST['website'] ?? '');

    // Create data array
    $newData = array(
        'username' => $username,
        'name' => $name,
        'address' => $address,
        'skill' => $skill,
        'about' => $about,
        'facebook' => $facebook,
        'x' => $x,
        'linkedin' => $linkedin,
        'website' => $website
    );

    // Create JSON file for individual user
    $githubFilename = $username . '.json';
    file_put_contents($githubFilename, json_encode($newData));

    // Save data to "userdata.json"
    $regdataFilename = 'userdata.json';
    $existingData = json_decode(file_get_contents($regdataFilename), true) ?? array();
    $existingData[] = $newData;
    file_put_contents($regdataFilename, json_encode($existingData));

    echo 'Data saved successfully in ' . $githubFilename . ' and regdata.json';
} else {
    // Handle missing required fields
    echo 'Error: Required fields are missing.';
}
?>
