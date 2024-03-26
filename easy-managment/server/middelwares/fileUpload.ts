import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (
    req,
    file,
    callback: (error: Error | null, destination: string) => void
  ) {
    callback(null, "./Images");
  },
  filename: function (
    req,
    file,
    callback: (error: Error | null, destination: string) => void
  ) {
    console.log(file);

    const uniqueName = req.body.personalId
      ? `${req.body.personalId}-profilePic${path.extname(file.originalname)}`
      : `${req.body.companyName}-logo${path.extname(file.originalname)}`;

    callback(null, uniqueName);
  },
});
const upload = multer({ storage });

export default upload;
