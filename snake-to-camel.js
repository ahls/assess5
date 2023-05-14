function snakeToCamel(snakeStr) {
    let camelStr = "";
    let toCap = false;
    for(let i = 0; i < snakeStr.length;i++)
    {
        let currChar = snakeStr[i];
        if(toCap)
        {
            //if previous char was _, add current letter, but capitalize it
            camelStr+= currChar.toUpperCase();
            toCap = false;
        }
        else if(currChar == '_')
        {
            //if current char is _, set toCap to be true
            toCap = true;
        }
        else
        {
            camelStr += currChar;
        }

    }
    return camelStr;
}

