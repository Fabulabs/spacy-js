import Language from './language'
import { Doc, Token, Span } from './tokens'

// Root of the module
let Spacy = {
    load: function(model, api) {
        return new Language(model, api);
    }
}

// Named exports
Spacy.Doc = Doc;
Spacy.Token = Token;
Spacy.Span = Span;

export default Spacy;
