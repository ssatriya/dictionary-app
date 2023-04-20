import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-[773px] mx-auto px-4">{children}</div>;
};

export { Container };
