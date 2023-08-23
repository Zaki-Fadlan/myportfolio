import React, { useState } from "react";

const Alzheimer = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleAnalyze = () => {
    if (selectedImage) {
      const img = new Image();

      img.src = selectedImage;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = 128;
        canvas.height = 128;

        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          0,
          0,
          canvas.width,
          canvas.height
        );

        const resizedImage = canvas.toDataURL("image/jpeg");

        setSelectedImage(resizedImage);
      };
    }
  };

  return (
    <div className="justify-center mx-auto h-full bg-primary/30 py-32 p-2">
      <h1 className="h1 text-xl text-center">
        Alzheimer Disease Classification using MobileNetV3
      </h1>
      <div className="flex w-full items-center justify-center rounded-2xl">
        <form action="#" method="POST">
          <div className="bg-primary grid grid-cols-1 space-y-2">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                <div className="h-full w-full text-center flex flex-col justify-center items-center">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="h-40 mx-auto mb-2"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  )}
                  <p className="pointer-none text-gray-500 ">
                    {selectedImage
                      ? ""
                      : "Select a .jpg file from your computer"}
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept=".jpg"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
          <button
            type="button"
            onClick={handleAnalyze}
            className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
          >
            Analyze
          </button>
          <div className="flex mx-auto justify-center">
            <a href="#" className="hover:text-accent underline">
              Sample Image
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Alzheimer;
