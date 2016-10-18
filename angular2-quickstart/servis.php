<?php
	header("Content-type: application/json");
	$sobe = array(
		'id' => '1',
		'name' => 'Soba1',
		'br' => '1',
		'sprat' => '2'		
	);
	echo json_encode($sobe);
?>