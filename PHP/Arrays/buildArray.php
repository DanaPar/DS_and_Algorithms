<?php

class MyArray {

    function __construct()
    {
        $this->length = 0;
        $this->data = [];
    }

    function get($index)
    {
        return $this->data[$index];
    }

    function add($item)
    {
       $this->data[$this->length] = $item;
       $this->length++;
       return $this->length;
    }


}

$array  = new MyArray();
$array->add("NIce day");
print_r($array);