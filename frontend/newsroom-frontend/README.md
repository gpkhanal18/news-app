

ng build --configuration production
ng build --configuration testing
ls -la dist/newsroom-frontend
cd dist/newsroom-frontend
zip -r newsroom-frontend.zip * // this is not needed we directly upload to the bucket

Testing url 
http://newsroom-frontend-testing.s3-website.us-east-2.amazonaws.com/

Production Url 
http://newsroom-frontend-production.s3-website.us-east-2.amazonaws.com
