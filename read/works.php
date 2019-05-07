<?php

  $instance = new mysqli("mysql1019.db.sakura.ne.jp","mmiki-web","yururinpanda0317","mmiki-web_portfolio");
  $instance->set_charset("UTF-8");

  // $workId = filter_input(INPUT_GET,"work_id");
  $sql = "SELECT * FROM portfolio_works";
  $response = $instance->query( $sql );

if( $response->num_rows ) {
  while($row = $response->fetch_assoc()){
    $result[] = $row;
  }
}

// JSON化
print json_encode( $result );

?>