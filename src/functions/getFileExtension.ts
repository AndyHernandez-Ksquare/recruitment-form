const getFileExtension = (file: any) => {
  // Get the last index of the dot (.) character
  const dotIndex = file.lastIndexOf(".");

  // Extract the extension from the file name
  if (dotIndex !== -1) {
    const extension = file.slice(dotIndex + 1).toLowerCase();
    return extension;
  }

  return "";
};

export default getFileExtension;
