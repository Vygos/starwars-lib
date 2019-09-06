'use strict';

const expect = require('chai').expect;
import starWars from './index';

describe('starwar-names', function(){
    it('should have a list of all available names', function(){
        expect(isArrayOfStrigs(starWars.all)).to.be.true
        
    })
    it('should allow me to get a random name from the list', function(){
        expect(starWars.random()).to.satisfy(isIncludedIn(starWars.all));
    })
})


function isArrayOfStrigs(array){
    return array.every(function(item){
        return typeof item === 'string';
    })
}


function isIncludedIn(array){
    return function(item){
        return array.indexOf(item) !== -1;
    }
}