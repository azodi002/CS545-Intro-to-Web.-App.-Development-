/*
      Azodi, Omid
      jadrn005
      Project #4
      Fall 2017
 */

var cartArray;
var dataArray;

$(document).ready( function(){
  cartArray = new Array();
  dataArray = new Array();

  $.get('/perl/jadrn005/get_products.cgi', storeData);
    var cart = new shopping_cart("jadrn005");
    cartArray = cart.getCartArray();

    function deleteItem(sku) {
        cart.delete(sku);
        location.reload();
    }

    $(document).on('click', '#remove_item', function() {deleteItem(this.name);});
    
    if(cartArray.length > 0) {
        document.getElementById("checkout").onclick = function () {
            location.href = "sign_order.html";
        }
    };

    function updateQuantity(sku)
    {
     var quant = $('#'+sku).val();
     if (quant == "0") {
        deleteItem(sku);
        return;
    }
         cart.setQuantity(sku, quant);
         cartArray = cart.getCartArray();
        $.get('/perl/jadrn005/get_products.cgi', storeData);
    }//updateQuantity


$(document).on('blur','.quanttext',function(){updateQuantity(this.name);});

});

 function storeData(response) {
    var tmpArray = explodeArray(response, ';');
    for(var i=0; i < tmpArray.length; i++) {
         innerArray = explodeArray(tmpArray[i],'|');
          dataArray[i] = innerArray;
          }
          updateDisplay();
          updateCost();
  }//storeData()


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

function updateDisplay(){
    var tmpstr = "";
     if (cartArray.length != 0) {
        tmpstr += "<h2><u>Order Summary</u></h2>"
    for(var i=0; i<cartArray.length; i++){
      var itemSku = cartArray[i][0];

      for(var j=0; j<dataArray.length; j++){
        if(itemSku == dataArray[j][0]){

          tmpstr += "<div class=\"item_order\">";
          tmpstr += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+dataArray[j][0]+
            ".jpg\" alt=\""+dataArray[j][2]+"\" width=\"100px\" class=\"img-thumbnail\" " +
            "name=\""+dataArray[j][0]+"\" />";

          tmpstr += "<div class=\"item_title\">";
          tmpstr += dataArray[j][2];
          tmpstr += "<p>$"+dataArray[j][6]+"</p>";
          tmpstr += "</div>";

         tmpstr += "<div class=\"checkout_q\">";    
          tmpstr += "<span class=\"quantity_span\">Quantity : </span>";
          tmpstr += "<input type=\"text\" id=\""+itemSku+"\" class=\"quanttext\" name=\""+itemSku+"\" value=\""+cartArray[i][1]+"\" maxlength=\"3\" size=\"3\" /><br />";
          tmpstr += "<input type=\"image\" src=\"delete.png\" id=\"remove_item\" name=\""+itemSku+"\" width=\"50\" />";
          tmpstr += "</div>";

          tmpstr += "</div><hr/>";
          var handle = document.getElementById('cartcontent');
          handle.innerHTML = tmpstr;
      }//if(itemSku)
    }//for(var j)
   }//for(var i)
  }//if(cartArray.length != 0)
  else if(cartArray.length == 0) {
    tmpstr += "<h1><u>Order Summary: </u></h2>"
    tmpstr += "<h2> EMPTY CART </h2>"
    var handle = document.getElementById('cartcontent');
    handle.innerHTML = tmpstr;
  }
}//updateDisplay()

function updateCost() 
{
    if (cartArray.length != 0) 
    {
        tmpstr = "";
        var tax = 0.0;
        var shipping = 0.0;
        var finalCost = 0.0;
        var finalQuantity = 0;
        for(var i = 0; i < cartArray.length; i++)
        {
            var sku   = cartArray[i][0];
            var quant = parseInt(cartArray[i][1]);
            finalQuantity = parseInt(finalQuantity) + quant;
            for(var j = 0; j < dataArray.length; j++)
            {
                if(dataArray[j][0] == sku)
                {
                    var cost = parseFloat(dataArray[j][6]) * quant;
                    finalCost += cost;
                }
            }//for(var j =0)
        }//for(var i = 0)
    

        tax = parseFloat(cost) * .08; //tax = 8% San Diego
        tax = tax.toFixed(2); // 2 decimal places
        shipping = quant * 2.0;
        finalCost = parseFloat(finalCost) + parseFloat(tax) + parseInt(shipping);
        finalCost = finalCost.toFixed(2); // 2 decimal places

        if(cartArray.length > 0)
        {
           tmpstr += "<h2><u>Review of checkout:</u></h2>"
           tmpstr += " Total Tax : $" + tax + "<br>";
           tmpstr += "Total Shipping: $" + shipping + "<br>";
           tmpstr += "TOTAL : $" + finalCost + "<br> <br>";
           var handle = document.getElementById('review');
           handle.innerHTML = tmpstr;            
        } 
    }//if(cartArray.length != 0)

    else
    {
        tmpstr = ""; //display nothing
        var handle = document.getElementById('review');
        handle.innerHTML = tmpstr;  
    }

}//updateCost()

















