/*******************************************************************************
 * Transformiert einen übergebenen String in eine Zeichenkette für die
 * Darstellung mit Font C128CHC. Dabei werden zusätzlich an die ursprünglich zu
 * kodierenden Daten noch 1 Prüfziffer gebildet (Modulo 103) und angehängt
 *
 * Code128c unterschiedet sich von Code128a bzw. Code128b in den jeweiligen Ascii-Codes
 * für das Start und Ende der Ausgabezeichenkette...
 * 
 * return: Ausgabe-String
 ******************************************************************************/
function code128c(pDataToEncode: string): string {
  let dataToEncode = '';
  const C128_Start = String.fromCharCode(0xcd); // chr(205);
  const C128_Stop = String.fromCharCode(0xce); // chr(206);
  dataToEncode = pDataToEncode;
  // ////////////////////////////////////////////////////////////////
  // Adding only number chars to String "onlyCorrectData"
  // ////////////////////////////////////////////////////////////////
  let onlyCorrectData = '';
  let currentChar = 0;
  // Annahme: BirtStr.charLength entspricht dataToEncode.length
  for (let i = 0; i < dataToEncode.length; i++) {
    currentChar = dataToEncode.charCodeAt(i);
    if (currentChar >= 48 && currentChar <= 57) {
      onlyCorrectData += dataToEncode.substring(i, i + 1);
    }
  }
  dataToEncode = onlyCorrectData;
  // Check for an even number of digits, add "0" if not even
  if (dataToEncode.length % 2 === 1) {
    dataToEncode = dataToEncode + '0';
  }
  // log("[Code128c] dataToEncode(after correction)=" + dataToEncode + " (len="+ dataToEncode.length + ")");
  // ////////////////////////////////////////////////////////////////
  // Generate "dataToPrint"
  // ////////////////////////////////////////////////////////////////
  let weightedTotal = 0;
  // Set WeightedTotal to the Code 128 value of the start character
  weightedTotal = C128_Start.charCodeAt(0) - 100;
  let dataToPrint = '';
  for (let i = 0, weightValue = 1; i < dataToEncode.length; i += 2, weightValue += 1) {
    // Get the value of each number pair (ex: 5 and 6 = 5*10+6 =56)
    // And assign the ASCII values to DataToPrint
    currentChar = ((dataToEncode.charCodeAt(i) - 48) * 10)
                 + (dataToEncode.charCodeAt(i + 1) - 48);
    if (currentChar === 0) {
      dataToPrint += String.fromCharCode(194);
    } else if (currentChar < 95) {
      dataToPrint += String.fromCharCode(currentChar + 32);
    } else {
      dataToPrint += String.fromCharCode(currentChar + 100);
    }
    // multiply by the weighting character
    // add the values together to get the weighted total
    weightedTotal += (currentChar * weightValue);
  }
  // Divide the WeightedTotal by 103 and get the remainder -> this is the CheckDigitValue
  const checkDigitValue = weightedTotal % 103;
  if (checkDigitValue === 0) {
    dataToPrint += String.fromCharCode(194);
  } else if (checkDigitValue < 95) {
    dataToPrint += String.fromCharCode(checkDigitValue + 32);
  } else {
    dataToPrint += String.fromCharCode(checkDigitValue + 100);
  }
  // log("[Code128c] checkDigitValue=" + checkDigitValue );
  const printableString = C128_Start + dataToPrint + C128_Stop;
  // log("[Code128c] printableString =>> " + printableString + " <<= (len="+ printableString.length + ")");
  return printableString;
}

export { code128c };