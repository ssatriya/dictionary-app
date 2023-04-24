import React from "react";
import Image from "next/image";

import emoticon from "../../public/emoticon.png";

interface Props {
  title: string;
  message: string;
  resolution: string;
}

const Error = (props: { errorMessage: any }) => {
  return (
    <div className="mt-[132px] w-full flex flex-col justify-center items-center">
      <Image src={emoticon} height={64} width={63} alt="Emoticon" />
      <h3 className="mt-11 text-xl font-bold">{props.errorMessage.title}</h3>
      <p className="mt-6 text-xl text-light-gray text-center">{`${props.errorMessage.message} ${props.errorMessage.resolution}`}</p>
    </div>
  );
};

export default Error;
