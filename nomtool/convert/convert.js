//************************< convert.js >****************************
//** Author: Nguye^~n Doa~n Vu+o+.ng (levan@hotmail.com)
//** Copyright (c) 2000  All rights reserved.
//** You're feel free to use this code, but it would be nice if you
//** send me an email, so I can guess how many people are using it.
//******************************************************************
var VIS_HotKeys;
var VIS_HotChars;
var VIS_CombiToneChar;
var VIS_CombiModiChar;
var VIS_V8_V7;
var VIS_UNI;
var supportEncoding;
var supportFont;
var charMode = -1;
 
function initVietMap() {
 
   //*** For Netscape: could not put cursor at the end of line
   //*** so we temporarily disable this feature for Netscape users
// if (! document.all ) {
//      document.captureEvents(Event.KEYPRESS);
//      document.onkeypress = nsKeyPress;
// }
   charMode = 0;
   supportEncoding = new Array ( "viqr","dynamic","viscii","unicode" );
   supportFont = new Array ( "Arial","VI Times","VI Times","Tahoma" );
 
   VIS_HotKeys = new Array
     /*----0----1----2----3----4----5----6----7----8----9---*/
     /*----'----`----?----~----.----(----^----+----d----\---*/
     (    39,  96,  63, 126,  46,  40,  94,  43, 100,  92   );
 
   VIS_HotChars = new Array
     /*----a----a(---a^---e----e^---i----o----o^---o+---u----u+---y----*/
     (    97, 229, 226, 101, 234, 105, 111, 244, 189, 117, 223, 121,
     /*----a'---a`---a?---a~---a.---e'---e`---e?---e~---e.--------*/
         225, 224, 228, 227, 213, 233, 232, 235, 168, 169,
     /*----o'---o`---o?---o~---o.---u'---u`---u?---u~---u.---d----*/
         243, 242, 246, 245, 247, 250, 249, 252, 251, 248, 100,
     /*----A----A(---A^---E----E^---I----O----O^---O+---U----U+---Y----*/
          65, 197, 194,  69, 202,  73,  79, 212, 180,  85, 191,  89,
     /*----A'---A`---A?---A~---A.---E'---E`---E?---E~---E.--------*/
         193, 192, 196, 195, 128, 201, 200, 203, 136, 137,
     /*----O'---O`---O?---O~---O.---U'---U`---U?---U~---U.---D----*/
         211, 210, 153, 160, 154, 218, 217, 156, 157, 158,  68    );
 
   VIS_CombiToneChar = new Array(
     /***************************  Acute ' *******************************/
     new Array
       /*----a----a(---a^---e----e^---i----o----o^---o+---u----u+---y----*/
       (   225, 161, 164, 233, 170, 237, 243, 175, 190, 250, 209, 253,
       /*----A----A(---A^---E----E^---I----O----O^---O+---U----U+---Y----*/
           193, 129, 132, 201, 138, 205, 211, 143, 149, 218, 186, 221    ),
     /***************************  Grave ` *******************************/
     new Array
       /*----a----a(---a^---e----e^---i----o----o^---o+---u----u+---y----*/
       (   224, 162, 165, 232, 171, 236, 242, 176, 182, 249, 215, 207,
       /*----A----A(---A^---E----E^---I----O----O^---O+---U----U+---Y----*/
           192, 130, 133, 200, 139, 204, 210, 144, 150, 217, 187, 159    ),
     /***************************  Hook Above ? **************************/
     new Array
       /*----a----a(---a^---e----e^---i----o----o^---o+---u----u+---y----*/
       (   228, 198, 166, 235, 172, 239, 246, 177, 183, 252, 216, 214,
       /*----A----A(---A^---E----E^---I----O----O^---O+---U----U+---Y----*/
           196,   2, 134, 203, 140, 155, 153, 145, 151, 156, 188,  20    ),
     /***************************  Tilde ~ *******************************/
     new Array
       /*----a----a(---a^---e----e^---i----o----o^---o+---u----u+---y----*/
       (   227, 199, 231, 168, 173, 238, 245, 178, 222, 251, 230,  219,
       /*----A----A(---A^---E----E^---I----O----O^---O+---U----U+---Y----*/
           195,   5,   6, 136, 141, 206, 160, 146, 179, 157, 255,  25    ),
     /***************************  Dot Below . ***************************/
     new Array
       /*----a----a(---a^---e----e^---i----o----o^---o+---u----u+---y----*/
       (   213, 163, 167, 169, 174, 184, 247, 181, 254, 248, 241,  220,
       /*----A----A(---A^---E----E^---I----O----O^---O+---U----U+---Y----*/
           128, 131, 135, 137, 142, 152, 154, 147, 148, 158, 185,  30    )
     );
 
   VIS_CombiModiChar = new Array(
     /***************************  Breve ( *******************************/
     new Array
       /*----a----a(---a^---e----e^---i----o----o^---o+---u----u+---y----*/
       (   229,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
       /*----a'---a`---a?---a~---a.---e'---e`---e?---e~---e.--------*/
           161, 162, 198, 199, 163,   0,   0,   0,   0,   0,
       /*----o'---o`---o?---o~---o.---u'---u`---u?---u~---u.---d----*/
             0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
       /*----A----A(---A^---E----E^---I----O----O^---O+---U----U+---Y----*/
           197,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
       /*----A'---A`---A?---A~---A.---E'---E`---E?---E~---E.--------*/
           129, 130,   2,   5, 131,   0,   0,   0,   0,   0,
       /*----O'---O`---O?---O~---O.---U'---U`---U?---U~---U.---D----*/
             0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0    ),
     /***************************  Circumflex ^ **************************/
     new Array
       /*----a----a(---a^---e----e^---i----o----o^---o+---u----u+---y----*/
       (   226,   0,   0, 234,   0,   0, 244,   0,   0,   0,   0,   0,
       /*----a'---a`---a?---a~---a.---e'---e`---e?---e~---e.--------*/
           164, 165, 166, 231, 167, 170, 171, 172, 173, 174,
       /*----o'---o`---o?---o~---o.---u'---u`---u?---u~---u.---d----*/
           175, 176, 177, 178, 181,   0,   0,   0,   0,   0,   0,
       /*----A----A(---A^---E----E^---I----O----O^---O+---U----U+---Y----*/
           194,   0,   0, 202,   0,   0, 212,   0,   0,   0,   0,   0,
       /*----A'---A`---A?---A~---A.---E'---E`---E?---E~---E.--------*/
           183, 133, 134,   6, 135, 138, 139, 140, 141, 142,
       /*----O'---O`---O?---O~---O.---U'---U`---U?---U~---U.---D----*/
           143, 144, 145, 146, 147,   0,   0,   0,   0,   0,   0    ),
     /***************************  Horn + ********************************/
     new Array
       /*----a----a(---a^---e----e^---i----o----o^---o+---u----u+---y----*/
       (     0,   0,   0,   0,   0,   0, 189,   0,   0, 223,   0,   0,
       /*----a'---a`---a?---a~---a.---e'---e`---e?---e~---e.--------*/
             0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
       /*----o'---o`---o?---o~---o.---u'---u`---u?---u~---u.---d----*/
           190, 182, 183, 222, 254, 209, 215, 216, 230, 241,   0,
       /*----A----A(---A^---E----E^---I----O----O^---O+---U----U+---Y----*/
             0,   0,   0,   0,   0,   0, 180,   0,   0,   0,   0,   0,
       /*----A'---A`---A?---A~---A.---E'---E`---E?---E~---E.--------*/
             0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
       /*----O'---O`---O?---O~---O.---U'---U`---U?---U~---U.---D----*/
           149, 150, 151, 179, 148, 186, 187, 188, 255, 185,   0    )
     );
 
   VIS_V8_V7 = new Array /*** 128 to 255 ***/
     ( 4161, 8513, 8769,12353,16705,16961,17473,20545, 2117, 4165,16709,16965,
      17477,18501,20549,16719,16975,17487,18511,20559,36943,33103,33359,33871,
       4169, 1103, 4175, 1097, 1109, 2133, 4181,  601, 2127, 8545, 8801,12385,
      16737,16993,17505,20577, 2149, 4197,16741,16997,17509,18533,20581,16751,
      17007,17519,18543,34895,32847,20591,33391,33903, 4201,36949,33109,33365,
      33877,32879,33135,32853,  577,  321,16449, 2113, 1089, 8257, 9313,10337,
        581,  325,16453, 1093,  585,  329, 2121,  633,    0,33141,  591,  335,
      16463, 4193, 1145,33397,33909,  597,  341, 2169, 4217,  345,34927,32885,
        609,  353,16481, 2145, 1121, 8289,34933,18529,  613,  357,16485, 1125,
        617,  361, 2153, 1129,    0,36981,  623,  367,16495, 2159, 1135, 4207,
       4213,  629,  373, 2165, 1141,  377,36975,34901 );
 
   VIS_UNI = new Array /*** 0 to 255 ***/
      ( 0x0000,0x0001,0x1eb2,0x0003,0x0004,0x1eb4,0x1eaa,0x0007,
        0x0008,0x0009,0x000a,0x000b,0x000c,0x000d,0x000e,0x000f,
        0x0010,0x0011,0x0012,0x0013,0x1ef6,0x0015,0x0016,0x0017,
        0x0018,0x1ef8,0x001a,0x001b,0x001c,0x001d,0x1ef4,0x001f,
        0x0020,0x0021,0x0022,0x0023,0x0024,0x0025,0x0026,0x0027,
        0x0028,0x0029,0x002a,0x002b,0x002c,0x002d,0x002e,0x002f,
        0x0030,0x0031,0x0032,0x0033,0x0034,0x0035,0x0036,0x0037,
        0x0038,0x0039,0x003a,0x003b,0x003c,0x003d,0x003e,0x003f,
        0x0040,0x0041,0x0042,0x0043,0x0044,0x0045,0x0046,0x0047,
        0x0048,0x0049,0x004a,0x004b,0x004c,0x004d,0x004e,0x004f,
        0x0050,0x0051,0x0052,0x0053,0x0054,0x0055,0x0056,0x0057,
        0x0058,0x0059,0x005a,0x005b,0x005c,0x005d,0x005e,0x005f,
        0x0060,0x0061,0x0062,0x0063,0x0064,0x0065,0x0066,0x0067,
        0x0068,0x0069,0x006a,0x006b,0x006c,0x006d,0x006e,0x006f,
        0x0070,0x0071,0x0072,0x0073,0x0074,0x0075,0x0076,0x0077,
        0x0078,0x0079,0x007a,0x007b,0x007c,0x007d,0x007e,0x007f,
        0x1ea0,0x1eae,0x1eb0,0x1eb6,0x1ea4,0x1ea6,0x1ea8,0x1eac,
        0x1ebc,0x1eb8,0x1ebe,0x1ec0,0x1ec2,0x1ec4,0x1ec6,0x1ed0,
        0x1ed2,0x1ed4,0x1ed6,0x1ed8,0x1ee2,0x1eda,0x1edc,0x1ede,
        0x1eca,0x1ece,0x1ecc,0x1ec8,0x1ee6,0x0168,0x1ee4,0x1ef2,
        0x00d5,0x1eaf,0x1eb1,0x1eb7,0x1ea5,0x1ea7,0x1ea9,0x1ead,
        0x1ebd,0x1eb9,0x1ebf,0x1ec1,0x1ec3,0x1ec5,0x1ec7,0x1ed1,
        0x1ed3,0x1ed5,0x1ed7,0x1ee0,0x01a0,0x1ed9,0x1edd,0x1edf,
        0x1ecb,0x1ef0,0x1ee8,0x1eea,0x1eec,0x01a1,0x1edb,0x01af,
        0x00c0,0x00c1,0x00c2,0x00c3,0x1ea2,0x0102,0x1eb3,0x1eb5,
        0x00c8,0x00c9,0x00ca,0x1eba,0x00cc,0x00cd,0x0128,0x1ef3,
        0x0110,0x1ee9,0x00d2,0x00d3,0x00d4,0x1ea1,0x1ef7,0x1eeb,
        0x1eed,0x00d9,0x00da,0x1ef9,0x1ef5,0x00dd,0x1ee1,0x01b0,
        0x00e0,0x00e1,0x00e2,0x00e3,0x1ea3,0x0103,0x1eef,0x1eab,
        0x00e8,0x00e9,0x00ea,0x1ebb,0x00ec,0x00ed,0x0129,0x1ec9,
        0x0111,0x1ef1,0x00f2,0x00f3,0x00f4,0x00f5,0x1ecf,0x1ecd,
        0x1ee5,0x00f9,0x00fa,0x0169,0x1ee7,0x00fd,0x1ee3,0x1eee );
}
 
//*****************************************************************
//** Function : V_VIQR_to_VISCII()
//** Purpose:   Given 2 VIQR characters, combine into 1 VISCII
//** -------    character if possible
//** Return:  0-FALSE: Couldn't combined.
//** ------:  1-TRUE:  if LastChar is modified to be a VISCII char
//**          2-TRUE:  A state is changing (return BackSpace)
//*****************************************************************
function V_VIQR_to_VISCII(LastChar,NewChar) {
//  var statechange;
    var ochar, nchar, converted;
    var idkey, idchar;
 
    ochar = LastChar;
//  statechange = (ochar == VIS_HotKeys[9]);
    converted   = false;
    /*************************************************************/
    /******** Vietnamese (V) or English+ESC (\) mode *************/
    /*************************************************************/
    /****** Solve the problem of DD (4 different cases ***********/
    nchar = NewChar;
    if (nchar == 68) {
         nchar = 100;
         if (ochar == 45) ochar = nchar;
    }
    else if (nchar == 100) {
             if (ochar == 45) ochar = nchar;
    }
    else if (nchar == 42) nchar=43;
    /*********************************************************/
    for (idkey=0; idkey < 9; idkey++) {
         if (nchar == VIS_HotKeys[idkey]) {
//           if (statechange) /*** Escape character ***/
//                converted=true;
//           else
                  for (idchar=0; idchar < 66; idchar++)
                       if (ochar == VIS_HotChars[idchar]) {
                           if (idkey < 5) {
                                /******** For '`?~. tones ****/
                                ochar = (idchar % 33);
                                if (ochar < 12)
                                     nchar = VIS_CombiToneChar[idkey]
                                         [ochar+Math.floor(idchar / 33)*12];
                                else nchar=0;
                           }    /*****************************/
                           else
                           if (idkey==8) { /****** For DD ****/
                                if ((idchar % 33) == 32)
                                     nchar= (ochar +140);
                                else nchar=0;
                           }    /*****************************/
                           else /****** For ^(+ modifiers ****/
                                nchar = VIS_CombiModiChar[idkey-5]
                                                           [idchar];
                           converted=(nchar != 0);
                           break;
                       }
             if (converted) LastChar=nchar;
             break;
         }
    }
    if (converted) return(LastChar);
    else           return(0);
}
//*****************************************************************
//** Function : V_VISCII_to_VIQR()
//** Purpose:   Given 1 VISCII character, split to VIQR chars
//** Return:    Number of returned characters.
//*****************************************************************
function V_VISCII_to_VIQR(VIS, VIQR) {
    var c;
    var NumChars = 1;
    var key=VIS;
    /******************* Get the secret code *************************/
    if (VIS < 128) {
        if (VIS < 32) {
            if (VIS == 2) key=9281;
            else if (VIS == 5) key=10305;
            else if (VIS == 6) key=18497;
            else if (VIS == 20) key=1113;
            else if (VIS == 25) key=2137;
            else if (VIS == 30) key=4185;
        }
    }
    else {
        if (VIS >= 256) {
          for (c=255; c > 0; c--) {
            if (VIS_UNI[c] == VIS) {
              VIS = c;
              break;
            }
          }
        }
        if ((VIS==240) || (VIS==208)) {
             key= VIS - 140;
             VIQR[1] = key;
             NumChars++;
        }
        else key = VIS_V8_V7[VIS-128];
    }
    /*****************************************************************/
    VIQR[0]=(key & 0xFF);     /*** Get the base letter *******/
    key >>>= 8;
    if (key != 0)          /*** Get the diacritic marks ***/
         VIS=7;
         for (c=0x80; key != 0; c >>>= 1) {
              if ((key & c) != 0) {
                  if (++NumChars ==2) VIQR[1]=VIS_HotKeys[VIS];
                  else                VIQR[2]=VIS_HotKeys[VIS];
                  key &= (~c);
              }
              VIS--;
         }
    return(NumChars);
}
//******************************************************************
//** Procedure : strVIStoVIQR()
//** Purpose   : Convert a VISCII string to a VIQR string
//******************************************************************
function strVIStoVIQR(thestr) {
  if (thestr == null) return(null);
  if (charMode < 0) initVietMap();
  var cc = new Array (0,0,0);
  var c,i,j,k;
  var x = "";
 
  for (i=0; i < thestr.length; i++) {
    c = thestr.charCodeAt(i);
    j = V_VISCII_to_VIQR(c,cc);
    for (k=0; k < j; k++) x += String.fromCharCode(cc[k]);
  }
  return(x);
}
//******************************************************************
//** Procedure : nsKeyPress()
//** Purpose   : This function will be called by netscape only
//******************************************************************
function nsKeyPress(e) {
  return( vietKey(e.target,e.which));
}
//******************************************************************
//** Procedure : vietKey()
//******************************************************************
function vietKey(txtfield) {
  if (charMode <= 0) return(true);
  var c = null;
  //** Only IE works for now, ignore all others browsers
  if (document.all) {
    c = event.keyCode
    if (c <= 32) c = null;
  }
  if (c == null) return(true);
 
  var s = txtfield.value;
  var i = s.length-1;
  if (i >= 0) {
    var k;
    k = s.charCodeAt(i);
    if ((charMode == 3) && ( k > 255)) {
      var j;
      for (j=255; j > 0; j--) {
        if (VIS_UNI[j] == k) {
          k = j;
          break;
        }
      }
    }
    k = V_VIQR_to_VISCII(k,c);
    if (k != 0) {
      if (charMode == 3) k = VIS_UNI[k];
      txtfield.value = s.substring(0,i) + String.fromCharCode(k);
      return(false);
    }
  }
  return(true);
}
//******************************************************************
//** Procedure : setInputMode()
//******************************************************************
function setInputMode(cMode) {
  if (! document.all ) return;
  if (charMode < 0) initVietMap();
  cMode = cMode.toLowerCase();
  var i;
  for (i=3; i > 0; i --) {
    if (cMode == supportEncoding[i]) break;
  }
  charMode = i;
  var j, v;
  for (i=0; i < document.forms.length; i++) {
    for (j=0; j < document.forms[i].length; j++) {
      v = document.forms[i].elements[j];
      if ((v.type == "text") || (v.type == "textarea")) {
        v.style.fontFamily = supportFont[charMode];
      }
    }
  }
}
