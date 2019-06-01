<?php
  $instance = new mysqli("localhost","root","yururinpanda","mmiki");
  $instance->set_charset("UTF-8");
  $sql = "SELECT * FROM portfolio_works";
  $response = $instance->query( $sql );
if( $response->num_rows ) {
  while($row = $response->fetch_assoc()){
    $result[] = $row;
  }
}
print json_encode( $result );
?>