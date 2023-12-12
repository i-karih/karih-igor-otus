const newObj = {
    a: {
        b: 1,
    }
};
const newObj2 = {
    a: {
        b: 2,
    }
};
const newObj3 = {
    a: {
        b: 1,
    }
};

const deepEqual = (objCurrent, objComparison, strPath = '$') => {
    if (typeof objCurrent !== typeof objComparison)
    {
        console.error(`Type mismatch at ${strPath}: objComparison ${typeof objComparison}, got ${typeof objCurrent}`);
        return false;
    }
    if (typeof objCurrent === 'object' && objCurrent !== null && objComparison !== null)
    {
        const keysA = Object.keys(objCurrent);
        const keysE = Object.keys(objComparison);

        if (keysA.length !== keysE.length)
        {
            console.error(`Property count mismatch at ${strPath}: objComparison ${keysE.length}, got ${keysA.length}`);
            return false;
        }

        for (const key of keysA)
        {
            if (!objComparison.hasOwnProperty(key))
            {
                console.error(`Property ${strPath}.${key} is missing in objComparison object`);
                return false;
            }

            if (!deepEqual(objCurrent[key], objComparison[key], `${strPath}.${key}`))
                return false;
        }
        return true;
    }
    // Простая проверка на равенство
    if (objCurrent !== objComparison)
    {
        console.error(`Value mismatch at ${strPath}: objComparison ${objComparison}, got ${objCurrent}`);
        return false;
    }

    return true;
};


console.log(deepEqual(newObj, newObj));
console.log(deepEqual(newObj, newObj2));
console.log(deepEqual(newObj, newObj3));