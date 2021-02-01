rm -rf dist &&
npm run build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M 'main' &&
git remote add origin git@github.com:jinchao1992/lulu-ui-website.git &&
git push -f -u origin main &&
echo https://jinchao1992.github.io/lulu-ui-website/index.html
git branch -M 'master' &&
git remote add gitee git@gitee.com:webjinchao/lulu-app-website.git &&
git push -f -u gitee master &&
echo https://webjinchao.gitee.io/lulu-app-website/index.html
cd -
