<?php
$username = $_POST['username'];
$name = $_POST['name'];
$address = $_POST['address'];
$skill = $_POST['skill'];
$about = $_POST['about'];
$facebook = $_POST['facebook'];
$x = $_POST['x'];
$linkedin = $_POST['linkedin'];
$website = $_POST['website'];

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

// পাসওয়ার্ড নামে JSON ফাইল তৈরি করা
$githubFilename ='user/'. $username. '.json';
file_put_contents($githubFilename, json_encode($newData));

// "regdata.json" ফাইলে ডাটা সেভ করা
$regdataFilename = '/data/userdata.json';
$existingData = file_get_contents($regdataFilename);
$existingData = json_decode($existingData, true);
$existingData[] = $newData;
file_put_contents($regdataFilename, json_encode($existingData));

echo 'Data saved successfully in ' . $githubFilename . 'user/.json  and regdata.json';
?>