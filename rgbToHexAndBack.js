// rgbToHexAndBack.js
// written by https://github.com/Chewbacca222222

function rgbHex(input) {
    input = input.replace(/\s+/g, "");
    if (input.indexOf("rgb") >= 0 || input.split(",").length - 1 == 2 || input.split(",").length - 1 == 3) {
        return normalizeRgb(input);
    } else if (input.indexOf("#") >= 0 || input.length == 6 || input.length == 8) {
        return hexToRgb(input);
    }
}

function hexToRgb(input) {
    input = input.replace("#", "");
    var stringOut = "rgb";
    if (input.match("^[a-fA-F0-9]+$")) {
        if (input.length/2 == 3) {
            stringOut += "(";
        } else {
            stringOut += "a(";
        }
        for (var i = 0; i < input.length; i = i+2) {
            var tempNum = parseInt(input[i] + input[i+1], 16);
            if (!isNaN(tempNum)) {
                stringOut += tempNum;
                if (i < input.length - 2) {
                    stringOut += ",";
                } else {
                    stringOut += ")";
                }
            } else {
                return undefined;
            }
        }
        return stringOut;
    } else {
        return undefined;
    }
}

function normalizeRgb(input) {
    input = input.replace("rgba", "").replace("rgb", "").replace("(", "").replace(")", "");
    if (input.match("^[0-9,]+$")) {
        input = input.split(",");
        if (input.length == 3 || input.length == 4) {
            var allNumbs = true;
            for (var i = 0; i < input.length; i++) {
                var tempNum = parseInt(input[i]);
                if (!isNaN(tempNum)) {
                    input[i] = tempNum;
                } else {
                    allNumbs = false;
                    break;
                }
            }
            if (allNumbs) {
                return rgbToHex(input);
            }
        }
    } else {
        return undefined;
    }
}

function rgbToHex(input) {
    var stringOut = "#";
    for (var i = 0; i < input.length; i++) {
        var tempAppendChar = input[i].toString(16);
        if (tempAppendChar.length == 1) {
            stringOut += "0";
        }
        stringOut += tempAppendChar;
    }
    return stringOut;
}