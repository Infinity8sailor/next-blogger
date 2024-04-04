import React from "react";
import { Footer } from "./footer";
import { Theme } from "./theme";
import layoutData from "../global/index.json";
import { Global } from "../../../tina/__generated__/types";
import ChakraNavBar from "./Navigation/chakra_nav";

export const Layout = ({
  children,
  data,
  rawData,
}: {
  data: Omit<Global, "id" | "_sys" | "_values">;
  rawData: object;
  children: React.ReactNode;
}) => {
  return (
    <Theme data={data?.theme}>
      <div
        className={`min-h-screen flex flex-col ${
          data.theme?.font === "nunito" && "font-nunito"
        } ${data.theme?.font === "lato" && "font-lato"} ${
          data.theme?.font === "sans" && "font-sans"
        }`}
      >
        <ChakraNavBar data={data?.header || layoutData.header} />
        <div className="flex-1 text-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000 flex flex-col">
          {children}
        </div>
        <Footer
          rawData={rawData}
          data={data?.footer}
          icon={data?.header?.icon}
        />
      </div>
    </Theme>
  );
};
