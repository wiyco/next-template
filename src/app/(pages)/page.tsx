"use client";

import { Code } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Ballet } from "next/font/google";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

import { FullScreen } from "@/components/FullScreen";
import { fetcher } from "@/lib/swr";
import { cn } from "@/utils/cn";

const ballet = Ballet({
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  const searchParams = useSearchParams();
  const { data, error, isLoading } = useSWR<{ message: string; t: string }>(
    `/api?t=${searchParams.get("t") ?? ""}`,
    fetcher
  );

  if (isLoading)
    return (
      <FullScreen>
        <p>Loading...</p>
      </FullScreen>
    );
  if (error)
    return (
      <FullScreen>
        <p>Error!</p>
      </FullScreen>
    );

  return (
    <main className="grid h-full min-h-dvh w-full place-content-center gap-9 p-6 text-neutral-800 dark:text-neutral-300">
      <h1 className={cn(ballet.className, "text-center text-5xl")}>
        Hello, World!
      </h1>
      <section className="grid place-content-center gap-6 text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {`'${data?.message}' from api!`}
        </motion.p>
        <motion.div
          className="grid place-content-center gap-3"
          initial={{ rotateX: 180 }}
          animate={{ rotateX: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl">{`Sleep time is ${data?.t}ms!`}</h2>
          <p>
            If you want to specify the sleep time of api, please specify the
            parameter in the URL!
          </p>
          <p>
            Example: <Code size="sm">?t=1000</Code>
          </p>
        </motion.div>
      </section>
    </main>
  );
}
