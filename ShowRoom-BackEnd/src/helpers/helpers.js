const helpers = {
    excludeFields: (listOfElements, fieldToExclude) => {
        let filteredElements = listOfElements.map(element => {
            let filteredElement = { ...element };
            delete filteredElement[fieldToExclude];
            return filteredElement;
        })

        return filteredElements;
    }
}

module.exports = helpers;