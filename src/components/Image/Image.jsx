"use client";
// import imageApi from "@/api/imageGeneration";
import React, { useEffect } from "react";

function Image() {
  async function submit() {
    // imageApi()
    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
      });
      const data = await response.json();
      // setMessage(data.message);
      console.log(data)
    } catch (error) {
      setMessage("Error generating image");
    }
  }

  return <div onClick={submit}>Image</div>;
}

export default Image;
