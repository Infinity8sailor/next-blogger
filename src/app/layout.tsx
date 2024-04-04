import type { Metadata } from "next";
import "./styles.css";
import { Layout } from "../components/layout";
import { Providers } from "./providers";
import client from "../../tina/__generated__/client";
import { Global } from "../../tina/__generated__/types";

export const metadata: Metadata = {
  title: "Next Blogger",
  description: "Portfolio Website",
};

const get_data = async (): Promise<{
  data: Omit<Global, "id" | "_sys" | "_values">;
  rawData: object;
}> => {
  const tinaProps = await client.queries.layoutQuery();
  const _props = {
    ...tinaProps,
    enableVisualEditing: process.env.VERCEL_ENV === "preview",
  };
  const props = JSON.parse(JSON.stringify(_props)) as typeof _props;
  return {
    data: props.data.global,
    rawData: props.data,
  };
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, rawData } = await get_data();
  return (
    <html lang="en">
      <body className={""}>
        <Providers>
          <Layout rawData={rawData} data={data}>
            <>{children}</>
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
