### **📰 Newsroom Frontend - Deployment Guide** 🚀

Welcome to the **Newsroom Frontend** project! This guide provides step-by-step instructions on how to **build and deploy** the frontend application to **AWS S3** for both **Testing** and **Production** environments.

---

## **📌 Deployment Instructions**
### **1️⃣ Build the Angular Project**
To generate a **production-ready** or **testing-ready** build, use the following commands:

#### 🔹 **For Production Build**
```sh
ng build --configuration production
```

#### 🔹 **For Testing Build**
```sh
ng build --configuration testing
```

### **2️⃣ Verify the Build Output**
After the build process completes, verify that the files are generated correctly:

```sh
ls -la dist/newsroom-frontend
cd dist/newsroom-frontend
```

### **3️⃣ Upload to AWS S3**
The built files in `dist/newsroom-frontend` should be uploaded directly to the corresponding **AWS S3 bucket**. No need to zip the files.The index.html file should be directly at the bucket level.

---

## **🌍 Live Deployment URLs**
### **🔹 Testing Environment**
📍 [Newsroom Frontend - Testing](http://newsroom-frontend-testing.s3-website.us-east-2.amazonaws.com/)

### **🔹 Production Environment**
📍 [Newsroom Frontend - Production](http://newsroom-frontend-production.s3-website.us-east-2.amazonaws.com/)

---

## **✅ Summary**
| Step | Command |
|------|---------|
| **Build for Production** | `ng build --configuration production` |
| **Build for Testing** | `ng build --configuration testing` |
| **Navigate to Build Directory** | `cd dist/newsroom-frontend` |
| **Upload to S3 Bucket** | *Manually upload the files* |

🚀 **Your Newsroom Frontend is now ready to be accessed in the respective environments!** 🎉

---

For any issues, feel free to reach out! Happy coding! 😊
