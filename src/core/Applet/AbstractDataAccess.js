/**
 * Abstract class for applet data access classes.
 * @constructor
 * @param {object} props
 */
export class AbstractDataAccess {
    constructor(props) {
        if (new.target===AbstractDataAccess){
            throw TypeError("class AbstractDataAccess cannot be instantiated")
        }
    }

    /**
     * Handles case in subclasses where attempted read fails
     * @param {String} attr - name of attempted attribute
     * @param {String} help - help message
     */
    readError(attr, help="unknown"){
        console.log(`Could not read property ${attr} of parent: ${help}`)
    }

    /**
     * Handles case in subclasses where attempted write to property fails
     * @param {String} attr - name of attempted attribute
     * @param {String} help - help message
     */
    writeError(attr, help="unknown"){
        console.log(`Could not write property ${attr} of parent: ${help}`)
    }

    /**
     * Handles case in subclasses where attempted append to property fails
     * @param {String} attr - name of attempted attribute
     * @param {String} help - help message
     */
    appendError(attr, help="unknown"){
        console.log(`Could not write property ${attr} of parent: ${help}`)
    }

}