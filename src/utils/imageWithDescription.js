import React, { useEffect, useRef, useState } from "react";

const ImageWithDescription = ({ src, description, onImageProcessed }) => {
  const canvasRef = useRef(null);
  const [isProcessed, setIsProcessed] = useState(false); // State to track if the image has been processed

  useEffect(() => {
    if (!isProcessed && src && description) {
      const image = new Image();
      const logo = new Image();
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      logo.onload = () => {
        image.onload = () => {
          // Determine the size for a square canvas, adjusting for description and logo
          const size = Math.max(image.width, image.height + 120); // Additional space for description + "Powered by" + logo
          canvas.width = size;
          canvas.height = size;

          // Draw the image centered in the canvas
          ctx.drawImage(
            image,
            (size - image.width) / 2,
            (size - image.height - 120) / 2
          );

          // Draw the description in the bottom area above "Powered by" and logo
          ctx.fillStyle = "black";
          ctx.font = "10px Arial";
          ctx.textAlign = "center";

          // Split description into lines
          const words = description.split(" ");
          const lines = ["", "", "", ""];
          let lineIndex = 0;

          words.forEach((word) => {
            const testLine = lines[lineIndex] + word + " ";
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width;
            if (testWidth > size && lineIndex < 3) {
              lineIndex++;
            }
            lines[lineIndex] += word + " ";
          });

          // Draw each line
          lines.forEach((line, index) => {
            ctx.fillText(
              line.trim(),
              size / 2,
              image.height + (index + 1) * 16 + 10
            );
          });

          // Calculate position for "Powered by" and logo to ensure they are centered together
          // Calculate position for "Powered by" and logo to ensure they are centered together
          const poweredByText = "Powered by";
          const poweredByWidth = ctx.measureText(poweredByText).width;
          const logoScale = 0.2; // Change the scale as needed
          const totalWidth = poweredByWidth + logo.width * logoScale + 10; // Corrected to include scaled logo width

          // Draw "Powered by" text
          ctx.fillText(
            poweredByText,
            (size - totalWidth) / 2 + poweredByWidth / 2,
            image.height + 110
          );

          // Draw the logo right after "Powered by" text
          ctx.drawImage(
            logo,
            (size - totalWidth) / 2 + poweredByWidth + 10,
            image.height + 95,
            logo.width * logoScale,
            logo.height * logoScale
          );

          // Convert canvas to File
          canvas.toBlob((blob) => {
            const file = new File([blob], "image_with_description.png", {
              type: "image/png",
            });
            if (onImageProcessed) {
              onImageProcessed(file);
              setIsProcessed(true);
            }
          }, "image/png");
        };
        image.src = src;
        image.crossOrigin = "Anonymous";
      };
      logo.src = "/logoBlack.png";
    }
  }, [src, description, onImageProcessed, isProcessed]);

  return <canvas ref={canvasRef} style={{ display: "none" }}></canvas>;
};

export default ImageWithDescription;


// import ImageWithDescription from "../../../utils/imageWithDescription"

// const [imageFile, setImageFile] = useState(null);
//   const [imageUrl, setImageUrl] = useState('');

//   const handleImageProcessed = (file) => {
//     setImageFile(file);
//     // Create a URL from the File object
//     const url = URL.createObjectURL(file);
//     setImageUrl(url);
//     // Here, you might also want to upload the file to the server
//     console.log(file); // Debugging to see the file object
//   };


// <ImageWithDescription
//         src={details.displayImg}
//         description= {`By acquiring this NFT, you agree to the Terms of Investment as stipulated by Raisecoin and are lawfully investing in ${details.startupNname}. This token signifies your consent and represents proof of your investment made through Raisecoin.`}
//         onImageProcessed={handleImageProcessed}
//       />
//       {imageUrl && (
//         <div>
//           <p>Image processed and available for preview:</p>
//           <img src={imageUrl} alt="Processed Image" style={{ maxWidth: '100%' }} />
//         </div>
//       )}