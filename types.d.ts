declare module 'monaco-jass-highlighter' {
    import { editor } from 'monaco-editor';

    /**
     * Call this on a Monaco Editor instance to allow it to work with JASS
     */
    function wireJASSTmGrammars(editor: editor.IStandaloneCodeEditor): Promise<void>
}