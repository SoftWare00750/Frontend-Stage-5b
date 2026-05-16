import React, { useState, useRef, useEffect, useCallback } from 'react';
import { TERMINAL_COMMANDS } from './data';

interface TerminalProps {
  onToggleTheme: () => void;
}

interface TermLine {
  id: number;
  kind: 'cmd' | 'output' | 'info' | 'success' | 'error';
  text: string;
}

const TYPE_COLOR: Record<string, string> = {
  output:  'var(--text2)',
  info:    'var(--accent3)',
  success: 'var(--green)',
  error:   'var(--red)',
};

let _id = 100;
const uid = () => _id++;

const Terminal: React.FC<TerminalProps> = ({ onToggleTheme }) => {
  const [lines, setLines]     = useState<TermLine[]>([
    { id: uid(), kind: 'success', text: '✓ Connected to alex@portfolio' },
    { id: uid(), kind: 'info',    text: "Welcome! Type 'help' for available commands." },
  ]);
  const [input, setInput]     = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [hIdx, setHIdx]       = useState(-1);

  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new lines
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  const pushLines = useCallback((next: Omit<TermLine, 'id'>[]) => {
    setLines(prev => [...prev, ...next.map(l => ({ ...l, id: uid() }))]);
  }, []);

  const runCommand = useCallback((raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    // Echo the command
    pushLines([{ kind: 'cmd', text: cmd }]);
    setHistory(h => [cmd, ...h]);
    setHIdx(-1);
    setInput('');

    if (cmd === 'clear') { setLines([]); return; }

    if (cmd === 'theme') {
      onToggleTheme();
      pushLines([{ kind: 'success', text: 'Theme toggled!' }]);
      return;
    }

    const def = TERMINAL_COMMANDS[cmd];
    if (def) {
      if (def.output === 'clear') { setLines([]); return; }
      pushLines(
        (def.output as { type: string; text: string }[]).map(o => ({
          kind: o.type as TermLine['kind'],
          text: o.text,
        }))
      );
    } else {
      pushLines([{ kind: 'error', text: `command not found: ${cmd}. Type 'help' for commands.` }]);
    }
  }, [onToggleTheme, pushLines]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const ni = Math.min(hIdx + 1, history.length - 1);
      setHIdx(ni);
      setInput(history[ni] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const ni = Math.max(hIdx - 1, -1);
      setHIdx(ni);
      setInput(ni < 0 ? '' : history[ni]);
    }
  };

  return (
    <section
      id="terminal"
      style={{ padding: '7rem 3rem', background: 'var(--bg2)' }}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Section label */}
      <div style={{
        fontFamily: "'JetBrains Mono',monospace", fontSize: '0.72rem',
        color: 'var(--accent)', letterSpacing: '0.25em', textTransform: 'uppercase',
        marginBottom: '0.8rem', display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: '0.8rem',
      }}>
        <span>//</span> 03 — Interactive
      </div>

      <h2 className="reveal" style={{
        fontFamily: "'DM Serif Display',serif",
        fontSize: 'clamp(2.5rem,5vw,3.5rem)',
        lineHeight: 1.1, textAlign: 'center', marginBottom: '1rem',
      }}>
        Try the terminal.
      </h2>

      <p className="reveal" style={{
        color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.8,
        textAlign: 'center', maxWidth: 500, margin: '0 auto 2.5rem',
      }}>
        An interactive terminal to explore my background. Type{' '}
        <code style={{ color: 'var(--accent2)', fontFamily: "'JetBrains Mono',monospace" }}>help</code>{' '}
        to start.
      </p>

      {/* Terminal window */}
      <div className="reveal" style={{
        background: '#0a0a0f',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        maxWidth: 700,
        overflow: 'hidden',
        margin: '0 auto',
        boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
      }}>
        {/* Title bar */}
        <div style={{
          background: 'var(--surface)',
          padding: '0.8rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
        }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
          <span style={{
            flex: 1, textAlign: 'center',
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: '0.72rem', color: 'var(--text3)',
          }}>
            alex@portfolio ~ zsh
          </span>
        </div>

        {/* Output area */}
        <div
          ref={outputRef}
          style={{
            padding: '1.5rem',
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: '0.82rem',
            minHeight: 300,
            maxHeight: 400,
            overflowY: 'auto',
          }}
        >
          {lines.map(line => (
            <div key={line.id} style={{ marginBottom: '0.4rem', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
              {line.kind === 'cmd' ? (
                <>
                  <span style={{ color: 'var(--accent2)' }}>alex@portfolio ~ $ </span>
                  <span style={{ color: 'var(--text)' }}>{line.text}</span>
                </>
              ) : (
                <span style={{ color: TYPE_COLOR[line.kind] ?? 'var(--text2)' }}>
                  {line.text}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Input row */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.2rem 1.5rem 1.5rem',
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: '0.82rem',
        }}>
          <span style={{ color: 'var(--accent2)', whiteSpace: 'nowrap' }}>alex@portfolio ~ $ </span>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type a command..."
            autoComplete="off"
            spellCheck={false}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text)',
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: '0.82rem',
            }}
          />
          <span style={{
            color: 'var(--accent2)',
            animation: 'blink 1s step-end infinite',
          }}>
            ▋
          </span>
        </div>
      </div>
    </section>
  );
};

export default Terminal;