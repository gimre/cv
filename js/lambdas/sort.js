
import { extractKey } from './map.js'

export const lexicallyInsensitive =
    ( left, right ) =>
        left.localeCompare( right )

export const lexicallyInsensitiveByKey =
    ( key ) =>
        ( left, right ) =>
            lexicallyInsensitive(
                extractKey( key )( left ),
                extractKey( key )( right )
            )

export const sortLexicallyInsensitiveByKey =
    key =>
        array =>
            array.sort( lexicallyInsensitiveByKey( key ) )
