
import { renderTemplate } from '/js/helpers/dom.js'

export const extractKey =
    key =>
        obj =>
            obj[ key ]

export const mapToDOM =
    template =>
        array =>
            array.map( toDOM( template ) )

export const toDOM =
    templateId =>
        data =>
            renderTemplate( templateId )( data )