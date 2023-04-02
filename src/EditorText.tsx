import { useRef, useState, FC, useMemo } from "react";
import JoditEditor from "jodit-react";

interface EditorTextProps {
  placeholder?: string;
}

export const EditorText: FC<EditorTextProps> = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    placeholder: placeholder || "Start typings...",
    enableDragAndDropFileToEditor: true,
    uploader: {
      insertImageAsBase64URI: true,
    },
    statusbar: false,
  };

  console.log(content);
  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
        onChange={(newContent) => {}}
      />
    </div>
  );
};
