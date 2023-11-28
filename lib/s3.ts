import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { S3Client } from "@aws-sdk/client-s3";

//AWS S3 BUCKET
const region = process.env.REGION as string;
const bucketName = process.env.S3_BUCKET_NAME as string;
const accessKeyId = process.env.ACCESS_KEY_ID as string;
const secretAccessKey = process.env.SECRET_ACCESS_KEY as string;


export const createAWSUrl = async (
  Key: string,
  contentType: string | string[] | undefined,
) => {
  const client = new S3Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
  const { url, fields } = await createPresignedPost(client, {
    Bucket: bucketName,
    Key,
    Conditions: [["starts-with", "$Content-Type", contentType?.toString()!]],
    Fields: {
      "Content-Type": contentType?.toString()!,
    },
    Expires: 600,
  });
  return { url, fields };
};
//AWS S3 BUCKET
