<?php
	include("config_db.php");

	if ($_SERVER["REQUEST_METHOD"] == "GET") {
		//$db = new Database();
		$result = mysqli_query($conn,"SELECT * FROM tasks");
		$arr = array();


		while($row = $result->fetch_assoc()){
			array_push($arr, array('Id' => $row["Id"], 'Caption' => $row["Caption"], 'Is_completed' => $row["Is_completed"]));
		}
		echo json_encode($arr);
	}
	else {
		echo "failed";
	}
?>