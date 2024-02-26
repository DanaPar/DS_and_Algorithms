<?php
//Create a function that reverses a string:
//"Hi My name is Dana" should be:
//"anaD si eman yM iH"

function reverse($string): string
{
    //check for input
    if(!$string || strlen($string) < 2 || !is_string($string))
    {
        return "That's not good";
    }

    $backwards = [];
    $allItems = strlen($string) - 1; //How many items we have in string
    for ($i = $allItems; $i >= 0; $i--)
    {
        $backwards[] = $string[$i];
    }

    return implode('', $backwards);
}


echo reverse("Hi My name is Dana");


