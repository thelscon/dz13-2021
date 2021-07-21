'use strict' ;

const isPalindromeOne = value => 
    String( value ) === [ ...String( value ) ].reverse().join( '' ) ? true : false ;    //-------------первый способ

const isPalindromeTwo = value => {                                                      //-------------второй способ                                                                 
    const stringValue = String( value ) ;

    for( let key = 0 ; key < stringValue.length - key ; ++key )
        if( stringValue[ key ] !== stringValue[ stringValue.length - 1 - key ] )
            return false ;
    
    return true ;
}

console.log( isPalindromeOne( 121 ) ) ;
console.log( isPalindromeOne( '1asddsa1' ) ) ;
console.log( isPalindromeOne( '1asdds1' ) ) ;

console.log( isPalindromeTwo( 121 ) ) ;
console.log( isPalindromeTwo( 1232 ) ) ;
console.log( isPalindromeTwo( '1asddsa1' ) ) ;