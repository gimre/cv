
export const compileTemplate =
    template =>
        new Function( 'context', `with( context ) { return \`${ template.innerHTML }\` }` )

export const importTemplate =
    id =>
        document.importNode( loadTemplate( id ), true )

export const loadTemplate =
    id =>
        document.querySelector( `template#${ id }`)

export const renderTemplate =
    templateId =>
        data =>
            compileTemplate( importTemplate( templateId ) )( data )
