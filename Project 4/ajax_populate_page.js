/****
Omid Azodi
Project #4
jadrn005
CS545
Fall 2017

References from Jadrn000 (Alan Riggins)
*****/
var proj4_data;
var updated;

$(document).ready(function() {
    proj4_data = new Array();
    $.get('/perl/jadrn005/get_products.cgi', storeData);

    var cart = new shopping_cart("jadrn005");
    updated = false;
    
    $('#milk').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Milk chocolate") {
            tmpString += "<div class='col-sm-6 col-md-4'><br><br><br><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                "><br />";

            tmpString += "<p class='title'><b>" +proj4_data[i][2] + "</b></p>" ;
            tmpString += "<span class='sdescription'>" +proj4_data[i][3] + "</span>";
            tmpString += "<p class='ldescription'>" +proj4_data[i][4] + "</p>";

            tmpString += "<p class='retail'><b>$" +proj4_data[i][6] + "</b></p>";

            tmpString += "<input type='image' src=\"addcart.png\" width=\"60\" alt=\"Add to cart\""+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id=\"span_addedtocart\">Added to Cart</span><br /><hr/>";         
                }
            }
            updated = true;
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })

    $('#dark').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Dark chocolate") {
            tmpString += "<div class='col-sm-6 col-md-4'><br><br><br><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                "><br />";

            tmpString += "<p class='title'><b>" +proj4_data[i][2] + "</b></p>" ;
            tmpString += "<span class='sdescription'>" +proj4_data[i][3] + "</span>";
            tmpString += "<p class='ldescription'>" +proj4_data[i][4] + "</p>";

            tmpString += "<p class='retail'><b>$" +proj4_data[i][6] + "</b></p>";

            tmpString += "<input type='image' src=\"addcart.png\" width=\"60\" alt=\"Add to cart\""+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id=\"span_addedtocart\">Added to Cart</span><br /><hr/>";         
                }
            }
         updated = true;
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })

    $('#nuts').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Nuts and chews") {
            tmpString += "<div class='col-sm-6 col-md-4'><br><br><br><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                "><br />";

            tmpString += "<p class='title'><b>" +proj4_data[i][2] + "</b></p>" ;
            tmpString += "<span class='sdescription'>" +proj4_data[i][3] + "</span>";
            tmpString += "<p class='ldescription'>" +proj4_data[i][4] + "</p>";

            tmpString += "<p class='retail'><b>$" +proj4_data[i][6] + "</b></p>";

            tmpString += "<input type='image' src=\"addcart.png\" width=\"60\" alt=\"Add to cart\""+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id=\"span_addedtocart\">Added to Cart</span><br /><hr/>";         
                }
            }
         updated = true;    
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
        

    $('#brittle').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Brittles and toffies") {
            tmpString += "<div class='col-sm-6 col-md-4'><br><br><br><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                "><br />";

            tmpString += "<p class='title'><b>" +proj4_data[i][2] + "</b></p>" ;
            tmpString += "<span class='sdescription'>" +proj4_data[i][3] + "</span>";
            tmpString += "<p class='ldescription'>" +proj4_data[i][4] + "</p>";

            tmpString += "<p class='retail'><b>$" +proj4_data[i][6] + "</b></p>";

            tmpString += "<input type='image' src=\"addcart.png\" width=\"60\" alt=\"Add to cart\""+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id=\"span_addedtocart\">Added to Cart</span><br /><hr/>";         
                }
            }
          updated = true;     
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
        

    $('#gifts').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Gifts") {
            tmpString += "<div class='col-sm-6 col-md-4'><br><br><br><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                "><br />";

            tmpString += "<p class='title'><b>" +proj4_data[i][2] + "</b></p>" ;
            tmpString += "<span class='sdescription'>" +proj4_data[i][3] + "</span>";
            tmpString += "<p class='ldescription'>" +proj4_data[i][4] + "</p>";

            tmpString += "<p class='retail'><b>$" +proj4_data[i][6] + "</b></p>";

            tmpString += "<input type='image' src=\"addcart.png\" width=\"60\" alt=\"Add to cart\""+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id=\"span_addedtocart\">Added to Cart</span><br /><hr/>";         
                }
            }
         updated = true;    
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })

    $('#holiday').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Holiday assortments") {
            tmpString += "<div class='col-sm-6 col-md-4'><br><br><br><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                "><br />";

            tmpString += "<p class='title'><b>" +proj4_data[i][2] + "</b></p>" ;
            tmpString += "<span class='sdescription'>" +proj4_data[i][3] + "</span>";
            tmpString += "<p class='ldescription'>" +proj4_data[i][4] + "</p>";

            tmpString += "<p class='retail'><b>$" +proj4_data[i][6] + "</b></p>";

            tmpString += "<input type='image' src=\"addcart.png\" width=\"60\" alt=\"Add to cart\""+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id=\"span_addedtocart\">Added to Cart</span><br /><hr/>";         
                }
            }
         updated = true;    
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })

    $(document).on('click', '.buy', function() {  
        var sku = this.id;
        cart.add(sku,1);
        $('#count').text(cart.size());
        $(this).next().fadeIn(50).fadeOut(2000);
        });            

    });   

    
function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }

        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Milk chocolate") {
            tmpString += "<div class='col-sm-6 col-md-4'><br><br><br><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                "><br />";

            tmpString += "<p class='title'><b>" +proj4_data[i][2] + "</b></p>" ;
            tmpString += "<span class='sdescription'>" +proj4_data[i][3] + "</span>";
            tmpString += "<p class='ldescription'>" +proj4_data[i][4] + "</p>";

            tmpString += "<p class='retail'><b>$" +proj4_data[i][6] + "</b></p>";

            tmpString += "<input type='image' src=\"addcart.png\" width=\"60\" alt=\"Add to cart\""+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id=\"span_addedtocart\">Added to Cart</span><br /><hr/>";         
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
    }   
    
    
// from http://www.webmasterworld.com/forum91/3262.htm            
function explodeArray(item,delimiter) {
tempArray=new Array(1);
var Count=0;
var tempString=new String(item);

while (tempString.indexOf(delimiter)>0) {
tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
Count=Count+1
}

tempArray[Count]=tempString;
return tempArray;
}     