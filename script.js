function convertToRoman(num) {
    let numStr = num.toString();
    let strArr = [];
    for (let i = 0; i < numStr.length; i++) {
      strArr.push(numStr[i]);
    }
    let numArr = [];
    strArr.forEach(value => numArr.push(Number(value)))
    console.log(numArr);
    let romanStr = "";
    console.log(numArr.length)
    switch (numArr.length) {
      case 1:
        switch (numArr[0]) {
          case 1:
            romanStr += "I";
            break;
          case 2:
            romanStr += "II";
            break;
          case 3:
            romanStr += "III";
            break;
          case 4:
            romanStr += "IV";
            break;
          case 5:
            romanStr += "V";
            break;
          case 6:
            romanStr += "VI";
            break;
          case 7:
            romanStr += "VII";
            break;
          case 8:
            romanStr += "VIII";
            break;
          case 9:
            romanStr += "IX";
            break;
        }
        break;
      case 2:
        switch (numArr[0]) {
          case 1:
            romanStr += "X";
            break;
          case 2:
            romanStr += "XX";
            break;
          case 3:
            romanStr += "XXX";
            break;
          case 4:
            romanStr += "XL";
            break;
          case 5:
            romanStr += "L";
            break;
          case 6:
            romanStr += "LX";
            break;
          case 7:
            romanStr += "LXX";
            break;
          case 8:
            romanStr += "LXXX";
            break;
          case 9:
            romanStr += "XC";
            break;
        }
        switch (numArr[1]) {
          case 1:
            romanStr += "I";
            break;
          case 2:
            romanStr += "II";
            break;
          case 3:
            romanStr += "III";
            break;
          case 4:
            romanStr += "IV";
            break;
          case 5:
            romanStr += "V";
            break;
          case 6:
            romanStr += "VI";
            break;
          case 7:
            romanStr += "VII";
            break;
          case 8:
            romanStr += "VIII";
            break;
          case 9:
            romanStr += "IX";
            break;
        }
        break;
      case 3:
        switch (numArr[0]) {
          case 1:
            romanStr += "C";
            break;
          case 2:
            romanStr += "CC";
            break;
          case 3:
            romanStr += "CCC";
            break;
          case 4:
            romanStr += "CD";
            break;
          case 5:
            romanStr += "D";
            break;
          case 6:
            romanStr += "DC";
            break;
          case 7:
            romanStr += "DCC";
            break;
          case 8:
            romanStr += "DCCC";
            break;
          case 9:
            romanStr += "CM";
            break;
        }
        switch (numArr[1]) {
          case 1:
            romanStr += "X";
            break;
          case 2:
            romanStr += "XX";
            break;
          case 3:
            romanStr += "XXX";
            break;
          case 4:
            romanStr += "XL";
            break;
          case 5:
            romanStr += "L";
            break;
          case 6:
            romanStr += "LX";
            break;
          case 7:
            romanStr += "LXX";
            break;
          case 8:
            romanStr += "LXXX";
            break;
          case 9:
            romanStr += "XC";
            break;
        }
        switch (numArr[2]) {
          case 1:
            romanStr += "I";
            break;
          case 2:
            romanStr += "II";
            break;
          case 3:
            romanStr += "III";
            break;
          case 4:
            romanStr += "IV";
            break;
          case 5:
            romanStr += "V";
            break;
          case 6:
            romanStr += "VI";
            break;
          case 7:
            romanStr += "VII";
            break;
          case 8:
            romanStr += "VIII";
            break;
          case 9:
            romanStr += "IX";
            break;
        }
        break;
      case 4:
        switch (numArr[0]) {
          case 1:
            romanStr += "M";
            break;
          case 2:
            romanStr += "MM";
            break;
          case 3:
            romanStr += "MMM";
            break;
        }
        switch (numArr[1]) {
          case 1:
            romanStr += "C";
            break;
          case 2:
            romanStr += "CC";
            break;
          case 3:
            romanStr += "CCC";
            break;
          case 4:
            romanStr += "CD";
            break;
          case 5:
            romanStr += "D";
            break;
          case 6:
            romanStr += "DC";
            break;
          case 7:
            romanStr += "DCC";
            break;
          case 8:
            romanStr += "DCCC";
            break;
          case 9:
            romanStr += "CM";
            break;
        }
        switch (numArr[2]) {
          case 1:
            romanStr += "X";
            break;
          case 2:
            romanStr += "XX";
            break;
          case 3:
            romanStr += "XXX";
            break;
          case 4:
            romanStr += "XL";
            break;
          case 5:
            romanStr += "L";
            break;
          case 6:
            romanStr += "LX";
            break;
          case 7:
            romanStr += "LXX";
            break;
          case 8:
            romanStr += "LXXX";
            break;
          case 9:
            romanStr += "XC";
            break;
        }
        switch (numArr[3]) {
          case 1:
            romanStr += "I";
            break;
          case 2:
            romanStr += "II";
            break;
          case 3:
            romanStr += "III";
            break;
          case 4:
            romanStr += "IV";
            break;
          case 5:
            romanStr += "V";
            break;
          case 6:
            romanStr += "VI";
            break;
          case 7:
            romanStr += "VII";
            break;
          case 8:
            romanStr += "VIII";
            break;
          case 9:
            romanStr += "IX";
            break;
        }
        break;
    }
    console.log(romanStr)
    return romanStr;
  }