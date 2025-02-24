echo "switching to master"
git checkout main

echo "building app.."
npm run build

echo "deploying file to server"
scp -r build/* root@128.199.29.151:/var/www/sidhimanfoundation.org/html

echo "done"