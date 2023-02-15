import React from "react";
import {BASE_URL} from "/src/common/requester";

const FileLink = ({file, children, ...rest}) => {
  if (!file)
    return null;

  if (file instanceof File) {
    return <span {...rest}>
      {file.name}
    </span>
  }

  return <a href={`${BASE_URL}attachment/download/${file.fullFileName}`} target="_blank" {...rest}>
    {children || file.fileName}
  </a>
}

export default FileLink
