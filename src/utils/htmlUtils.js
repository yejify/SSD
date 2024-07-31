// utils/htmlUtils.js
export const generateHTMLContent = (data) => {
  let htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>솜씨당</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
  <meta http-equiv="Expires" content="Mon, 06 Jan 1990 00:00:01 GMT">
  <meta http-equiv="Expires" content="-1">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Cache-Control" content="no-cache">
  <link rel="shortcut icon" href="https://d1x9f5mf11b8gz.cloudfront.net/common/img/sssd_favicon_v1.png" type="image/x-icon">
  <link rel="icon" href="https://d1x9f5mf11b8gz.cloudfront.net/common/img/sssd_favicon_v1.png" type="image/x-icon">
  <meta property="og:site_name" content="솜씨당">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://d1x9f5mf11b8gz.cloudfront.net/common/css/external-default-common.css">
</head>
<body>
  <div class="container" style="padding: unset;">
    <div class="notice-box" style="padding: unset;">
      <div style="background: #010101;">
`;

  data.forEach((item) => {
    if (item.url) {
      htmlContent += `
        <a href="${item.url}" target="_parent">
          <img src="${item.image}" style="width: 100%; object-fit: contain;">
        </a>
      `;
    } else {
      htmlContent += `
        <img src="${item.image}" style="width: 100%; object-fit: contain;">
      `;
    }
  });

  htmlContent += `
      </div>
    </div>
  </div>
</body>
</html>
`;

  return htmlContent;
};

export const downloadHTMLFile = (content, filename) => {
  const blob = new Blob([content], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
