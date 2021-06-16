function setImage(list) {
    var i;
    for (i=0; i <list.length; i++) {
        document.write("<imag><img src = \"./media/");
        document.write(list[i][0]);
        document.write("\">");
        var array = list[i][0].split(".");
        document.write(array[0]);
        document.write("<br><kcal>")
        document.write(kcal[i]);
        document.write(" ㎉</kcal></imag>");
    }
}

function findChecked(){
    var found = null;
    var sortF = document.getElementsByName('sort');
    for(var i = 0; i < sortF.length; i++) {
        if (sortF[i].checked == true){
            found = sortF[i];
        }
    }
    return found.value;
}

function sortFood (list, kcal) {
    
    var images = document.getElementsByTagName('imag');
    var index = [0];
    var newM = document.createElement("imag");
    reset();
    for (var i = 1; i < list.length; i++) {
        var count = 0;
        for (var j = 0; j < index.length; j++) {
            if (kcal[index[j]] < kcal[i])
                count ++;
        }
        index.splice(count, 0, i);
    }
    for (var i=0; i <list.length; i++) {
        var message = "";
        var im = images[i];
        message += "<img src = \"./media/";
        message += list[index[i]][0];
        message += "\">";
        var array = list[index[i]][0].split(".");
        message += array[0];
        message += "<br><kcal>";
        message += kcal[index[i]];
        message += " ㎉</kcal>";
        im.innerHTML = message;
    }
    newM.innerHTML= message;
}


function rsortFood (list, kcal) {
    var images = document.getElementsByTagName('imag');
    var index = [0];
    var newM = document.createElement("imag");
    reset();
    for (var i = 1; i < list.length; i++) {
        var count = 0;
        for (var j = 0; j < index.length; j++) {
            if (kcal[index[j]] > kcal[i])
                count ++;
        }
        index.splice(count, 0, i);
    }
    for (var i=0; i <list.length; i++) {
        var message = "";
        var im = images[i];
        message += "<img src = \"./media/";
        message += list[index[i]][0];
        message += "\">";
        var array = list[index[i]][0].split(".");
        message += array[0];
        message += "<br><kcal>";
        message += kcal[index[i]];
        message += " ㎉</kcal></imag>";
        im.innerHTML = message;
    }
    newM.innerHTML=message;
}

function reset() {
    var images = document.getElementsByTagName('imag');
    for (var i = images.length -1; i >= 0; i--) {
        var im = images[i];
        im.innerHTML = 0;
    }
}