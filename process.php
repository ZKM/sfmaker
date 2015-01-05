<?php
if (isset($_POST['strength1'])) {
$strength1 = strip_tags($_POST['strength1']);
$strength2 = strip_tags($_POST['strength2']);
$strength3 = strip_tags($_POST['strength3']);
$strength4 = strip_tags($_POST['strength4']);
$strength5 = strip_tags($_POST['strength5']);

  echo "<div class='strength'><mark>" . $strength1 . "</mark></div>";
  echo "<div class='strength'><mark>" . $strength2 . "</mark></div>";
  echo "<div class='strength'><mark>" . $strength3 . "</mark></div>";
  echo "<div class='strength'><mark>" . $strength4 . "</mark></div>";
  echo "<div class='strength'><mark>" . $strength5 . "</mark></div>";

}?>