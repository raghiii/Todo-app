<?php
	include "config_db.php";

	$i = $_POST['taskid'];
	$sql = "DELETE FROM tasks WHERE Id=$i";
	if($conn->query($sql)){
		$conn->close();
		echo "success";
	}
	else{
		echo "failed";
	}

	//header("Location: index.php");
?>