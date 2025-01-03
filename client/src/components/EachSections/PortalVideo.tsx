import { createPortal } from "react-dom";
import { IoCloseCircle } from "react-icons/io5";

const rootPortal = document.getElementById("portal-video-root");

interface PortalProps {
  close: (open: boolean) => void;
}

const PortalVideo = ({ close }: PortalProps) => {
  if (!rootPortal) {
    console.error("The portal root does not exist.");
    return null;
  }
  return createPortal(
    <div className="fixed w-full h-screen z-50 flex justify-center items-center">
      <div
        className="bg-black bg-opacity-80 w-full h-full absolute"
        onClick={() => close(false)}
      ></div>
      <div className="z-50">
        <div className="flex justify-end mb-2">
        <button className="text-white" onClick={() => close(false)}><IoCloseCircle className="text-[45px] hover:text-[#0e5ddd] transition-all duration-150" /></button>
        </div>
        <iframe
          width="900"
          height="510"
          src="https://www.youtube.com/embed/ZPs3URGs0KQ?si=dIBMv_UAqNMd4RLb"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>,
    rootPortal as HTMLElement
  );
};

export default PortalVideo;