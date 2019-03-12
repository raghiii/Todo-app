function remove(butt){
	var id = $(butt).parent().find("#taskid").val();
	$.ajax({
		url : "remove.php",
		type : "post",
		data: {
			"taskid" : id
		},
		success: function(response){
			if(response.trim()==="success")
				$(butt).parent().remove();
		},
		error: function(jqXHR, textStatus, errorThrown){
			console.log(textStatus, errorThrown);
		}
	});
}

function markasdone(butt){
	var id = $(butt).parent().find("#taskid").val();
	$.ajax({
		url : "strike.php",
		type : "post",
		data: {
			"taskid" : id
		},
		success: function(response){
			if(response.trim()==="success")
			{
				$(butt).parent().addClass("checkedItem");
			}
		},
		error: function(jqXHR, textStatus, errorThrown){
			console.log(textStatus, errorThrown);
		}
	});
}

function keyup(ev){
	if(ev.key === "Enter"){
		insert();
	}
}

function insert(){
	var newitem = $("#newitem").val();
	if(newitem!="" && newitem!=null){
	$("#newitem").val("");
	$.ajax({
		url : "submit.php",
		type : "post",
		data: {
			"item" : newitem
		},
		success: function(response){
			if(response.trim()!=="failed")
			{	
				addtask(response.trim(),newitem,0);
			}
		},
		error: function(jqXHR, textStatus, errorThrown){
			console.log(textStatus, errorThrown);
		}
	});
	}
}

function addtask(id,name,status){
	var newli = $("<li></li>").addClass("list-group-item list-group-item-action").html(`
                    `
                    +name+
                    
`
                    <input type="hidden" id="taskid" value="`+id+`">
                    <button type="button" class="btn btn-danger" onclick="remove(this);">Delete</button>
                    <button id="b" type="button" class="btn btn-outline-primary" style="width: 200px;" onclick="markasdone(this)">Mark as done!</button>
	`);
	if(status==1){
		$(newli).addClass("checkedItem");
	}
	$("#tasklist").append(newli);
}

function getAllTasks(){
	arr = null;
 	$.ajax({
      	url: "list.php",
        type: "get",
        success: function (response) {
           	if(response.trim()!=="failed"){
           		arr = JSON.parse(response);
           		for(var elem in arr){
			  		addtask(arr[elem]['Id'],arr[elem]['Caption'],arr[elem]['Is_completed']);
				}
       		}
       	},
       	error: function(jqXHR, textStatus, errorThrown) {
		    console.log(textStatus, errorThrown);
		}
	});
	
}

$(document).ready(getAllTasks());