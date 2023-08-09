declare module 'monaco-jass-highlighter' {
    import { editor } from 'monaco-editor';

    /**
     * Sets the JASS path for WASM.
     */
    function setJassWASMPath(
        wasmPath: string // The path to the onigasm WebAssembly binary.
    ): Promise<void> //A promise that resolves when setup is complete.

    /**
     * Call this on a Monaco Editor instance
     */
    function wireJASSTmGrammars(editor: editor.IStandaloneCodeEditor): Promise<void>
}