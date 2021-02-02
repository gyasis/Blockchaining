var createHash = require('crypto');
const url = require('http');

class Block 
{

    constructor( index, timestamp,transactions,proof,previous_hash)
    {
        this._index = index;
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.proof = proof;
        this._previous_hash = previous_hash;


    }

    get timestamp()
    {
        return this._timestamp;
    }

    get transactions()
    {
        return this._timestamp;
    }

    get proof()
    {
        return this._proof;

    }
    get previous_hash()
    {
        return this._previous_hash;
    }

    get index()
    {
        return this._index;
    }

}