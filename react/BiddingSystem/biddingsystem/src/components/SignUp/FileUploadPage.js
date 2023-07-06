import React, { useState } from 'react'

const FileUploadPage = () => {
    const [name, setName] = useState();
    const [selectFile, setSelectFile] =useState();
    const [isfile, setIsFile] = useState(false);
    const [merging, setMerging] = useState({});

    const nameHandle = (e) => {
        setName(e.target.value);
    }
    const fileChanges = (e) => {
         setIsFile(true);
         setSelectFile(e.target.files[0]);
    }
    const submitData = async(e) => {
        e.prevent.default()
        setMerging({name, selectFile});
        let res = await fetch("", {
            method:"POST",
            body:JSON.stringify()
        })
    }
  return (
    <div>FileUploadPage
    <form onSubmit={submitData}>
      <label>name
       <input type="text" name='name' onChange={nameHandle}/>
      </label>
      <label>
        upload docs
        <input type="file" name='file' onChange={fileChanges}/>
        {
            isfile ? <p>FileName:{selectFile.fileName}</p> : ""
        }
      </label>
       <button type='submit'>submit</button>
      </form>
    </div>

    
  )
}

export default FileUploadPage