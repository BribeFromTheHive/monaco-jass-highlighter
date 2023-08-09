import { Registry } from 'monaco-textmate';
import { wireTmGrammars } from 'monaco-editor-textmate';
import * as monaco from 'monaco-editor';
import jassGrammar from './syntaxes/jass.tmlanguage.json'

export async function setupJass() {
    const registry = new Registry({
        getGrammarDefinition: async (scopeName) => {
            if (scopeName === 'source.jass') {
                return {
                    format: 'json',
                    content: JSON.stringify(jassGrammar),
                };
            }
        },
    });

    await wireTmGrammars(monaco, registry, new Map([['jass', 'source.jass']]));
}
