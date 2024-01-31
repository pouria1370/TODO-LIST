
import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name:"toDo",
    background_color:"#12372A",
    theme_color:"#ADBC9F",
    orientation: "portrait-primary",
    icons: [
        {
            type:"image/png",
            src:"/android-launchericon-48-48.png",
            sizes: "48x48"
        },
        {
            type:"image/png",
            src:"/android-launchericon-72-72.png",
            sizes: "72x72"
        },
        {
            type:"image/png",
            src:"/android-launchericon-96-96.png",
            sizes: "96x96"
        },
        {
            type:"image/png",
            src:"/android-launchericon-144-144.png",
            sizes: "144x144"
        },
        {
            type:"image/png",
            src:"/android-launchericon-192-192.png",
            sizes: "192x192"
        },
        {
            type:"image/png",
            src:"/android-launchericon-512-512.png",
            sizes: "512x512"
        }
    ],
    short_name:"pouriaKalantari Task",
    start_url:"/",
    display: "standalone",
    description:"This is a Test Task for interview by Pouria kalantari for GSM-PY.CO",
}
}