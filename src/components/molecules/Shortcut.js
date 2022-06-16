import React from "react";
import instagramlogo from "../../assets/instagram.png";
import youtubelogo from "../../assets/youtube.png";
import googlelogo from "../../assets/google.png";
import unikomlogo from "../../assets/unikom.png";
import ShortcutButton from "../atoms/ShortcutButton";
export default function Shortcut() {
  return (
    <div className="flex justify-around gap-x-4 md:gap-x-10">
      <ShortcutButton
        link="https://instagram.com"
        imgSrc={instagramlogo}
        ShorcutName="Instagram"
      />
      <ShortcutButton
        link="https://google.com"
        imgSrc={googlelogo}
        ShorcutName="Google"
      />
      <ShortcutButton
        link="https://youtube.com"
        imgSrc={youtubelogo}
        ShorcutName="Youtube"
      />
      <ShortcutButton
        link="https://lms.unikom.ac.id"
        imgSrc={unikomlogo}
        ShorcutName="Lms Unikom"
      />
    </div>
  );
}
