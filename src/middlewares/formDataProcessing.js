// Core
import os from 'os';
import { IncomingForm } from 'formidable';


export const formDataProcessing = ({
  multiple = false,
  uploadDir = os.tmpdir(),
  keepExtensions = true,
  maxFileSize = 5 * 1024 * 1024, // 5mb
  maxFieldSize = 10 * 1024, // 10kb
}) => (req, res, next) => {
  const form = new IncomingForm({
    multiple, uploadDir, maxFileSize, maxFieldSize, keepExtensions,
  });

  // eslint-disable-next-line consistent-return
  form.parse(req, (error, fields, files) => {
    if (error) {
      return next(error);
    }
    req.body = { ...fields, ...files };
    next();
  });
};

