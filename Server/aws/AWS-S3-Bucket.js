var AWS = require('aws-sdk');
require('dotenv').config();

// initialize a new instance of an s3 bucket in the virginia region
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: 'us-east-1', // Replace with your AWS region
});

// load any error if the credentials are misconfigured
AWS.config.getCredentials(function (err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log('Access key is there!');
  }
});

// function to fetch data from the bucket with specified folder directory in resolvers
async function fetchImageFromFolder(folderName) {
  const params = {
    Bucket: 'bno-stucco-s3-bucket',
    Prefix: `${folderName}/`,
  };

  try {
    const data = await s3.listObjectsV2(params).promise();
    return data.Contents.map((obj) => ({
      ETag: obj.ETag,
      ImgURL: `https://bno-stucco-s3-bucket.s3.us-east-1.amazonaws.com/${obj.Key}`,
    }));
  } catch (err) {
    console.error(
      `Error fetching images from folder ${folderName} in S3:`,
      err,
    );
    return [];
  }
}

module.exports = fetchImageFromFolder;
