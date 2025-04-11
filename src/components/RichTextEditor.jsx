import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = () => {
    const [value, setValue] = useState('');

    return (
        <div className='rich_text'>
            <ReactQuill theme="snow" value={value} onChange={setValue}
                modules={{
                    toolbar: [
                        [{ header: [1, 2, false] }],
                        ['bold', 'italic', 'underline'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['link', 'image'],
                        ['clean']
                    ]
                }} />
            {/* <div style={{ marginTop: '20px' }}>
                <h3>Output (HTML):</h3>
                <div dangerouslySetInnerHTML={{ __html: value }} />
            </div> */}
        </div>
    );
};

export default RichTextEditor;