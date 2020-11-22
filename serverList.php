<?php
$page = $_SERVER['PHP_SELF'];
$sec = "10";
?>
<!--<meta http-equiv="refresh" content="--><?php //echo $sec ?><!--;URL='--><?php //echo $page ?><!--'">-->
<?php
require 'head.php';

use MCServerStatus\MCPing;

require_once('vendor/autoload.php');

$serverValues = array(array());
$serverList = array(array());
$i = 0;

foreach ($_POST as $key => $value) {
    $serverValues[$i] = array($key, $value);
    if ($i % 2 != 0) {
        $array = array($serverValues[$i - 1][1], $serverValues[$i][1]);
        array_push($serverList, $array);
    }
    $i += 1;
}
array_shift($serverList);
foreach ($serverList as $server) {
    testServer((string)$server[0], intval($server[1]));
}
function testServer($hostname, $port)
{
    $response = MCPing::check($hostname, $port);
    echo '<div class="ui dark card"><div class="content">';
    echo $response->getMotdToHtml() . '<br>';
    if ($response->online) {
        echo '<div class="ui green header">Server is UP</div>';
        echo '<div class="ui blue header">' . $response->players . ' / ' . $response->max_players . '</div>';
        foreach ($response->sample_player_list as $playerAt) {
            if (!empty($playerAt[name])) {
                echo print_r($playerAt[name]) . '<br>';
            }
        }
        echo '</div></div>';
    } else {
        echo '<div class="ui header">' . $hostname . ':' . $port . '</div>';
        echo '<div class="ui red header">Server is DOWN</div>';
        echo '</div></div>';
    }
}

?>
