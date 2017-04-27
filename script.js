window.onload = function() {
    $.getJSON("http://api.aeneid.eu/sortes", function(json) {
        var quote = json.text;
        $("#quote").html(quote);
        $("#twitterLink").html("<a href=\"http://twitter.com/home?status=Just did the Sortes Virgilianae: "+quote+" @ kellylougheed.com/sortes\" target=\"_blank\" id=\"tweet\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>");
    });
    $("#newQuote").click(function(){
        $.getJSON("http://api.aeneid.eu/sortes", function(json) {
           var quote = json.text;
           $("#quote").html(quote);
           $("#twitterLink").html("<a href=\"http://twitter.com/home?status=Just did the Sortes Virgilianae: "+quote+" @ kellylougheed.com/sortes\" target=\"_blank\" id=\"tweet\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>");
        });
    })
};
