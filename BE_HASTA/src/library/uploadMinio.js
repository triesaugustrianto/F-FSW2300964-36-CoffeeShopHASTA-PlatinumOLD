const fs = require("fs");
const { minioClient, bucketName } = require("../middleware/minioProduct");
//minio
const uploadMinio = async (filePath, filename) => {
  let result;
  try {
    //put object
    await minioClient.fPutObject(bucketName, filename, filePath);
    result = await minioClient.presignedGetObject(bucketName, filename);
    fs.unlinkSync(filePath);
    return result;
  } catch (error) {
    fs.unlinkSync(filePath);
    return null;
  }
};

module.exports = { uploadMinio };
