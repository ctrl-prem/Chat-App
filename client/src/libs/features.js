import moment from "moment";

const fileFormat = (url = "") => {
  const fileExt = url.split(".").pop(); // split by dot(.) and pop the last one out.
  if (fileExt === "mp4" || fileExt === "webm" || fileExt === "ogg")
    return "video";
  if (fileExt === "mp3" || fileExt === "wav") return "audio";
  if (
    fileExt === "png" ||
    fileExt === "jpg" ||
    fileExt === "jpeg" ||
    fileExt === "gif"
  )
    return "image";
  return "file";
};

// eslint-disable-next-line no-unused-vars
const transformImage = (url = "", width = "100px") => {
  return url;
};

const getLast7Days = () => {
  const currentDate = moment();
  const last7Days = [];
  for(let i=0; i<7; i++){
    // last7Days.unshift(currentDate.format("MMM D")); // get last 7 date with month
    // currentDate.subtract(1, "days"); 
    const dayDate = currentDate.clone().subtract(i, "days"); // get complete day subtrated by i.
    const dayName = dayDate.format("dddd"); // extracted day name out of date.

    last7Days.unshift(dayName);
  }
  return last7Days;
};

export { fileFormat, transformImage, getLast7Days };
