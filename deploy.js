const FtpDeploy = require('ftp-deploy');

const ftpDeploy = new FtpDeploy();

const config = {
  user: '13602016@aruba.it',
  password: 'Telefono5!',
  host: 'ftp.stylesfeelings.com',
  port: 21,
  localRoot: `${__dirname}/`,
  remoteRoot: '/www.stylesfeelings.com/',
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: ['index.html', 'build/**'],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: ['node_modules/**', 'public/**', 'src/**', '.*'],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: false,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true,
};

ftpDeploy
  .deploy(config)
  .then((res) => console.log('finished:', res))
  .catch((err) => console.log(err));
