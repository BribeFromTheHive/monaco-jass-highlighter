import { Registry } from 'monaco-textmate';
import { wireTmGrammars } from 'monaco-editor-textmate';
import * as monaco from 'monaco-editor';
import jassGrammar from './syntaxes/jass.tmlanguage.json'
import { loadWASM } from "onigasm";

/**
 * @param {string} wasmPath.
 */
export async function setupJass(wasmPath) {
    monaco.languages.register({ id: 'jass' });

    await loadWASM(wasmPath)

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
