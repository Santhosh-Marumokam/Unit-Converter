document.getElementById("btn").addEventListener("click", function() {
    var Conversion= document.getElementById("Conversion").value;
    var val1 = document.getElementById("value").value;
    if(Conversion=="milligram"){
        var val= 0.001*val1;
        var convertedto="grams";
        var finalval = (val.toFixed(3));
    }
    else if(Conversion=="centigram"){
        var val= 0.01*val1;
        var convertedto="grams";
        var finalval = (val.toFixed(3));
    }
    else if(Conversion=="kilogram"){
        var val= 1000*val1;
        var convertedto="grams";
        var finalval = (val.toFixed(3));
    }
    else if(Conversion=="pound"){
        var val= 453.592*val1;
        var convertedto="grams";
        var finalval = (val.toFixed(3));
    }
    else if(Conversion=="ounce"){
        var val= 28.3495*val1;
        var convertedto="grams";
        var finalval = (val.toFixed(3));
    }
    else if(Conversion=="millimetre"){
        var val= 0.001*val1;
        var convertedto="metres";
        var finalval = (val.toFixed(3));
    }
    else if(Conversion=="centimetre"){
        var val= 0.01*val1;
        var convertedto="metres";
        var finalval = (val.toFixed(3));
    }
    else if(Conversion=="kilometre"){
        var val= 1000*val1;
        var convertedto="metres";
        var finalval = (val.toFixed(3));
    }
    else if(Conversion=="inch"){
        var val= 0.0254*val1;
        var convertedto="metres";
        var finalval = (val.toFixed(3));
    }
    else if(Conversion=="foot"){
        var val= 0.3048*val1;
        var convertedto="metres";
        var finalval = (val.toFixed(3));
    }
    else if(Conversion=="minute"){
        var val= 60*val1;
        var convertedto="seconds";
        var finalval = (val.toFixed(2));
    }
    else if(Conversion=="hour"){
        var val= 60*val1;
        var convertedto="minutes";
        var finalval = (val.toFixed(2));
    }
    else if(Conversion=="day"){
        var val= 24*val1;
        var convertedto="hours";
        var finalval = (val.toFixed(2));
    }
    else if(Conversion=="week"){
        var val= 7*val1;
        var convertedto="days";
        var finalval = Math.floor(val);
    }
    else if(Conversion=="year"){
        var val= (365*val1) + Math.floor(val1/4);
        var convertedto="days";
        var finalval = Math.floor(val);
    }
    else if(Conversion=="k2c"){
        var val= val1 - 273.15;
        var convertedto="C";
        var finalval = (val.toFixed(2));
    }
    else if(Conversion=="k2f"){
        var val= (val1 - 273.15)*(9/5) + 32;
        var convertedto="F";
        var finalval = (val.toFixed(2));
    }
    else if(Conversion=="c2f"){
        var val= val1*(9/5) + 32;
        var convertedto="F";
        var finalval = (val.toFixed(2));
    }
    else if(Conversion=="f2c"){
        var val= (val1 - 32)*(5/9);
        var convertedto="C";
        var finalval = (val.toFixed(2));
    }
    else if(Conversion=="f2k"){
        var val= (val1 - 32)*(5/9) + 273.15;
        var convertedto="K";
        var finalval = (val.toFixed(2));
    }
    else if(Conversion=="sqft"){
        var val= 0.0929*val1;
        var convertedto="sq. metres";
        var finalval = (val.toFixed(3));
    }
    else if(Conversion=="acre"){
        var val= 4046.8*val1;
        var convertedto="sq. metres";
        var finalval = (val.toFixed(3));
    }
    else if(Conversion=="hectare"){
        var val= 10000*val1;
        var convertedto="sq. metres";
        var finalval = (val.toFixed(2));
    }
    else if(Conversion=="milliliter"){
        var val= 0.001*val1;
        var convertedto="liters";
        var finalval = (val.toFixed(3));
    }
    else if(Conversion=="kiloliter"){
        var val= 1000*val1;
        var convertedto="liters";
        var finalval = (val.toFixed(3));
    }
    else if(Conversion=="gallon"){
        var val= 3.785*val1;
        var convertedto="liters";
        var finalval = (val.toFixed(3));
    }
    else if(Conversion=="horsepower"){
        var val= 745.7*val1;
        var convertedto="watt";
        var finalval = (val.toFixed(2));
    }
    

    document.getElementById("result").innerHTML= finalval + " " + convertedto;
});