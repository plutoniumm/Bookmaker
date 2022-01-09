git pull;

echo "Enter Message: "
read message;

git add .;
git commit -m "$message";
git push;