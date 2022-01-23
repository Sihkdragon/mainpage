import React from "react";
import instagramlogo from "../assets/instagram.png";
import youtubelogo from "../assets/youtube.png";
import googlelogo from "../assets/google.png";
import unikomlogo from "../assets/unikom.png";
export default function Shortcut() {
  return (
    <div className="flex justify-around">
      <div className="text-center  w-20 h-30 shortcut-animate  mr-8">
        <a href="https://instagram.com">
          <button id="instagram" class="shortcut-btn">
            <div class="inner w-full h-full bg-gray-400 bg-opacity-30">
              <img src={instagramlogo} className="" />
            </div>
          </button>
          <label for="instagram" className="font-nauti block text-xl">
            Instagram
          </label>
        </a>
      </div>
      <div className="text-center  w-20 h-30 shortcut-animate  mr-4">
        <a href="https://google.com">
          <button class="shortcut-btn">
            <div class="inner w-full h-full bg-gray-400 bg-opacity-30">
              <img src={googlelogo} className="" />
            </div>
          </button>
        </a>
        <label for="instagram" className="font-nauti block text-xl">
          Google
        </label>
      </div>
      <div className="text-center  w-20 h-30 shortcut-animate  ml-4">
        <a href="https://youtube.com">
          <button class="shortcut-btn">
            <div class="inner w-full h-full bg-gray-400 bg-opacity-30">
              <img src={youtubelogo} className="" />
            </div>
          </button>
        </a>
        <label for="instagram" className="font-nauti block text-xl">
          Youtube
        </label>
      </div>
      <div className="text-center  w-20 h-30 shortcut-animate   ml-8">
        <a href="https://lms.unikom.ac.id">
          <button class="shortcut-btn">
            <div class="inner w-full h-full bg-gray-400 bg-opacity-30 p-2">
              <img src={unikomlogo} className="" />
            </div>
          </button>
        </a>
        <label for="instagram" className="font-nauti block text-xl">
          Lms Unikom
        </label>
      </div>
    </div>
  );
}
