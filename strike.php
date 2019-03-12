<?php
	include "config_db.php";

	$i = $_POST['taskid'];
	$sql = "UPDATE tasks SET Is_completed = 1 WHERE Id=$i";
	if($conn->query($sql)){
		$conn->close();
		echo "success";
	}
	else{
		echo "failed";
	}
?>