// JSON - JavaScript Object Notation

databases
used with API
intermediate format for data exchange


var person2 = {
    "name":"Gupta",
    "gender":"Male"
}

// syntax

{
    "name":"Manohar",
    "gender":"M"
}


Website 
    UI
        http protocol
        XML -> JSON
    API
Database

<xml>
    <name>Manohar</name>
    <gender>Male</gender>
</xml>


JSON - composite data types
    Array       []
    Object      {}

{
    "key":value,
    ....,
    ....,
    ....,
}

{
    "name":"manohar",
    "age":12213,
    "interestes":["a","b","c"]
}

[
    {
        "name":"manohar",
        "age":12213,
        "interestes":["a","b","c"]
    },
    {
        "name":"manohar",
        "age":12213,
        "interestes":["a","b","c"]
    }
]

var str = String("");

"{"name":"manohar","age":12213"}"

{
    "name":{
        "first":"manohar",
        "last":"negi",
    }
}

// crockford
// good parts ugly part