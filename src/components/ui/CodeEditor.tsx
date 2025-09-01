// src/components/SwissJsPlayground.tsx
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Play } from 'lucide-react';

const defaultCode = `// Write JavaScript here Ramesh\nconsole.log("Hello, Ramesh!");`;

const LiveCodeEditor: React.FC = () => {
    const [code, setCode] = useState(defaultCode);
    const [output, setOutput] = useState<string[]>([]);

    const runCode = () => {
        const logs: string[] = [];
        const originalLog = console.log;
        const originalError = console.error;

        console.log = (...args: any[]) => logs.push(args.join(' '));
        console.error = (...args: any[]) => logs.push('❌ ' + args.join(' '));

        try {
            eval(code);
        } catch (err: any) {
            logs.push('❌ ' + err.message);
        }

        console.log = originalLog;
        console.error = originalError;

        setOutput(logs);
    };
    return (
        <div className="bg-[#0e0e0e] text-white min-h-screen p-6 font-sans pt-20">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header with small play button */}
                <div className="flex justify-center items-center pt-5">
                    <button
                        onClick={runCode}
                        className="p-2 bg-cyan-500 hover:bg-cyan-600 rounded-full text-white transition"
                        title="Run Code"
                    >
                        <Play size={20} />
                    </button>
                </div>

                {/* Split layout */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Editor (70%) */}
                    <div className="w-full lg:w-[70%]">
                        <Editor
                            height="500px"
                            language="javascript"
                            value={code}
                            theme="vs-dark"
                            onChange={(val) => setCode(val || '')}
                            options={{
                                fontSize: 15,
                                minimap: { enabled: false },
                                scrollBeyondLastLine: false,
                                automaticLayout: true,
                            }}
                        />
                    </div>

                    {/* Output (30%) */}
                    <div className="w-full lg:w-[30%] bg-[#1a1a1a] border border-white/10 rounded-md p-4 text-green-400 text-sm overflow-auto min-h-[500px]">
                        <p className="text-white font-semibold mb-2">🖥️ Output:</p>
                        <pre className="whitespace-pre-wrap">{output.length ? output.join('\n') : 'Output will appear here...'}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveCodeEditor;
