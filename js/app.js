
import { ApiService } from '/js/services/api.js'
import { mapToDOM } from '/js/lambdas/map.js'

const container = document.querySelector( '#container' )

ApiService.getJobs( )
    .then( mapToDOM( 'job' ) )
    .then( domStrings => domStrings.join( '' ) )
    .then( domString => container.innerHTML = domString )
