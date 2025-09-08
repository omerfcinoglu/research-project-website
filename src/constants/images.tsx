import kku_logo_145x150 from "../assets/kku_logo_145x150.png";
import tubitak_logo from "../assets/tubitak_logo.jpg";
import project_logo from "../assets/project_logo.png";

import demoVideo from "/demoVideo.mp4";
import demoGif from "../assets/demoGif.webp";

interface Members {
  member1: string;
  member2: string;
  member3: string;
  member4: string;
}

interface Images {
  header_logo: string;
  tubitak_logo: string;
  project_logo: string;
  members: Members;
  demoGif: string;
}
interface Videos {
  demoVideo: string
}

const images: Images = {
  header_logo: kku_logo_145x150,
  tubitak_logo: tubitak_logo,
  project_logo: project_logo,
  demoGif: demoGif,
  members: {
    member1: "https://avatar.iran.liara.run/public/55",
    member2: "https://avatar.iran.liara.run/public/38",
    member3: "https://avatar.iran.liara.run/public/49",
    member4: "https://avatar.iran.liara.run/public/59",

  },
};

export const videos: Videos = {
  demoVideo: demoVideo
}

export default images;
