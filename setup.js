import { Registry } from 'monaco-textmate';
import { wireTmGrammars } from 'monaco-editor-textmate';
import * as monaco from 'monaco-editor';
import jassGrammar from './syntaxes/jass.tmlanguage.json'
import { loadWASM } from "onigasm";

/**
 * Initializes and sets up JASS highlighting for Monaco.
 *
 * @function
 * @async
 * @param {string} wasmPath - The path to the onigasm WebAssembly binary.
 * @returns {Promise<void>} A promise that resolves when setup is complete.
 */
export async function setupJass(wasmPath) {
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
