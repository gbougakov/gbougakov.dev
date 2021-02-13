import { useState } from "react";

export default function PrivacyFrame({subtitle, ...props}) {
  const [shouldShowFrame, setShowFrame] = useState(false);

  return shouldShowFrame ? <iframe {...props} /> : <div className={`${props.className} flex items-center p-10 justify-center border border-black dark:border-white border-opacity-10 rounded-lg`}>
    <div className="flex-col w-full md:w-2/3 justify-center text-center">
      <p>This embed from {new URL(props.src).host} contains trackers</p>
      <button className="btn-base btn-bordered mt-4" onClick={() => setShowFrame(true)}>Load anyway</button>
    </div>
  </div>
}