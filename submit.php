<?php
include "config_db.php";
$name = $_POST["item"];
$sql = "INSERT INTO tasks (Caption, Is_completed)
VALUES ('$name', '0')";

if ($conn->query($sql) === TRUE) //conn is the connection varible
{ 
    //header("Location: {$_SERVER['HTTP_REFERER']}");    
	$id = $conn->insert_id;
	echo $id;
} else {
    //echo "Error: " . $sql . "<br>" . $conn->error;
    echo "failed";
}
$conn->close();
?>