import React, { useState } from 'react';
type ImageProps = {
  setImage: Function;
  images?: any;
};
function Image({ setImage, images }: ImageProps) {
  const [Object1, setObject] = useState(images);
  function onFileChange(e: any) {
    setImage(e.target.files);
    setObject(URL.createObjectURL(e.target.files![0]));
  }

  return (
    <div>
      {Object1 ? (
        <div>
          <div
            style={{
              padding: '10px'
            }}
          >
            <img
              style={{ display: 'flex', width: '50%', height: '0%' }}
              onClick={(): void => {
                setImage('');
                setObject('');
              }}
              src={
                typeof Object1 === 'string'
                  ? Object1
                  : URL.createObjectURL(Object1)
              }
              aria-hidden
              alt="Default image"
              width="-webkit-fill-availabl"
              height="100px"
            />
          </div>
        </div>
      ) : (
        <input type="file" onChange={onFileChange} id="file1" />
      )}
    </div>
  );
}

export default Image;
