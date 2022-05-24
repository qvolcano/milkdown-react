import React from "react";

import { defaultValueCtx, Editor, rootCtx } from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { ReactEditor, useEditor } from "@milkdown/react";
import { commonmark } from "@milkdown/preset-commonmark";
import { emoji } from "@milkdown/plugin-emoji";

// import "./styles.css";

export default function App() {
  const editor = useEditor((root) =>
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root);
        ctx.set(defaultValueCtx, "# Milkdown :heartpulse: React");
      })
      .use(nord)
      .use(commonmark)
      .use(emoji)
  );
  return (
    <div className="App">
      <ReactEditor editor={editor} />
    </div>
  );
}
