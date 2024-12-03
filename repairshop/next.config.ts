import {withSentryConfig} from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withSentryConfig(withSentryConfig(nextConfig, {

org: "none-znu",
project: "repairshop",

silent: !process.env.CI,


widenClientFileUpload: true,


reactComponentAnnotation: {
enabled: true,
},

tunnelRoute: "/monitoring",


hideSourceMaps: true,

disableLogger: true,


automaticVercelMonitors: true,
}), {

org: "none-znu",
project: "repairshop",

silent: !process.env.CI,

widenClientFileUpload: true,

reactComponentAnnotation: {
enabled: true,
},

tunnelRoute: "/monitoring",

hideSourceMaps: true,


disableLogger: true,

automaticVercelMonitors: true,
});