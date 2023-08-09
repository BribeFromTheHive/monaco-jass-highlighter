import { Registry } from 'monaco-textmate';
import { wireTmGrammars } from 'monaco-editor-textmate';
import * as monaco from 'monaco-editor';
import jassGrammar from './syntaxes/jass.tmlanguage.json'
import { loadWASM } from "onigasm";

const grammars = new Map([['jass', 'source.jass']]);
const content = JSON.stringify(jassGrammar)

monaco.languages.register({ id: 'jass' });

const registry = new Registry({
    getGrammarDefinition: async () => {
        return {
            format: 'json',
            content,
        };
    },
});

/**
 * @param {string} wasmPath.
 */
export async function setJassWASMPath(wasmPath) {
    await loadWASM(wasmPath)
}

/**
 * @param { editor.IStandaloneCodeEditor } [editor]
 */
export async function wireJASSTmGrammars(editor) {
    await wireTmGrammars(monaco, registry, grammars, editor);
}
