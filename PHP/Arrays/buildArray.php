<?php

class MyArray {

    private int $length;
    private $data;

    function __construct()
    {
        $this->length = 0;
        $this->data = [];
    }

    function get($index)
    {
        return $this->data[$index];
    }

    function add($item): int //same as array_push()
    {
       $this->data[$this->length] = $item;
       $this->length++;
       return $this->length;
    }

    function removeLast() //sames as array_pop()
    {
        $lastItem = $this->data[$this->length -1];
        unset($this->data[$this->length -1]);
        $this->length--;
        return $lastItem;
    }

    function delete($index)
    {
        $item = $this->data[$index];
        $this->shiftItems($index);
        return $item;
    }

    function shiftItems($index)
    {
        for ($i = $index; $i < $this->length - 1; $i++) {
            $this->data[$i] = $this->data[$i + 1];
        }
        unset($this->data[$this->length - 1]);
        $this->length--;
    }

}

$array  = new MyArray();
$array->add("Nice");
$array->add("day");
$array->add("!");
$array->delete(1);
print_r($array);


