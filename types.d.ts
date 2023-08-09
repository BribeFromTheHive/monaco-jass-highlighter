declare module 'monaco-jass-highlighter' {
    /**
     * Initializes and sets up JASS highlighting for Monaco.
     */
    function setupJass(
        wasmPath: string // The path to the onigasm WebAssembly binary.
    ): Promise<void> //A promise that resolves when setup is complete.
}