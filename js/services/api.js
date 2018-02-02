
import { API_BASE } from '/js/config.js'
import { sortLexicallyInsensitiveByKey } from '/js/lambdas/sort.js'

const apiFetch = ( url, ... rest ) =>
    fetch( `${ API_BASE }${ url }`, ... rest )
        .then( res => res.json( ) )

export const ApiService = {
    getJobs: ( ) =>
        apiFetch( '/jobs.json' )
            .then( sortLexicallyInsensitiveByKey( 'name' ) )
}
