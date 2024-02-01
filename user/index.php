
<?php
if(isset($_GET['user'])) {
    $user = $_GET['user'];
    $jsonFilePath = $user . '.json';

    if(file_exists($jsonFilePath)) {
        $jsonData = file_get_contents($jsonFilePath);

        if($jsonData !== false) {
            // JSON ডেটা পার্স করুন
            $decodedData = json_decode($jsonData, true);

            if($decodedData !== null) {
               

              
                ?>
                
    
<?php
            } else {

echo 'not1';
             
 
          
  }
        } else { 
echo 'not2'; 
       
        }
    } else {

      
          echo "<script>window.location.href='/cloudnot.js'</script>";

    }
} else {

   echo "<script>window.location.href='/not.js'</script>";

}
?>


<!DOCTYPE html>
<html lang="en">
<head>
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

  <link rel="shortcut icon" type="image/x-icon" href="https://github.com/<?php echo  $decodedData['username']?>.png">
  <link rel="stylesheet" href="/CSS/style.css">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?php echo  $decodedData['name']?></title>
</head>
<body style="background-color: white;">
  <section class="nev">
    <center>
      <br><br>
        <br><br>
      <br><br>
      <br><br>
    
    <img class="ttu" src="https://github.com/<?php echo  $decodedData['username']?>.png" alt="github.api.nahidhk.info/?api"/><br>
    
    
    
<span class="title bk"><?php echo  $decodedData['name']?></span>    
   <br>
   
   
     <span class="cb"><i class="bi bi-geo-alt-fill"></i><?php echo  $decodedData['address']?></span>
<p class="cb rou"><i class="bi bi-cpu"></i><?php echo  $decodedData['skill']?></p>    
  
  
   
<div class="social-box">
  <a class="icon" href="<?php echo  $decodedData['linkedin']?>"><i class="bi bi-linkedin"></i></a>
  <a class="icon" href="<?php echo  $decodedData['x']?>"><i class="bi bi-twitter-x"></i></a>
  
    <a class="icon" href="https://github.com/<?php echo  $decodedData['username']?>">
      <i class="bi bi-github"></i>
    </a>

    <a class="icon" href="<?php echo  $decodedData['facebook']?>">
    <i class="bi bi-facebook"></i>
    </a>
    
      <a class="icon" href="<?php echo  $decodedData['website']?>">
   <i class="bi bi-globe-americas"></i>
    </a>
    
</div> 


   <p class="lofi-write cb"><?php echo  $decodedData['about']?></p> 
   <hr> 
    
    
   <img width="100%;" src="https://github-readme-stats.vercel.app/api?username=<?php echo  $decodedData['username']?>&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage"/>
    <br>
  <img width="100%" src="https://github-readme-streak-stats.herokuapp.com?user=<?php echo  $decodedData['username']?>&hide_border=true" alt="GitHub Streak" />  
    <br>
    
    <img width="100%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=<?php echo  $decodedData['username']?>&langs_count=10&title_color=a855f7&text_color=000&icon_"/>
    
    
    
        </center>

  </section>
 
  
  
</body>
</html>
