import { Registry } from 'monaco-textmate';
import { wireTmGrammars } from 'monaco-editor-textmate';
import * as monaco from 'monaco-editor';

async function setupJass() {
    const registry = new Registry({
        getGrammarDefinition: async (scopeName) => {
            if (scopeName === 'source.jass') {
                return {
                    format: 'json',
                    content: await (await fetch('./syntaxes/jass.tmlanguage.json')).text(),
                };
            }
        },
    });

    await wireTmGrammars(monaco, registry, new Map([['jass', 'source.jass']]));
}

setupJass().catch(console.error);
