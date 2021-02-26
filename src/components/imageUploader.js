import React, { useState, useEffect, useRef } from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import ImageUploading from "react-images-uploading";

const ImageUploader = ({setImageUploaded}) => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImageUploaded([imageList, addUpdateIndex]);
    setImages(imageList);
  };

  return (
    <div>
      <Card className="card-user">
        <Card.Body>
          <ImageUploading
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({ imageList, onImageUpload, onImageUpdate, onImageRemove }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                {imageList.length <= 0 ? (
                  <div onClick={onImageUpload}>
                    <img
                      src={require("../assets/img/placeholder.png").default}
                      style={{ width: "100%", cursor: "pointer" }}
                    />
                  </div>
                ) : (
                  <div></div>
                )}

                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <div onClick={() => onImageUpdate(index)}>
                      <img
                        src={image["data_url"]}
                        alt=""
                        style={{
                          width: "100%",
                          cursor: "pointer",
                          objectFit: "cover",
                        }}
                      />
                      <i style={{ fontSize: "0.7rem" }}>{image.file.name}</i>
                    </div>

                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={() => onImageRemove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ImageUploader;
