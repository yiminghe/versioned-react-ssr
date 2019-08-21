const fs = require('fs-extra');
const pkgPath=`${__dirname}/../pkg/package.json`;
const pkg=require(pkgPath);

delete pkg.esnext;

fs.writeFileSync(pkgPath,JSON.stringify(pkg,null,2));


fs.removeSync(`${__dirname}/../pkg/dist-src`);
